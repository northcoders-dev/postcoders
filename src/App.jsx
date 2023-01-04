import { useEffect, useState } from 'react';
import { getAreaData } from './api';
import Card from '@mui/material/Card';

import './App.css';

function App() {
  const [areas, setAreas] = useState([]);
  const [outcode, setOutcode] = useState('');
  const [searchComplete, setSearchComplete] = useState(false);
  const [cache, setCache] = useState({});

  const handleInput = e => {
    setSearchComplete(false);
    setOutcode(e.target.value);
  };

  const handleSubmit = async e => {
    if (cache.hasOwnProperty(outcode)) {
      e.preventDefault();
      setAreas(cache[`${outcode}`]);
      setSearchComplete(true);
    } else {
      try {
        e.preventDefault();
        const areaData = await getAreaData(outcode);
        setAreas(areaData);
        setCache(currCache => {
          return { ...currCache, [`${outcode}`]: areaData };
        });
        setSearchComplete(true);
        console.log(cache);
      } catch (error) {
        window.alert('todo: fix app');
      }
    }
  };

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form onSubmit={handleSubmit}>
        <label>Enter beginning of postcode:</label>
        <input type="text" placeholder="e.g. 'M3'" onChange={handleInput} />
        <button type="submit">Submit</button>
      </form>
      {searchComplete && <h2>{`Areas for ${outcode}: ${areas.length}`}</h2>}
      {areas.map(area => {
        return (
          <Card key={area['place name']}>
            <h2>{area['place name']}</h2>
            <p>Longitude: {area.longitude}</p>
            <p>Latitude: {area.latitude}</p>
            <p>Country: {area.state}</p>
            <p>Country abbreviation: {area['state abbreviation']}</p>
          </Card>
        );
      })}
    </div>
  );
}

export default App;
