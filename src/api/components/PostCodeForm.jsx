import { useState } from "react";
import { getAreaData } from "..";

const PostCodeForm = ({ areas, setAreas }) => {
  //caching
  const [postCodeCache, setPostCodeCache] = useState({});

  //input
  const [postCodeInput, setPostCodeInput] = useState("");
  const [finalInput, setFinalInput] = useState("");

  //UI
  const [invalidInput, setInvalidInput] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const load = async (postCode) => {
    setIsLoading(true);
    try {
      //handle api calling
      if (postCodeCache.hasOwnProperty(postCode)) {
        setAreas(postCodeCache[postCode]);
      } else {
        const areaData = await getAreaData(postCode);

        setAreas(areaData);
        setPostCodeCache((cache) => {
          const newCache = { ...cache };
          newCache[postCode] = areaData;
          return newCache;
        });
      }
      //reset UI
      setIsLoading(false);
      setInvalidInput(false);
    } catch (error) {
      setIsLoading(false);
      if (error.response.status === 404) {
        setInvalidInput(true);
      } else {
        window.alert("todo: fix app");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (postCodeInput.length <= 4 && postCodeInput.length > 0) {
      setFinalInput(postCodeInput.trim().toUpperCase());
      load(postCodeInput.trim().toUpperCase());
      setInvalidInput(false);
    } else {
      setInvalidInput(true);
    }
  };

  const handleInput = (e) => {
    setPostCodeInput(e.target.value);
  };

  return (
    <>
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
        {isLoading ? <p>Loading...</p> : null}
      </form>
      {areas.length ? (
        <h2>{`Areas for ${finalInput}: ${areas.length}`}</h2>
      ) : null}
    </>
  );
};

export default PostCodeForm;
