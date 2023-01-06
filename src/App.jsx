import { useEffect, useState } from 'react'
import { getAreaData } from './api'

import './App.css'

function App() {

  const [areas, setAreas] = useState([]);
  const [error, setError] = useState(false);

  const load = async () => {
    try {
      const areaData = await getAreaData()

      areas.concat(areaData);
  
      setAreas(areaData);
    } catch (error) {
      setError(error.code);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <h2>{`Areas for BB10: ${areas.length}`}</h2>
      <div className={error? "error" : null}>{error? <p>{error}</p> : null}</div>
    </div>
  )
}

export default App
