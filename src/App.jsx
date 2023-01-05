import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import SearchResults from "./Components/SearchResults";
import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [userInput, setUserInput] = useState();
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    getAreaData(userInput)
      .then((result) => {
        console.log(result);
        setAreas(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <div className={"PostcodeInput"}>
        <h2>Enter postcode outcode here</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            maxLength={4}
            onChange={(e) => {
              setUserInput(e.target.value);
            }}
            placeholder="eg. M1"
          ></input>
          <button type="submit">Search</button>
        </form>
        <SearchResults
          areas={areas}
          isSubmitted={isSubmitted}
          userInput={userInput}
        />
      </div>
    </div>
  );
}

export default App;
