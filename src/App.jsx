import { useEffect, useState } from 'react'
import { getAreaData } from './api/index'

import './App.css'
import SearchBar from './Components/SearchBar.jsx';

function App() {

  const [areas, setAreas] = useState([]);
  const [postcode, setPostcode]= useState('BB10')

  const load = async () => {
    try {
      const areaData = await getAreaData(postcode) 
      areas.concat(areaData);
  
      setAreas(areaData);
    } catch (error) {
      window.alert("todo: fix app")
    }
  }

  useEffect(() => {
    load();
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>

      <SearchBar setPostcode={setPostcode}/>
    </div>
  )
}

export default App
