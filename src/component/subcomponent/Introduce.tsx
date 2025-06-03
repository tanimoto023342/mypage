import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

function NameCard(){
    return(
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography  component="h3">
                    名前：谷元 柊介
                </Typography>
                    <Typography color="textSecondary" component="h3">
                    (たにもと しゅうすけ)
                </Typography>
                <Typography>
                    性別：男
                </Typography>
            </CardContent>
        </Card>)
}

function ComeFromCard(){
    return(
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography  component="h3">
                    出身：鹿児島
                </Typography>
            </CardContent>
        </Card>)
}

function MailAddressCard(){
    return(
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography  component="h3">
                    MailAddress:
                </Typography>
                <Typography  component="h4">
                    tanimoto0420.job@gmail.com
                </Typography>
                <br />
                <Typography  component="h3">
                    SubAddress:
                </Typography>
                <Typography  component="h4">
                    s2520086@wakayama-u.ac.jp
                </Typography>
            </CardContent>
        </Card>)
}

function AffiliationCard(){
    return(
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography  component="h3">
                    所属：
                </Typography>
                <Typography  component="h3">
                    和歌山大学大学院
                </Typography>
                /n
                <Typography  component="h3">
                    システム工学研究科
                </Typography>
                <Typography  component="h3">
                    オープンソースソフトウェア研究室
                </Typography>
            </CardContent>
        </Card>)
}

function OSCPicCard(){
    return(
        <Card variant="outlined" sx={{ height: "100%" }}>
            <CardMedia
                component="img" // img要素としてレンダリングすることを指定
                height="100%"    // 画像の高さを指定（任意）
                image={"/images/OSS.jpeg"} // 画像のURL
                alt="OSCpic" // 画像の代替テキスト
                sx={{ objectFit: 'fill' }}
            />
        </Card>)
}

function TravelPicCard(){
    return(
        <Card variant="outlined" sx={{ height: "100%" }}>
            <CardMedia
                component="img" // img要素としてレンダリングすることを指定
                image={"/images/travel.jpeg"} // 画像のURL
                height="100%"    // 画像の高さを指定（任意
                alt="Travel" // 画像の代替テキスト
                sx={{ objectFit: 'comfort' }}
            />
        </Card>)
}

function Introduce(){
    return(
        <Stack sx={{ height: '100%' }}>
            <Grid container spacing={0} justifyContent="center" sx={{ height: '50%' }}>
                <Grid size={4} sx={{ height: '100%' }}>
                    {NameCard()}
                </Grid>
                <Grid size={4} sx={{ height: '100%' }}>
                    {ComeFromCard()}
                </Grid>
                <Grid size={4} sx={{ height: '100%' }}>
                    {MailAddressCard()}
                </Grid>
            </Grid>
            <Grid container spacing={0} justifyContent="center" sx={{ height: '50%' }}>
                <Grid size={4} sx={{ height: '100%' }}>
                    {AffiliationCard()}
                </Grid>
                <Grid size={4} sx={{ height: '100%' }}>
                    {OSCPicCard()}
                </Grid>
                <Grid size={4} sx={{ height: '100%' }}>
                    {TravelPicCard()}
                </Grid>
            </Grid>
        </Stack>
    )
}

export default Introduce