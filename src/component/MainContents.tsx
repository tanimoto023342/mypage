import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import Introduce from './subcomponent/Introduce';
import Box from '@mui/material/Box';
import MyResearch from './subcomponent/MyResearch';
import Appeal from './subcomponent/Appeal';

function MainContents(){
    return (
        <Grid container spacing={1} sx={{
            height: '93.5%',            
            backgroundColor: 'lightblue',
          }}>
            <Grid size={6}>
                <Stack spacing={1} sx={{ height: '100%' }}>
                    <Box sx={{height:"60%"}}>
                        {Introduce()}
                    </Box>
                    <Box sx={{height:"40%"}}>
                        {MyResearch()}
                    </Box>
                </Stack>
            </Grid>
            <Grid size={6}>
                {Appeal()}
            </Grid>
        </Grid>
    );
}

export default MainContents