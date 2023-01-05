import { useEffect, useState } from 'react'
import { getAreaData } from './api'

import './App.css'

function App() {

  const [areas, setAreas] = useState([]);
  const [areaInput, setAreaInput] = useState('');

  const handleAreaChange = (event) => {
    setAreaInput(event.target.value)
  }
  
  const handleAreaSubmit = (event) => {
    event.preventDefault();
    const trimmedCode = areaInput.slice(0, -3)
    getAreaData(trimmedCode)
      .then((newAreas) => {
          setAreas(newAreas)
      })
      .catch((error) => {
        window.alert('Provide a valid area code')
      })
  }

  return (
    <div>
    <div className="App">
      <h1>Postcoders</h1>
      <h2>{`Areas for ${areaInput.slice(0, -3)}: ${areas.length}`}</h2>
    </div>

    <div>
      <form onSubmit={handleAreaSubmit}>
        <input
          onChange={handleAreaChange}
          type='text'
          value={areaInput}
          placeholder='Enter Area Code - first half only, e.g. M13'
        />
        <button
          id='areaCodeButton'
          type='submit'
          disabled={areaInput === "" ? true : false}
        >
            Enter
        </button>
      </form>
    </div>
    </div>
  )
}

export default App;
