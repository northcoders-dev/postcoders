import {Card, Typography, CardContent} from "@mui/material"

const PostcodeResults=(props)=>{
   const {areas} = props;
   console.log(areas)

   return <div className = "card-container">
    {areas.map((area)=>{
        return (
            <Card className = "card-item" >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {`${area.state} (${area["state abbreviation"]})`}
              </Typography>
              <Typography variant="h5" component="div">
                {`${area["place name"]}`}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {`Latitude:${area.latitude}`}
              </Typography>
              <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {`Longitude:${area.longitude}`}
              </Typography>
            </CardContent>
          </Card>
        )
    })}

   </div>

}

export default PostcodeResults