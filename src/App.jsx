import { useEffect, useState } from 'react';
import { getAreaData } from './api';

import './App.css';

function App() {
  const [areas, setAreas] = useState([]);
  const [outcodeInput, setOutcodeInput] = useState('');
  const [newOutcode, setNewOutcode] = useState('BB10');

  const load = async (outcode) => {
    try {
      const areaData = await getAreaData(outcode);

      setAreas(areaData);
    } catch (error) {
      window.alert('todo: fix app');
    }
  };

  useEffect(() => {
    load(newOutcode);
  }, [newOutcode]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNewOutcode(outcodeInput);
    setOutcodeInput('');
  };

  return (
    <div className='App'>
      <h1>Postcoders</h1>
      <h2>{`Areas for ${newOutcode}: ${areas.length}`}</h2>
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
        <button type='submit'>GO!</button>
      </form>
    </div>
  );
}

export default App;
