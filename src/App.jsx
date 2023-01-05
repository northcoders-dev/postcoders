import { useEffect, useState } from 'react'
import { getAreaData } from './api'
import { Card, CardContent, Typography } from '@mui/material';

import './App.css'

function App() {

  const [areas, setAreas] = useState([]);
  const [areaInput, setAreaInput] = useState('');

  const handleAreaChange = (event) => {
    setAreaInput(event.target.value)
  }
  
  const handleAreaSubmit = (event) => {
    event.preventDefault();
    getAreaData(areaInput)
      .then((newAreas) => {
        setAreas(newAreas)
      })
      .catch((error) => {
        window.alert('Provide a valid area code - only the first half of the postcode (e.g. M13) is necessary!')
      })
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
            sx={{ maxWidth: 325}}
            variant='outlined'
            key={area['place name']}
          >
            <CardContent>
              <Typography variant='h4' component='div'>
                {area['place name']}
              </Typography>
              <Typography color='text.secondary' sx={{ fontSize: 16}}>
                Country: {area.state}
              </Typography>
              <Typography color='text.secondary' sx={{ fontSize: 16}}>
                Country Abbreviation: {area['state abbreviation']}
              </Typography>
              <Typography color='text.secondary' sx={{ fontSize: 16}}>
                Longitude: {area.longitude}
              </Typography>
              <Typography color='text.secondary' sx={{ fontSize: 16}}>
                Latitude: {area.latitude}
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
