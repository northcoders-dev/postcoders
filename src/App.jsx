import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import PostcodeCard from "./PostcodeCard";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [postCode, setPostCode] = useState("");
  const [cache, setCache] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPostCode(userInput);
  };

  const load = async (postCode) => {
    try {
      if (cache[postCode]) {
        setAreas(cache[postCode]);
      } else {
        const areaData = await getAreaData(postCode);
        setCache((currCache) => {
          const updatedCache = { ...currCache };
          updatedCache[postCode] = areaData;
          return updatedCache;
        });
        setAreas(areaData);
      }
    } catch (error) {
      window.alert("Invalid Postcode");
    }
  };

  useEffect(() => {
    if (postCode) load(postCode);
  }, [postCode]);

  return (
    <div className="App" style={{ height: "auto", minHeight: "90vh" }}>
      <h1>Postcoders</h1>
      <h2>{`Areas for ${postCode.toUpperCase() || "Postcode"}: ${
        areas.length
      }`}</h2>
      <h4>
        Please only include the first part of your postcode in the search (e.g.
        “M1” rather than the full “M1 7ED”).
      </h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchField">
          <input
            required
            className="searchField"
            type="text"
            value={userInput}
            minLength={2}
            maxLength={4}
            onChange={handleChange}
          />
        </label>
        <button className="searchButton" type="submit">
          Search
        </button>
      </form>
      <ul style={{ padding: 0, margin: 0 }}>
        {areas.map((area) => {
          return <PostcodeCard key={area["place name"]} area={area} />;
        })}
      </ul>
    </div>
  );
}

export default App;
