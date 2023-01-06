import { useEffect, useState } from "react";
import { getAreaData } from "./api";
// import Card from "@mui/material/Card";
// import CardContent from "@mui/material/CardContent";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [inputArea, setInputArea] = useState("");
  const [submittedArea, setSubmittedArea] = useState("");

  function handleChange(event) {
    setInputArea(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    setSubmittedArea(inputArea);
    load(inputArea);
  }

  const load = async (submittedArea) => {
    try {
      const areaData = await getAreaData(submittedArea);

      setAreas(areaData);
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  useEffect(() => {
    if (submittedArea) {
      load(submittedArea);
    }
  }, [submittedArea]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Enter Area Code:
          <input type="text" value={inputArea} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
      {submittedArea && (
        <div>
          Areas for {submittedArea}: {areas.length}
        </div>
      )}
      {/* {submittedArea && (
        <div>
          <Card sx={{ minWidth: 275 }}>
            <CardContent></CardContent>
          </Card>
        </div>
      )} */}
    </div>
  );
}

export default App;
