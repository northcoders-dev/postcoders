import { useEffect, useState } from 'react'
import { getAreaData } from './api'
import './App.css'

function App() {

  const [areas, setAreas] = useState([]);
  const [postcode, setPostcode] = useState('')
  const [finalPostcode, setFinalPostcode] = useState('')
  const load = async () => {
    try {
      const areaData = await getAreaData(postcode)

  
      setAreas(areaData);
    } catch (error) {
      console.log(error.message)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setFinalPostcode(postcode)
  try {
    await getAreaData(finalPostcode)
  } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {
    load();
    setPostcode('')
  }, [finalPostcode, areas]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <h2>{`Areas for ${finalPostcode.toUpperCase()}: ${areas.length}`}</h2>
      <form onSubmit={handleSubmit}>
        <input 
        placeholder="Type postcode here..."
        value={postcode}
        onChange={(e) => {
            setPostcode(e.target.value)
        }}
        />
        </form>
     </div>
  )
}

export default App