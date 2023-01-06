import { useState } from "react";
import { getAreaData } from "./api";
import "./App.css";
import PlaceCard from "./components/PlaceCard";
import PostCodeEntry from "./components/PostCodeEntry";
import SubmitButton from "./components/SubmitButton";

function App() {
  const [areas, setAreas] = useState({});
  const [postcode, setPostcode] = useState("");
  const [submitted, setSubmitted] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleChangePostcode = (event) => {
    setPostcode(event.target.value);
  };

  const handleOnClick = () => {
    setSubmitted(postcode);
    console.log(submitted);
    if (!areas[postcode]) {
      load(postcode);
    }
    if (areas[postcode]) {
      setError(false);
    }
  };

  const load = async (postcode) => {
    setLoading(true);
    try {
      const areaData = await getAreaData(postcode);
      setAreas({ ...areas, [postcode]: areaData });
      setError(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  console.log(error, areas, "areas outside");

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <h3>Please enter the first part of a UK postcode below: </h3>

      <PostCodeEntry
        postcode={postcode}
        handleChangePostcode={handleChangePostcode}
      />
      <SubmitButton handleOnClick={handleOnClick} />
      {error && !loading && (
        <p>
          error: please check the postcode (make sure to only enter the first
          part) and try again.
        </p>
      )}
      {loading && <p>loading...</p>}
      {submitted && !loading && !error && (
        <>
          <h2>{`Areas for ${submitted}: ${areas[submitted].length}`}</h2>
          <div className="card-container">
            <PlaceCard areas={areas[submitted]} />
          </div>
        </>
      )}
    </div>
  );
}

export default App;
