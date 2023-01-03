import { useState } from "react";
import { getAreaData } from "./api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [postCodeInput, setPostCodeInput] = useState("");
  const [finalInput, setFinalInput] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [postCodeCache, setPostCodeCache] = useState({});

  const load = async (postCode) => {
    setIsLoading(true);
    try {
      if (postCodeCache.hasOwnProperty(postCode)) {
        setAreas(postCodeCache[postCode]);
      } else {
        const areaData = await getAreaData(postCode);

        setAreas(areaData);
        setPostCodeCache((cache) => {
          const newCache = { ...cache };
          newCache[postCode] = areaData;
          return newCache;
        });
      }
      setIsLoading(false);
      setInvalidInput(false);
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 404) {
        setInvalidInput(true);
      } else {
        window.alert("todo: fix app");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postCodeInput.length <= 4 && postCodeInput.length > 0) {
      setInvalidInput(false);
      setFinalInput(postCodeInput.trim().toUpperCase());
      load(postCodeInput.trim());
    } else {
      setInvalidInput(true);
    }
  };

  const handleInput = (e) => {
    setPostCodeInput(e.target.value);
  };

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postcodeInput">
          Input an outcode (the first part of a postcode).
        </label>
        <input
          id="postcodeInput"
          onChange={handleInput}
          value={postCodeInput}
        />
        {invalidInput ? (
          <p>Input invalid. Please use a valid outcode.</p>
        ) : null}
        <button type="submit">Submit</button>
      </form>
      {isLoading ? <p>Loading...</p> : null}
      {areas.length ? (
        <section>
          <h2>{`Areas for ${finalInput}: ${areas.length}`}</h2>
          <ul>
            {areas.map((area, index) => {
              return (
                <Card key={`${+index}`} sx={{ minWidth: 275 }}>
                  <CardContent>
                    <section>
                      <Typography sx={{ fontSize: 14 }}>Place:</Typography>
                      <Typography sx={{ fontSize: 12 }}>
                        {area["place name"]}, {area.state}
                      </Typography>
                    </section>
                    <section>
                      <Typography sx={{ fontSize: 14 }}>
                        Coordinates:
                      </Typography>
                      <Typography sx={{ fontSize: 12 }}>
                        {`Longitude: ${area.longitude}, Latitude: ${area.latitude}`}
                      </Typography>
                    </section>
                  </CardContent>
                </Card>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}

export default App;
