import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


export default function OutlinedCard({place_name, longitude, state, latitude}) {
  const card = (
    <React.Fragment>
      <CardContent>
        <Typography sx={{ fontSize: 28 }} color="text.primary" gutterBottom>
          {place_name}
        </Typography>
        <Typography variant="h5" component="div">
          {state}
        </Typography>
        <Typography color="text.secondary">
          Longitude: {longitude}
        </Typography>
        <Typography color="text.secondary">
          Latitude: {latitude}
        </Typography>
      </CardContent>
    </React.Fragment>
  );
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined" className='card'>{card}</Card>
    </Box>
  );
}