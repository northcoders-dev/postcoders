import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import Error from "./Error";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [postcode, setPostcode] = useState("");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);

  const load = async () => {
    try {
      const areaData = await getAreaData(postcode);

      setAreas(areaData);
      console.log(areaData);
      setError(null);
    } catch (error) {
      setError(error);
      console.log(error);
    }
  };

  useEffect(() => {
    if (/(^[a-zA-z]+\d)/.test(postcode)) load();
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search Postcode"
          onChange={(e) => setPostcode(e.target.value)}
        ></input>
      </div>
      <Error error={error} />

      <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
    </div>
  );
}

export default App;
