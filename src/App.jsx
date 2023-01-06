import { useEffect, useState } from "react";
import axios from "axios";
// import { getAreaData } from "./api";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [outcode, setOutcode] = useState("");

  useEffect(() => {
    axios.get(`https://api.zippopotam.us/GB/${outcode}`).then((res) => {
      console.log(res.data.places, "axios");
      setAreas(res.data.places.length);
      console.log(areas, "areas state inside axios");
    });
  }, [outcode]);

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
      </form>
      <h2>{`Areas for ${outcode.toUpperCase()}: ${areas}`}</h2>
    </div>
  );
}

export default App;
