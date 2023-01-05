import { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";
import BasicCard from "./Components/Card";
import Message from "./Components/Message";

function App() {
  // container that stores and set places for specific post code
  const [areas, setAreas] = useState([]);
  // user input state for postcode
  const [outCode, setOutCode] = useState("");
  // to load message while searching for postcode place / API CALLS
  const [isLoading, setIsLoading] = useState(false);

  const inputChangeHandler = (e) => {
    const enteredOutcode = e.target.value;
    setOutCode(enteredOutcode);
  };

  const postCodeSearchHandler = async (e) => {
    e.preventDefault();
    setOutCode("");
    try {
      setIsLoading(true);
      const areaData = await getAreaData(outCode);
      setAreas(areaData);
      setIsError(false);
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form onSubmit={postCodeSearchHandler}>
        <input
          value={outCode}
          onChange={inputChangeHandler}
          placeholder="enter here..."
        />
        <button style={{ marginLeft: "10px" }}>Search</button>
      </form>
      {areas.outCode ? (
        <h1>
          Areas for {areas.outCode} : {areas.places.length}
        </h1>
      ) : (
        <h1>Enter a post Code to find </h1>
      )}
      {isLoading && <Message text="Loading places please wait ..." />}
      {areas.places && <BasicCard places={areas.places} />}
    </div>
  );
}

export default App;
