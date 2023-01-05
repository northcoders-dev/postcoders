import react, { useEffect, useState } from "react";
import { getAreaData } from "./api";

import { Card, CardContent, Typography } from "@mui/material";

import "./App.css";

const cache = {};
function App() {
  const [areas, setAreas] = useState([]);
  const [postCodeInput, setPostCodeInput] = useState("");

  const handlePostCodeInputChange = (event) => {
    setPostCodeInput(event.target.value);
  };

  const handlePostCodeSubmit = (event) => {
    event.preventDefault();

    if (cache[postCodeInput]) {
      const areaData = cache[postCodeInput];
      setAreas(areaData);
    } else {
      getAreaData(postCodeInput)
        .then((areaData) => {
          cache[postCodeInput] = areaData;
          setAreas(areaData);
        })
        .catch((error) => {
          window.alert("Please provide a valid postcode (outcode only)");
        });
    }
  };

  return (
    <>
      <div className="App">
        <h1>Postcoders</h1>
        <h2>{`Areas: ${areas.length}`}</h2>
      </div>

      <div>
        {areas.map((area) => {
          return (
            <Card
              sx={{ minWidth: 275 }}
              variant="outlined"
              key={area["place name"]}
            >
              <CardContent>
                <Typography variant="h5" component="div">
                  {area["place name"]}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                  Country: {area.state}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                  Country Abbreviation: {area["state abbreviation"]}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                  Longitude: {area.longitude}
                </Typography>
                <Typography color="text.secondary" sx={{ fontSize: 14 }}>
                  Latitude: {area.latitude}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <form onSubmit={handlePostCodeSubmit}>
        <input
          onChange={handlePostCodeInputChange}
          type="text"
          value={postCodeInput}
          placeholder="Input postcode"
        />
        <button
          id="post__code__submit__btn"
          type="submit"
          disabled={postCodeInput === "" ? true : false}
        >
          Submit+
        </button>
      </form>
    </>
  );
}

export default App;
