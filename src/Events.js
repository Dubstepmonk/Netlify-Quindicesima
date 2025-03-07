import Navbar from "./Navbar";
import { Grid, Toolbar, Box } from "@mui/material";
import whatsapplogo from "./resource/WhatsAppButtonGreenSmall.svg"

function Events(){
    return (
        <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight: '20vh' }}
      >
        <Grid item lg={12} md={12} xs={12}>
          <Toolbar>
           <Navbar></Navbar>
          </Toolbar>
        </Grid>

        <Grid className="courses-section" container direction="row" justifyContent="center" textAlign="center">
        <h1>Events</h1>
        </Grid>
</Grid>
)}

export default Events