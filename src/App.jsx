import { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [postCodeInput, setPostCodeInput] = useState("");
  const [finalInput, setFinalInput] = useState("");
  const [invalidInput, setInvalidInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const load = async (postCode) => {
    setIsLoading(true);
    try {
      const areaData = await getAreaData(postCode);
      setIsLoading(false);
      setInvalidInput(false);
      setAreas(areaData);
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 404) {
        console.log(error);
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

  useEffect(() => {
    load();
  }, []);

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
      {areas.length ? (
        isLoading ? (
          <p>Loading...</p>
        ) : (
          <h2>{`Areas for ${finalInput}: ${areas.length}`}</h2>
        )
      ) : null}
    </div>
  );
}

export default App;
