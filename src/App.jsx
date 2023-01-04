import { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([]);
  const [postcode, setPostcode] = useState("BB10");
  const [newPostcode, setNewPostcode] = useState({ body: "" });
  const [errMessage, setErrMessage] = useState("");

  //api call for areas made here with submitted postcode as argument
  const load = async (postcode) => {
    try {
      const areaData = await getAreaData(postcode);
      setAreas([...areaData]);
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  //on submit postcode (for api) is changed to user submitted posted
  const submitPostcode = (submittedPostcode) => {
    setPostcode(submittedPostcode);
    setNewPostcode({ body: "" });
  };

  //handles new submissions as postcode is a dependancy
  useEffect(() => {
    load(postcode);
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (newPostcode.body) {
            submitPostcode(newPostcode.body);
          } else {
            setErrMessage("Please type postcode area");
          }
        }}
      >
        <input
          name="postcode_input"
          placeholder="postcode"
          type="text"
          onChange={(e) =>
            setNewPostcode({ ...newPostcode, body: e.target.value })
          }
          value={newPostcode.body}
        ></input>
        <button type="submit">
          {newPostcode ? "find adress" : "searchIcon"}
        </button>
        <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
      </form>
    </div>
  );
}

export default App;
