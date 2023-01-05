import { useEffect, useState } from 'react';
import { getAreaData } from './api';
import AreaCard from './components/AreaCard';
import { Card, Container, Grid } from '@material-ui/core';

import './App.css';

function App() {
  const [areas, setAreas] = useState([]);
  const [areaCode, setAreaCode] = useState('');
  const [oldAreaCode, setOldAreaCode] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const areaData = await getAreaData(areaCode);
      setFormSubmitted(true);
      setOldAreaCode(areaCode);
      setAreas(areaData);
    } catch (error) {
      window.alert(error);
    }
  };

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form onSubmit={handleSubmit}>
        <label>Please input first half of postcode in here: </label>
        <input
          type="text"
          id="areaCode"
          value={areaCode}
          onChange={(e) => setAreaCode(e.target.value.toUpperCase())}
        />

        <button type="submit">Submit</button>
      </form>
      {formSubmitted ? (
        <div>
          <h2>{`Areas for ${oldAreaCode}: ${areas.length}`}</h2>
          <Container>
            <Grid container spacing={1} justifyContent="center">
              {areas.map((places) => (
                <Grid item>
                  <AreaCard key={places['place name']} places={places} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </div>
      ) : null}
    </div>
  );
}

export default App;
