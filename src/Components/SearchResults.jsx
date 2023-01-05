const SearchResults = ({ isSubmitted, areas, userInput }) => {
  if (isSubmitted && areas !== "undefined") {
    return <h3>{`Areas for ${userInput}: ${areas.length}`}</h3>;
  }
};

export default SearchResults;
