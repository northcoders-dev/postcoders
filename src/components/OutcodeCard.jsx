import React from "react";
import { Card, CardContent, Typography } from "@mui/material/";

function OutcodeCard({ area }) {
  return (
    <div>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 20 }} color="text.primary" gutterBottom>
            {area["place name"]}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {area["latitude"]} {area["longitude"]}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {area["place name"]}
          </Typography>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            {area["state"]} {"-"} {area["state abbreviation"]}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}

export default OutcodeCard;
