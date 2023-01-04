import { useEffect, useState } from 'react';
import { getAreaData } from './api';
import SearchPostcode from './Components/SearchPostcode';
import PostcodeResults from './Components/PostcodeResults';
import './App.css';

function App() {

  const [areas, setAreas] = useState([]);
  const [value, setValue] = useState("");
  const [newValue, setNewValue] = useState("BB10");

  const load = async () => {
    try {
      const areaData = await getAreaData(newValue)
      setAreas(areaData);
    } catch (error) {
      window.alert("todo: fix app")
    }
  }

  useEffect(() => {
    load();
  }, [newValue]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <SearchPostcode value={value} setValue={setValue} setNewValue={setNewValue}/>
      <h2>{`Areas for ${newValue}: ${areas.length}`}</h2>
      <PostcodeResults areas={areas}/>
    </div>
  )
}

export default App
