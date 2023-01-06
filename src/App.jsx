import { useEffect, useState } from "react";
import axios from "axios";
import { AreaInfoCard } from "./components/AreaInfoCard";
// import { getAreaData } from "./api";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [outcode, setOutcode] = useState("");
  const [outcodeFromClick, setOutcodeFromClick] = useState("");
  const [previousSearch, setPreviousSearch] = useState("");

  const handleClick = () => {
    setOutcodeFromClick(outcode);
  };

  useEffect(() => {
    if (outcodeFromClick !== "" && outcodeFromClick !== previousSearch) {
      axios
        .get(`https://api.zippopotam.us/GB/${outcodeFromClick}`)
        .then((res) => {
          setAreas(res.data.places);
          setPreviousSearch(outcodeFromClick);
        });
    }
  }, [outcodeFromClick]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form>
        Outcode:
        <input
          type="text"
          placeholder="e.g. L39"
          value={outcode}
          onChange={(e) => setOutcode(e.target.value)}
        ></input>
        <button type="button" onClick={handleClick}>
          Search
        </button>
      </form>
      <h2>{`Areas for ${outcode.toUpperCase()}: ${areas.length}`}</h2>
      {areas.map((area) => (
        <AreaInfoCard key={area["place name"]} area={area} />
      ))}
    </div>
  );
}

export default App;
