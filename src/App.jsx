import { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [postCode, setPostCode] = useState("");

  const handleChange = (event) => {
    setUserInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPostCode(userInput);
  };

  const load = async (postCode) => {
    try {
      const areaData = await getAreaData(postCode);

      setAreas(areaData);
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  useEffect(() => {
    if (postCode) load(postCode);
  }, [postCode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <h2>{`Areas for ${postCode.toUpperCase()}: ${areas.length}`}</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="searchField">
          <input
            className="searchField"
            type="text"
            value={userInput}
            minLength={2}
            maxLength={4}
            onChange={handleChange}
          />
        </label>
        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
