import { useState } from "react";

export const InputPostcode = ({ setPostcode }) => {
  const [userInput, setUserInput] = useState("");

  function handleInput(e) {
    e.preventDefault();

    let outcode = "";

    userInput.includes(" ")
      ? outcode = userInput.slice(0, userInput.indexOf(" "))
      : outcode = userInput;
    
    setPostcode(outcode);
    setUserInput("");
    console.log(outcode)
  }

  return (
    <form>
      <label>Enter outcode part of the postcode: </label>
      <input
        type="text"
        value={userInput}
        placeholder='e.g. "M1" instead of "M1 7ED"'
        onChange={(e) => setUserInput(e.target.value.toUpperCase())}
      />
      <button onClick={(e) => handleInput(e)}>Find</button>
    </form>
  );
};
