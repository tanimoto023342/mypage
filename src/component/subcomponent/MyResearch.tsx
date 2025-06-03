import Box from '@mui/material/Box';
import Typography from "@mui/material/Typography"

function MyResearch(){
    return(
        <Box sx={{ 
            bgcolor: 'white' ,
            height:"100%"
            }}>
            <Typography variant="h5" color="textSecondary">
                おおまかには・・・
            </Typography>
            <Typography variant="h4">
                LLMを用いたソフトウェア保守効率化
            </Typography>
            <Typography variant="h5" color="textSecondary">
                具体的には・・・
            </Typography>
            <Typography variant="h4">
                ログの過剰出力を抑制するためのログステートメント生成手法の提案
            </Typography>
          </Box>
    )
}

export default MyResearch