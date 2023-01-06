import { Card, CardContent, Typography } from "@mui/material";
import "./AreaCard.css";

const AreaCard = ({ area }, index) => {
  return (
    <Card variant="outlined" className="area-card">
      <CardContent>
        <Typography sx={{ fontSize: 16 }}>{area["place name"]}</Typography>
        <Typography sx={{ fontSize: 14 }}>
          Longitude and Latitude: {area.longitude} , {area.latitude}
        </Typography>
        <Typography sx={{ fontSize: 12 }}>{area.state}</Typography>
      </CardContent>
    </Card>
  );
};

export default AreaCard;
