import { useEffect, useState } from "react";
import { getAreaData } from "./api";

import "./App.css";
import AreaCard from "./components/AreaCard";
import SearchBar from "./components/SearchBar";

function App() {
  const [postcode, setPostcode] = useState("");
  const [areas, setAreas] = useState([]);
  const [isEmpty, setIsEmpty] = useState(true);

  const load = async () => {
    try {
      const areaData = await getAreaData(postcode);

      return areaData;
    } catch (error) {
      window.alert("todo: fix app");
    }
  };

  useEffect(() => {
    load().then((areasFromApi) => {
      setAreas(areasFromApi);
    });
  }, [postcode]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <SearchBar setPostcode={setPostcode} setIsEmpty={setIsEmpty} />
      {isEmpty ? (
        <p>Please enter postcode 'outcode' to display results</p>
      ) : (
        <div className="Results">
          <h2>{`Areas for ${postcode}: ${areas.length}`}</h2>
          {areas.map((area, index) => {
            return <AreaCard key={index} area={area} />;
          })}
        </div>
      )}
    </div>
  );
}

export default App;
