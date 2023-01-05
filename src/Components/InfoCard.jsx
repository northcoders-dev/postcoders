import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export  const InfoCard = ({PostCodeinfo}) =>{

    if (PostCodeinfo[0] !== undefined){

 let {latitude, longitude, state, ['place name']: placeName, ['state abbreviation']: stateAbbreviation}= PostCodeinfo[0]
      
          const card = (
       
            <React.Fragment>
              <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                  Postcode Area Information
               <ul  >
                  <li>Place Name: {placeName}</li>
                  <li>State: {state}</li>
                  <li>Latitude: {latitude}</li>
                  <li>Longitude: {longitude}</li>
                  <li>State Abbreviation: {stateAbbreviation}</li>
               </ul> 
                </Typography> 
              </CardContent>
            </React.Fragment>
          )
        return (
            <Box sx={{ minWidth: 275 }}>
              <Card variant="outlined">{card}</Card>
            </Box>
          );
    }
   





}