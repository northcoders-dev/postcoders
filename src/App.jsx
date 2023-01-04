import { useEffect, useState } from "react";
import { getAreaData } from "./api";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import pcodersLogo from "./pcodersLogo.svg";
import "./App.css";

function App() {
  const [areas, setAreas] = useState([
    { "place name": "Birmingham", longitude: "-1.8998" },
  ]);
  const [postcode, setPostcode] = useState("B10");
  const [newPostcode, setNewPostcode] = useState({ body: "" });
  const [errMessage, setErrMessage] = useState("");
  const [postcodeSubmitted, setPostcodeSubmitted] = useState(false);

  //api call for areas made here with submitted postcode as argument
  const load = async (postcode) => {
    try {
      console.log(postcode, "<<postcode");
      const areaData = await getAreaData(postcode);
      setAreas([...areaData]);
      console.log(areas, "<areas");
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  //on submit postcode (for api) is changed to user submitted posted
  const submitPostcode = (submittedPostcode) => {
    setPostcode(submittedPostcode);
    setPostcodeSubmitted(true);
    setNewPostcode({ body: "" });
  };

  //handles new submissions as postcode is a dependancy
  useEffect(() => {
    load(postcode);
  }, [postcode]);

  return (
    <div className="App">
      <img src={pcodersLogo} alt="postcoders logo"></img>
      {/*==========FORM==============*/}
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
      </form>
      {/*==========CARD==============*/}
      {postcodeSubmitted ? (
        <Card variant="outlined" sx={{ maxWidth: 350 }}>
          <CardContent>
            <Typography
              variant="h6"
              component="div"
              sx={{ fontSize: 18, fontWeight: 500 }}
            >
              {`${areas.length} area/s found for ${postcode}`}
            </Typography>
            {areas.map((area) => {
              return (
                <Typography
                  key={area.longitude}
                  variant="body2"
                  color="text.secondary"
                  gutterBottom
                >
                  {`${areas.indexOf(area) + 1}. ${area["place name"]}`}
                </Typography>
              );
            })}
          </CardContent>
        </Card>
      ) : null}
    </div>
  );
}

export default App;
