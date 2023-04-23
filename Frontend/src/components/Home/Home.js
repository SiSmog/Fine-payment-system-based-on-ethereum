import * as React from 'react';
import {  createTheme, ThemeProvider } from '@mui/material/styles';


import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Tickets from './Tickets';
import  SearchTicket from './SearchTicket';

const mdTheme = createTheme();

export default function Home() {
  return (
    <ThemeProvider theme={mdTheme}>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            height: '100vh',
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
           
              <Grid item xs={12}>
                <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
                  <SearchTicket />
                </Paper>
              </Grid>
            </Grid>
           
          </Container>
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
                  <Tickets />
            </Grid>
            
          </Container>
        </Box>
      
      
    </ThemeProvider>
  );
}
