import React from 'react';
import { Grid, Toolbar } from '@mui/material';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import Navbar from './Navbar';
import Footer from './Footer';

function SubmitFormSuccess() {
  return (
    <Grid>
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
      justifyContent="center"
      sx={{ minHeight: '100vh' }} // Make sure it's 100vh to fill the screen
    >
      <Grid item lg={12} md={12} xs={12}>
        <Toolbar>
          <Navbar />
        </Toolbar>
      </Grid>

      {/* Center the success-section */}
      <Grid
        className="success-section"
        container
        direction="column"
        justifyContent="center"
        alignItems="center" // Align items horizontally in the center
        sx={{ textAlign: 'center', minHeight: '60vh' }} // Center and set minimum height
      >
        <Grid>
          <CheckCircleOutlineIcon sx={{ fontSize: 86, color: '#55b673' }} />
        </Grid>
        <h1 style={{ fontFamily: 'Edwin', color: '#6cbc88' }}>
          Form submitted successfully!
        </h1>
        <p style={{ fontFamily: 'Edwin', color: '#6cbc88' }}>
          Thank you! The form has been submitted successfully.
        </p>
        <p style={{ fontFamily: 'Edwin', color: '#6cbc88' }}>
          We will reply to you soon!
        </p>
        <a href="https://quindicesima.com" style={{ color: '#6cbc88' }}>
          Go back to home
        </a>
      </Grid>
    </Grid>
    </Grid>
  );
}

export default SubmitFormSuccess;
