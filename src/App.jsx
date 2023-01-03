import { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [currentPostcode, setCurrentPostcode] = useState("BB10");
  const [postcode, setPostcode] = useState("");

  const load = async (postcode) => {
    try {
      const areaData = await getAreaData(postcode);

      setAreas(areaData);
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCurrentPostcode(postcode);
    await load(postcode);
    setPostcode("");
  };

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <h2>{`Areas for ${currentPostcode}: ${areas.length}`}</h2>
      <p>
        Enter the outcode for the postcode below as follows: e.g. (BB10) for
        BB10 7ED or (M1) for M1 7ED
      </p>
      <form action="submit" onSubmit={handleSubmit}>
        <label htmlFor="postcodeInput">Enter Outcode:</label>
        <input
          id="postcodeInput"
          type="text"
          value={postcode}
          onChange={(e) => {
            setPostcode(e.target.value);
          }}
        />
        <button>Search for areas</button>
      </form>
    </div>
  );
}

export default App;
