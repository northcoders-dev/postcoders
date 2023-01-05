import { useState } from 'react'
import { getAreaData } from './api'
import { Card, CardContent, Typography } from '@mui/material';
import './App.css'

const cache = {}

function App() {
  
  const [areas, setAreas] = useState([]);
  const [areaInput, setAreaInput] = useState('');

  const handleAreaChange = (event) => {
    setAreaInput(event.target.value)
  }
  
  const handleAreaSubmit = (event) => {
    event.preventDefault();
    if (cache[areaInput]) {
      const areaData = cache[areaInput];
      setAreas(areaData)
    } else {
      getAreaData(areaInput)
      .then((areaData) => {
        cache[areaInput] = areaData
        setAreas(areaData)
      })
      .catch((error) => {
        window.alert('Provide a valid area code - only the first half of the postcode (e.g. M13) is necessary!')
      })
    }
  }

  return (
    <div>
    <div className="App">
      <h1>Postcoders</h1>
      <h2>{`Areas for ${areaInput}: ${areas.length}`}</h2>
    </div>
    <div>
      {areas.map((area) => {
        return (
          <Card
            sx={{ maxWidth: 325, backgroundColor: 'black', padding: 1, borderRadius: 1}}
            variant='outlined'
            key={area['place name']}
          >
            <CardContent>
              <Typography variant='h4' color='red' component='div'>
                {area['place name']}
              </Typography>
              <Typography color='red' sx={{ fontSize: 16}}>
                Country: {area.state}
              </Typography>
              <Typography color='red' sx={{ fontSize: 16}}>
                Country Abbreviation: {area['state abbreviation']}
              </Typography>
              <Typography color='red' sx={{ fontSize: 16}}>
                Coordinates: {area.latitude}, {area.longitude}
              </Typography>
            </CardContent>
          </Card>
        )
      })}
    </div>

    <div>
      <form onSubmit={handleAreaSubmit}>
        Enter Area Code - only the first half of the postcode (e.g. M13) is necessary!
        <input
          onChange={handleAreaChange}
          type='text'
          value={areaInput}
          placeholder='Enter Area Code'
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
