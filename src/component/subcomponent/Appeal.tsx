import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Stack from '@mui/material/Stack';

function PotentionalSkillCard(){
    return(
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography  component="h3">
                    強み：課題発見力、傾聴力、主体性
                </Typography>
            </CardContent>
        </Card>)
}

function MyFutureCard(){
    return(
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography  component="h3">
                    将来の展望：高度な専門性を元に幅広い分野で活躍できる人材
                </Typography>
            </CardContent>
        </Card>)
}

function MyJobCard(){
    return(
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography  component="h3">
                    志望職種：エンジニア・IT関連の研究職
                </Typography>
            </CardContent>
        </Card>)
}

function MyLanguageCard(){
    return(
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography  component="h3">
                    使用言語：React.js,Python
                </Typography>
            </CardContent>
        </Card>)
}

function MyLinkCard(){
    return(
        <Card variant="outlined" sx={{ height: '100%' }}>
            <CardContent>
                <Typography  component="h3">
                    GitHubへのリンク
                </Typography>
            </CardContent>
        </Card>)
}

function Appeal(){
    return(
        <Box sx={{ 
        bgcolor: 'white' ,
        height:"100%"
        }}>
                <Stack spacing={1} sx={{ height: '100%' }}>
                    <Box sx={{height:"20%"}}>
                        {PotentionalSkillCard()}
                    </Box>
                    <Box sx={{height:"20%"}}>
                        {MyFutureCard()}
                    </Box>
                    <Box sx={{height:"20%"}}>
                        {MyJobCard()}
                    </Box>
                    <Box sx={{height:"20%"}}>
                        {MyLanguageCard()}
                    </Box>
                    <Box sx={{height:"20%"}}>
                        {MyLinkCard()}
                    </Box>
                </Stack>
        </Box>
    )
}

export default Appeal