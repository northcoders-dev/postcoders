import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import Error from "./Error";
import AreaCard from "./AreaCard";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [postcode, setPostcode] = useState("");
  const [loading, setLoading] = useState(null);
  const [error, setError] = useState(null);
  const [cache, setCache] = useState({});
  const [validPostcode, setValidPostcode] = useState(false);

  const load = async () => {
    try {
      if (!cache[postcode]) {
        setLoading(true);

        const areaData = await getAreaData(postcode);
        setAreas(areaData);
        setCache((prevCache) => ({
          ...prevCache,
          [postcode]: areaData,
        }));
      } else {
        setAreas(cache[postcode]);
      }

      setError(null);
    } catch (error) {
      setError(error);
    }
    setLoading(false);
  };

  useEffect(() => {
    if (/(^[a-zA-z]+\d)/.test(postcode)) {
      load();
      setValidPostcode(true);
    } else setValidPostcode(false);
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>

      <div className="searchBar">
        <input
          type="text"
          placeholder="Search"
          onChange={(e) => setPostcode(e.target.value)}
        ></input>
      </div>
      <Error error={error} />

      {!validPostcode || error ? (
        <p>Please enter a valid outcode </p>
      ) : (
        <div>
          {loading ? (
            <p>Loading ... </p>
          ) : (
            <div>
              <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
              {areas.map((area, i) => (
                <AreaCard key={i} area={area} />
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
