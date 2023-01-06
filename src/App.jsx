import { useEffect, useState } from 'react'
import { getAreaData } from './api'
import './App.css'
import { CardList } from './components/CardList';
import { InputPostcode } from './components/InputPostcode';
import { checkPostcodeInCache, filterAreasByPostcode } from './utils/utils';


function App() {

  const [areas, setAreas] = useState([]);
  const [postcode, setPostcode] = useState("");
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const areasByPostcode = filterAreasByPostcode(areas, postcode);
 
  const load = async () => { 
    setError(false);

    if (!postcode || checkPostcodeInCache(areas, postcode)) {
      return;
    }

    setIsLoading(true);

    try {
      const areaData = await getAreaData(postcode)

      const postcodeAddedToAreaData = [...areaData].map((area) => {
        area.postcode = postcode;

        return area;
      })

      setAreas((currentAreas) => {
        const mergedAreaData = [...currentAreas].concat(postcodeAddedToAreaData)

        return mergedAreaData;
      });


    } catch (error) {
      error.message.includes(404) 
        ? setError("Postcode Not Found")
        : setError(error.code);

    }
    setIsLoading(false);
  }

  useEffect(() => { 
    load();
  }, [postcode]);


  return (
    <div className="App">
      <h1>Postcoders</h1>
      {postcode ? 
        <h2>{`Areas for ${postcode}: ${areasByPostcode.length}`}</h2> : 
        <h2>Welcome to Postcoders! Complete your details below to start!</h2>
      }
      <InputPostcode setPostcode={setPostcode} />
      <div className={error? "error" : null}>{error? <p>{error}</p> : null}</div>
      <CardList areas={areasByPostcode}/>
      {isLoading ? <p>Loading... </p> : null}
    </div>
  )
}

export default App
