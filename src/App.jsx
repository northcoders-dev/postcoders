import { useEffect, useState, useCallback } from "react";
import { getAreaData } from "./api";
import OutcodeCard from "./components/OutcodeCard";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [outcode, setOutcode] = useState("BB10");
  const [outcodeDisplay, setOutcodeDisplay] = useState("BB10");
  const [cache, setCache] = useState({});

  const load = async () => {
    try {
      let areaData;
      if (cache[outcode]) {
        areaData = cache[outcode];
      } else {
        areaData = await getAreaData(outcode);
        setCache({ ...cache, [outcode]: areaData });
      }
      areas.concat(areaData);
      setAreas(areaData);
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  useEffect(() => {
    load();
  }, []);

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault();
      setOutcodeDisplay(outcode);
      load();
    },
    [outcode]
  );

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="outcode">Outcode</label>
        <br />
        <textarea
          name="outcode"
          id="outcode"
          onChange={(e) => setOutcode(e.target.value)}
        />
        <br />
        <br />
        <input type="submit" value="Submit" aria-label="submit outcode" />
      </form>
      <h2>{`Areas for ${outcodeDisplay}: ${areas.length}`}</h2>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
        {areas.map((area) => {
          return <OutcodeCard area={area} key={area["place name"]} />;
        })}
      </div>
    </div>
  );
}

export default App;
