import { useEffect, useState } from 'react';
import { getAreaData } from './api';
import SearchPostcode from './Components/SearchPostcode';
import PostcodeResults from './Components/PostcodeResults';
import './App.css';

function App() {

  const [areas, setAreas] = useState([]);
  const [value, setValue] = useState("");
  const [newValue, setNewValue] = useState("BB10");
  const [loading, setLoading] = useState(false)

  const load = async () => {
    try {
      setLoading(true)
      const areaData = await getAreaData(newValue)
      setAreas(areaData);
      setLoading(false)
    } catch (error) {
      window.alert("todo: fix app")
    }
  }

  useEffect(() => {
    load();
  }, [newValue]);

  if (loading) {
    return <p>...Loading ...</p>;
  }

  
  return <div className="App">
      <h1>Postcoders</h1>
      <SearchPostcode value={value} setValue={setValue} setNewValue={setNewValue} />
      <h2>{`Areas for ${newValue}: ${areas.length}`}</h2>
      <PostcodeResults areas={areas}/>
    </div>
}

export default App
