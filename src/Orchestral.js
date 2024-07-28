import { Grid, Toolbar } from "@mui/material";
import Navbar from "./Navbar";
import YoutubeEmbed from "./YoutubeEmbed";
import whatsapplogo from "./resource/WhatsAppButtonGreenSmall.svg"

function Orchestral() {
  return (
    <Grid
    container
    spacing={0}
    direction="column"
    alignItems="center"
    justifyContent="center"
    sx={{ minHeight: '20vh' }}>
  
    <Grid item lg={12} md={12} xs={12}>
      <Toolbar>
       <Navbar></Navbar>
      </Toolbar>
    </Grid>

    <Grid item>
      <p style={{textAlign:"center", fontSize:"50px"}}>More than just exams! Beyond Classrooms!</p>
      <p style={{textAlign:"center", fontSize:"25px"}}>Students are encouraged to join Quindicesima Symphonic Orchestra (QSO) where likeminded musicians learn to play as a small group, or an ensemble, or with the entire orchestra!</p>
    </Grid>
    <Grid item>
    <p style={{textAlign:"center", fontSize:"25px"}}>Students who study composition can see their work played by QSO, and even continue to produce their own music!</p>
      <p style={{textAlign:"center", fontSize:"25px" }}>Check out the Attack on Titan Composition by our talented student Aswin Kummaran!</p>
      <YoutubeEmbed embedId="idTvjMJPAHQ"></YoutubeEmbed>
    </Grid>
    <a aria-label="Chat on WhatsApp" href="https://wa.me/+6591124691?text=Hi%2C%20I%20would%20like%20to%20find%20out%20more%20about%20Quindicesima%20Symphonic%20Orchestra%21"> <img alt="Chat on WhatsApp" src={whatsapplogo} style={{position:"fixed", bottom:5,right:5}} /></a>



   </Grid>
  );
}
export default Orchestral;
