import { useEffect, useState } from 'react'
import { getAreaData } from './api'
import PostcodeSearch from './Components/PostcodeSearch';
import Cards from './Components/Cards';

import './App.css'

function App() {

  const [areas, setAreas] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [submittedValue, setSubmittedValue] = useState("BB10");

  const load = async () => {
    try {
      setIsLoading(true);
      const areaData = await getAreaData(submittedValue);
  
      setAreas(areaData);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setError(error)
      console.log(error)
    }
  }

  useEffect(() => {
    load();
  }, [submittedValue]);

  return isLoading ? <>Loading...</> :
   (
    <div className="App">
      <h1>Postcoders</h1>
      <PostcodeSearch inputValue={inputValue} setInputValue={setInputValue} setSubmittedValue={setSubmittedValue} />
      <h2>{`Areas for ${submittedValue}: ${areas.length}`}</h2>
      <Cards areas={areas} />
    </div>
  )
}

export default App
