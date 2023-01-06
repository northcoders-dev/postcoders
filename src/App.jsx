import { useEffect, useState } from 'react'
import { getAreaData } from './api'
import './App.css'
import { CardList } from './components/CardList';
import { InputPostcode } from './components/InputPostcode';


function App() {

  const [areas, setAreas] = useState([]);
  const [postcode, setPostcode] = useState("")
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false)

  const load = async () => { 

    setError(false);

    if (!postcode) {
      return;
    }

    setIsLoading(true);

    try {
      const areaData = await getAreaData(postcode)

      areas.concat(areaData);
  
      setAreas(areaData);
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
      <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
      <InputPostcode setPostcode={setPostcode} />
      <div className={error? "error" : null}>{error? <p>{error}</p> : null}</div>
      <CardList areas={areas}/>
      {isLoading ? <p>Loading... </p> : null}
    </div>
  )
}

export default App
