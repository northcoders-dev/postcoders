import { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";

function App() {
  const [areas, setAreas] = useState([
    { "place name": "Birmingham", longitude: "-1.8998" },
  ]);
  const [postcode, setPostcode] = useState("B10");
  const [newPostcode, setNewPostcode] = useState({ body: "" });
  const [errMessage, setErrMessage] = useState("");
  const [postcodeSubmitted, setPostcodeSubmitted] = useState(false);

  const load = async (postcode) => {
    try {
      console.log(postcode, "<<postcode");
      const areaData = await getAreaData(postcode);
      setAreas([...areaData]);
      console.log(areas, "<areas");
    } catch (error) {
      window.alert({ error });
    }
  };

  const submitPostcode = (submittedPostcode) => {
    setPostcode(submittedPostcode);
    setPostcodeSubmitted(true);
    setNewPostcode({ body: "" });
  };

  useEffect(() => {
    load(postcode);
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <form
        className="postcode-input"
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
          placeholder="Area Code..."
          type="text"
          onChange={(e) =>
            setNewPostcode({ ...newPostcode, body: e.target.value })
          }
          value={newPostcode.body}
        ></input>
        <button type="submit">Find Areas</button>
      </form>

      <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
    </div>
  );
}

export default App;
