import { useEffect, useState } from 'react'
import { getAreaData } from './api'
import './App.css'
import OutlinedCard from './OutlinedCard';
import getData from './get-data';

function App() {

  const [areas, setAreas] = useState([]);
  const [postcode, setPostcode] = useState('')
  const [finalPostcode, setFinalPostcode] = useState('')
  const [url, setUrl] = useState('')

  const load = async () => {
    try {
      const areaData = await getAreaData(postcode)

      setAreas(areaData);
    } catch (error) {
     error.message !== "Request failed with status code 404" && console.log(error.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFinalPostcode(postcode)
    setUrl(`https://api.zippopotam.us/GB/${finalPostcode}`)
  try {
    await getAreaData(finalPostcode)
    await getData(url)
  } catch (err) {
    err.message !== "Request failed with status code 404" && console.log(err.message)
    }
  }

  useEffect(() => {
    load();
    setPostcode('')
  }, [finalPostcode, areas]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <h2>{`Areas for ${finalPostcode.toUpperCase()}: ${areas.length}`}</h2>
      <form onSubmit={handleSubmit}>
        <input 
        placeholder="Type postcode here..."
        value={postcode}
        onChange={(e) => {
            setPostcode(e.target.value)
        }}
        />
        </form>
        <ul>
        {areas.map((area) => {
          return (
            <li key={area["place name"]}>
        <OutlinedCard place_name={area["place name"]} longitude={area.longitude} state={area.state} latitude={area.latitude}/>
            </li>
          )
        })}
        </ul>
     </div>
  )
}

export default App