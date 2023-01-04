import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

function AreaCard({ area, outcode }) {
  const {
    longitude,
    latitude,
    state,
    'state abbreviation': stateAbbreviation,
    'place name': placeName,
  } = area;
  return (
    <Card sx={{ minWidth: 275 }} className='area-card'>
      <CardContent>
        <Typography variant='h5' component='div'>
          {placeName}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {outcode}, {state}, {stateAbbreviation}
        </Typography>
        <Typography variant='body2'>
          {latitude} | {longitude}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default AreaCard;
