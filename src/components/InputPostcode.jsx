import { useState } from "react";

export const InputPostcode = ({ setPostcode }) => {
  const [userInput, setUserInput] = useState("");

  let spaceInput = false;

  function handleInput(e) {
    // Regular expressions for: allowing alphanumeric chars only; white space detection

    const regex1 = /\W/g;
    const regex2 = /\s/g;

    // When white space is detected and text field is locked, the use of backspace will unlock text field

    e.length < userInput.length ? (spaceInput = false) : null;

    // User input restricted to alphanumeric chars

    regex1.test(e) || spaceInput ? null : setUserInput(e);

    // Text field locked when white space is entered, as only outcode is needed

    regex2.test(e) ? spaceInput = true : null;
  }

  function handleSubmit(e) {
    e.preventDefault();

    setPostcode(userInput);
    setUserInput("");
  }

  return (
    <form>
      <label>Enter outcode part of the postcode: </label>
      <input
        type="text"
        value={userInput}
        placeholder='e.g. "M1" instead of "M1 7ED"'
        onChange={(e) => handleInput(e.target.value.toUpperCase())}
      />
      <button onClick={(e) => handleSubmit(e)}>Find</button>
      <br />
      <p>{userInput}</p>
    </form>
  );
};
