import React from "react";
import Card from "@mui/material/Card";
import classes from "./PlaceCard.module.css";

const PlaceCard = ({ areas }) => {
  return areas.map((area) => {
    return (
      <Card className={classes.card} key={area["place name"]}>
        <h3 className={classes.name}>{area["place name"]}</h3>
        <p className={classes.state}>{area.state}</p>
        <ul>
          <li>latitude: {area.latitude}</li>
          <li>longitude: {area.longitude}</li>
        </ul>
      </Card>
    );
  });
};

export default PlaceCard;
