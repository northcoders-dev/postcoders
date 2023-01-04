import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Button";

function PostcodeCard({ area }) {
  return (
    <Grid sx={{ textTransform: "capitalize", mt: 5 }} disabled={true}>
      <Card sx={{ width: 250, minWidth: 200 }}>
        <CardContent>
          <Typography sx={{ fontSize: 13 }} gutterBottom color="text.secondary">
            {area["state abbreviation"]}
          </Typography>
          <Typography>{area.state}</Typography>
          <br />
          <Typography variant="h5" component="div">
            {area["place name"]}
          </Typography>
          <br />
          <Typography sx={{ mb: 1.5 }}>
            longitude: {area.longitude} <br /> latitude: {area.latitude}
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

export default PostcodeCard;
