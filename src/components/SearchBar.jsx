import { useState } from "react";

const SearchBar = ({ setPostcode, setIsEmpty }) => {
  const [newPostcodeSearch, setNewPostcodeSearch] = useState("");

  const handleChange = (event) => {
    event.preventDefault();
    setNewPostcodeSearch(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsEmpty(false);
    setPostcode(newPostcodeSearch);
    if (newPostcodeSearch.length === 0) setIsEmpty(true);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter outcode:</label>
      <input value={newPostcodeSearch} onChange={handleChange} />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
