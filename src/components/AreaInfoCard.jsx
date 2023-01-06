import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export const AreaInfoCard = ({ area }) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      m={2}
      pt={3}
    >
      <Card>
        <CardContent>
          <Typography gutterBottom varient="h5">
            Area Name: {area["place name"]}
          </Typography>
          <Typography varient="body2" color="text.secondary">
            State: {area.state}
            <br></br>
            State Abbreviation: {area["state abbreviation"]}
            <br></br>
            Longitude: {area.longitude}
            <br></br>
            Latitude: {area.latitude}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
