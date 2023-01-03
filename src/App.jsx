import { useEffect, useState } from 'react'
import { getAreaData } from './api'

import './App.css'

function App() {
  const [areas, setAreas] = useState([]);
  const [tempPostcode, setTempPostcode] = useState()
  const [postcode, setPostcode] = useState("BB10");

  const load = async () => {
    try {
      const areaData = await getAreaData(postcode)
      setAreas(areaData);
    } catch (error) {
      console.log(error)
      window.alert("todo: fix app")
    }
  }

  const handlePostcode = (event) => {
    event.preventDefault();
    setPostcode(tempPostcode)
  }

  useEffect(() => {
    load();
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form onSubmit={handlePostcode}>
        <label>
          Postcode:
          <input type="text" name="postcode" onChange={(e) => setTempPostcode(e.target.value)}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
    </div>
  )
}

export default App
