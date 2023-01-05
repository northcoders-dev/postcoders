import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Styles from "./Card.module.css";

export default function BasicCard({ places }) {
  return (
    <>
      {places.map((place) => (
        <Card
          className={Styles.card}
          key={Math.random() * 1000}
          sx={{ minWidth: 275 }}
        >
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              {place["place name"]}
            </Typography>
            <Typography variant="h5" component="div">
              Latitude: {place["latitude"]}
            </Typography>
            <Typography variant="h5" component="div">
              Latitude: {place["longitude"]}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              State: {place["state"]}
            </Typography>
            <Typography variant="body2">
              State Abbreviation : {place["state abbreviation"]}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </>
  );
}
