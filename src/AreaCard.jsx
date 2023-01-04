import React from 'react'
import Card from '@mui/material/Card'
export default function AreaCard({area}) {
  return (
    <Card>
    <div>  {area["place name"]}</div>
    <div>  {area.state}</div>
    <div>  "{area.latitude},{area.longitude}"</div>    
    <div>  {area["state abbreviation"]}</div>
  </Card>
  )
}
