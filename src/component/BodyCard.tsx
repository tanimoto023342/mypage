import React from 'react';
import { makeStyles } from '@mui/styles';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface cardArgs{
    pretitle:string,
    title:string,
    image:string,
    link:string,
}

const useStyles = makeStyles({
    bullet: {
      display: 'inline-block',
      margin: '0 2px',
      transform: 'scale(0.8)',
    },
    title: {
      fontSize: 14,
    },
    pos: {
      marginBottom: 12,
    },
});


function BodyCard(arg:cardArgs) {
    const classes = useStyles();
    const bull = <span className={classes.bullet}>•</span>;
    return (
        <Card variant="outlined">
            <CardContent>
            <Typography className={classes.title} color="textSecondary" gutterBottom>
                {arg.pretitle}
            </Typography>
            <Typography variant="h5" component="h2">
                {arg.title}
            </Typography>
            </CardContent>
            <CardMedia
                component="img" // img要素としてレンダリングすることを指定
                height="300"    // 画像の高さを指定（任意）
                image={arg.image} // 画像のURL
                alt="Green iguana" // 画像の代替テキスト
                sx={{ objectFit: 'contain' }}
            />
            <CardActions>
            <Button size="small" href={arg.link}>Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default BodyCard

