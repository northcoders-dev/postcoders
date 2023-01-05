import react, { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [postCodeInput, setPostCodeInput] = useState("");

  const handlePostCodeInputChange = (event) => {
    setPostCodeInput(event.target.value);
  };

  const handlePostCodeSubmit = (event) => {
    event.preventDefault();
    getAreaData(postCodeInput)
      .then((areaData) => {
        setAreas(areaData);
      })
      .catch((error) => {
        window.alert("Please provide a valid postcode (outcode only)");
      });
  };

  return (
    <>
      <div className="App">
        <h1>Postcoders</h1>
        <h2>{`Areas for BB10: ${areas.length}`}</h2>
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
