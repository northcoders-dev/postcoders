
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import React from 'react'

export const AreaList = ({areas}) => {

  return (<section>
    {areas.map((area)=>
    <Card sx={{ minWidth: 350}}>
    <CardContent>
      
      <Typography variant="h5" component="div">
        {area["place name"]}
      </Typography>
      <Typography variant="body2">
        State: {area.state}
        <br />
       Latitude: {area.latitude}
       <br />
       Longitude: {area.longitude}
      </Typography>
    </CardContent>
  </Card>
    )}

  </section>
  )
}


