import React from 'react';
import './App.css';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Header from './component/header';
import MainContents from './component/MainContents';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

function App() {
  return (
    <div>
      <Box sx={{height: window.innerHeight}}>
      <Grid container direction="column">
        <Grid>
          <Header />
        </Grid>
      </Grid>
        {MainContents()}
      </Box>
    </div>
  );
}

export default App;