import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import Card from "@mui/material/Card";

import "./App.css";
import { CardContent } from "@mui/material";

function App() {
  const [areas, setAreas] = useState([]);
  const [tempPostcode, setTempPostcode] = useState();
  const [postcode, setPostcode] = useState("BB10");

  const load = async () => {
    try {
      const areaData = await getAreaData(postcode);
      setAreas(areaData);
    } catch (error) {
      console.log(error);
      window.alert("todo: fix app");
    }
  };

  const handlePostcode = (event) => {
    event.preventDefault();
    setPostcode(tempPostcode);
  };

  useEffect(() => {
    load();
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form onSubmit={handlePostcode}>
        <label>
          Postcode:
          <input
            type="text"
            name="postcode"
            onChange={(e) => setTempPostcode(e.target.value)}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
      <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
      {areas.map((area) => {
        return (
          <Card variant="outlined" sx={{ display: 'inline-block', maxWidth: 300 }}>
            <CardContent>
              <h3>{area["place name"]}</h3>
              <div class="flex-container">
                <p class="flex-child">Latitude {area.latitude}</p>
                <p class="flex-child">Longitude {area.longitude}</p>
              </div>
              <div class="flex-container">
                <p class="flex-child">{area.state}</p>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

export default App;
