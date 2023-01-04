import { useEffect, useState } from 'react';
import { getAreaData } from './api';

import './App.css';
import AreaCard from './components/AreaCard';

function App() {
  const [areas, setAreas] = useState([]);
  const [outcodeInput, setOutcodeInput] = useState('');
  const [newOutcode, setNewOutcode] = useState('BB10');
  const [displayedOutcode, setDisplayedOutcode] = useState('BB10');

  const load = async (outcode) => {
    try {
      const areaData = await getAreaData(outcode);
      setAreas(areaData);
      localStorage.setItem(newOutcode, JSON.stringify(areaData));
    } catch (error) {
      window.alert('Please try another outcode');
    }
  };

  useEffect(() => {
    load(newOutcode);
  }, [newOutcode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (localStorage.getItem(outcodeInput)) {
      setAreas(JSON.parse(localStorage.getItem(outcodeInput)));
      setDisplayedOutcode(outcodeInput);
    } else {
      setNewOutcode(outcodeInput);
      setDisplayedOutcode(outcodeInput);
    }
    setOutcodeInput('');
  };

  return (
    <div className='App'>
      <h1>Postcoders</h1>
      <h2>{`Areas for ${displayedOutcode}: ${areas.length}`}</h2>
      <h3>Try another postcode!</h3>
      <p>
        You only need to enter the "outcode" for example “M1” rather than the
        full “M1 7ED”
      </p>
      <form onSubmit={handleSubmit}>
        <label htmlFor='outcode'>
          {'Outcode: '}
          <input
            type='text'
            id='outcode'
            value={outcodeInput.toUpperCase()}
            placeholder='M1'
            onChange={(e) => {
              setOutcodeInput(e.target.value);
            }}
          ></input>
        </label>
        <button type='submit'>Search</button>
      </form>
      <div className='cards-container'>
        {areas.map((area) => {
          return (
            <AreaCard
              key={area['place name']}
              area={area}
              outcode={displayedOutcode}
            ></AreaCard>
          );
        })}
      </div>
    </div>
  );
}

export default App;
