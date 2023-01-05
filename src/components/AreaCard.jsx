import React from 'react';
import { Card, CardContent, CardHeader, Typography } from '@material-ui/core';

const AreaCard = ({ places }) => {
  return (
    <Card>
      <CardContent>
        <CardHeader
          title={places['place name']}
          subheader={places.state}
        ></CardHeader>
        <Typography variant="body2" component="p" spacing={1}>
          Latitude: {places.latitude} <br />
          Longitude: {places.longitude}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default AreaCard;
