import "./App.css";
import { useState } from "react";
import PostCodeForm from "./api/components/PostCodeForm";
import AreaCards from "./api/components/AreaCards";

function App() {
  const [areas, setAreas] = useState([]);

  return (
    <div className="App">
      <h1>Postcoders</h1>
      <PostCodeForm areas={areas} setAreas={setAreas} />
      <AreaCards areas={areas} />
    </div>
  );
}

export default App;
