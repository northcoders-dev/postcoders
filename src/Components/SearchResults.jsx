import { Card, CardContent, Typography } from "@mui/material";

const SearchResults = ({ isSubmitted, areas, userInput }) => {
  if (isSubmitted && areas !== "undefined") {
    return (
      <div className="SearchResults">
        <h3>{`Areas for ${userInput.toUpperCase()}: ${areas.length}`}</h3>
        {areas.map((area) => {
          console.log(area);
          return (
            <Card variant="outlined" className="Card" key={area["place name"]}>
              <CardContent className="CardContent">
                <Typography variant="h4" className="Card--Typography">
                  {area["place name"]}
                </Typography>
                <Typography variant="h6" gutterBottom>
                  {area.state}
                </Typography>
                <Typography className="Card--Typography" variant="body2">
                  Latitude: {area.latitude}
                </Typography>
                <Typography variant="body2" className="Card--Typography">
                  Longitude: {area.longitude}
                </Typography>
              </CardContent>
            </Card>
          );
        })}
      </div>
    );
  }
};

export default SearchResults;
