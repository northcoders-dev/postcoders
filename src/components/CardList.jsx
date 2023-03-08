import { Card, CardContent, Typography } from "@mui/material";

export const CardList = ({ areas }) => {
  return (
    <>
      {areas.map((area) => {
        return (
          <Card className="cardList" key={area["place name"]} sx={{ minWidth: 275 }}>
            <CardContent>
              <Typography variant="h5" component="div">
                {area["place name"]}, {area.state}
              </Typography>
              <Typography sx={{ mb: 0.5 }} color="text.secondary">
                Longitude: {area.longitude}
              </Typography>
              <Typography sx={{ mb: 0.5 }} color="text.secondary">
                Latitude: {area.latitude}
              </Typography>
              <Typography sx={{ mb: 0.5 }} color="text.secondary">
                Abbreviation: {area["state abbreviation"]}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
};
