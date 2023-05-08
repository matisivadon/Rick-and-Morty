import React from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

const CardCharacter = ({character}) => {

    const {image, name, species} = character

  return (
      
    <Card sx={{ width: 300 }}>
        <CardActionArea>
            <CardMedia
                component="img"
                height="300"
                image= {image}
                alt="images"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {species}
                </Typography>
            </CardContent>
        </CardActionArea>
    </Card>
  )
}

export default CardCharacter