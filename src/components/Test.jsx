import { Grid, Paper, Stack } from '@mui/material';
import React from 'react';

const backgroundImage = 'https://picsum.photos/2000/2000';
const backgroundImage2 = 'https://picsum.photos/1920/1080';

function MyStyledComponents() {
  return (
    <Grid container spacing={2} sx={{ padding: 2, height: '100vh'}}>
      <Grid item size={{ xs: 12, sm: 4 }}>
        <Stack spacing={2} sx={{ flexGrow: 1, height: '100%'}}>
          <Paper sx={{ backgroundImage: `url(${backgroundImage2})`, color: 'white', padding: 1, flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Hello World!</Paper>
          <Paper sx={{ backgroundImage: `url(${backgroundImage2})`, color: 'white', padding: 1, flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Hello World!</Paper>
          <Paper sx={{ backgroundImage: `url(${backgroundImage})`, color: 'white', padding: 1, flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>Hello World!</Paper>
        </Stack>
      </Grid>

      <Grid item size={8} sx={{ display: {xs: 'none', sm: 'block'} }}>
        <Paper sx={{
          height: '100%',
          boxSizing: 'border-box',
          padding: 2,
          color: 'white',
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }} />
      </Grid>
    </Grid>
  );
}

export default MyStyledComponents;