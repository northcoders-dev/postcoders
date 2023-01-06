import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';

export default function AreaCard({ area }) {
	return (
		<Card sx={{ maxWidth: 345 }}>
			<CardHeader
				avatar={<Avatar>{`${area['state abbreviation']}`}</Avatar>}
				title={`${area['place name']}`}
			/>
			<CardContent>
				<Typography variant="body2" color="text.secondary">
					Latitude: {`${area.latitude}`}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					Longitude: {`${area.longitude}`}
				</Typography>
				<Typography variant="body2" color="text.secondary">
					State:{`${area.state}`}
				</Typography>
			</CardContent>
		</Card>
	);
}
