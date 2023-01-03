import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const AreaCards = ({ areas }) => {
  return (
    <ul>
      {areas.map((area, index) => {
        return (
          <Card key={`${+index}`} sx={{ minWidth: 275 }}>
            <CardContent>
              <section>
                <Typography sx={{ fontSize: 14 }}>Place:</Typography>
                <Typography sx={{ fontSize: 12 }}>
                  {area["place name"]}, {area.state}
                </Typography>
              </section>
              <section>
                <Typography sx={{ fontSize: 14 }}>Coordinates:</Typography>
                <Typography sx={{ fontSize: 12 }}>
                  {`Longitude: ${area.longitude}, Latitude: ${area.latitude}`}
                </Typography>
              </section>
            </CardContent>
          </Card>
        );
      })}
    </ul>
  );
};

export default AreaCards;
