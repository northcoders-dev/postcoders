import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

const AreaCards = ({ areas }) => {
  return (
    <ul className={`AreaCards`}>
      {areas.map((area, index) => {
        return (
          <li key={`${+index}`} className="AreaCard">
            <Card sx={{ minWidth: 275 }}>
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
          </li>
        );
      })}
    </ul>
  );
};

export default AreaCards;
