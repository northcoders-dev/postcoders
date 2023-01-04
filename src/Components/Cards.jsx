import { Card, CardContent, Typography } from '@mui/material';

const Cards = (props) => {
    const {areas} = props

    return ( <Card className='cards'>
        {areas.map((area) => {
            <CardContent>
                {/* {console.log(area['place name'])} */}
                {console.log(area)}
                <Typography>
                    {area['place name']}
                </Typography>
                <Typography>
                    area {area.state}
                    
                </Typography>
            </CardContent>
        })}
    </Card>
    )
}

export default Cards
