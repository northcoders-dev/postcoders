import { Card } from "@mui/material";

function AreaCard({ area }) {
  return (
    <div>
      <Card className="areaCard" variant="outlined">
        <h3 style={{ margin: 0, padding: 5 }}>Place: {area["place name"]}</h3>
        <p style={{ margin: 0, padding: 5 }}>State: {area.state}</p>
        <p>State Abbrv: {area["state abbreviation"]}</p>
        <p>Longitude: {area.longitude}</p>
        <p>Latitude: {area.latitude}</p>
      </Card>
    </div>
  );
}

export default AreaCard;
