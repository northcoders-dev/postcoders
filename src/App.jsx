import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import "./App.css";
import PostCodeEntry from "./components/PostCodeEntry";
import SubmitButton from "./components/SubmitButton";

function App() {
  const [areas, setAreas] = useState([]);
  const [postcode, setPostcode] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChangePostcode = (event) => {
    setPostcode(event.target.value);
  };

  const handleOnClick = () => {
    load(postcode);
    setSubmitted(postcode);
  };

  const load = async (postcode) => {
    setLoading(true);
    try {
      const areaData = await getAreaData(postcode);
      setAreas(areaData);
      setError(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <PostCodeEntry
        postcode={postcode}
        handleChangePostcode={handleChangePostcode}
      />
      <SubmitButton handleOnClick={handleOnClick} />
      {error && <p>error: please check the postcode and try again</p>}
      {loading && <p>loading...</p>}
      {submitted && !loading && !error && (
        <>
          <h2>{`Areas for ${submitted}: ${areas.length}`}</h2>
        </>
      )}
    </div>
  );
}

export default App;
