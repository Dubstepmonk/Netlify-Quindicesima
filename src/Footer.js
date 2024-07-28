import { Grid, Box} from "@mui/material";
import carousellicon from "./resource/carousellicon.png";
import instagramicon from "./resource/instagramicon.png";
import facebookicon from "./resource/facebookicon.png";
import ResponsiveFooter from "./ResponsiveFooter.css";

function Footer() {
    return(
        <Box sx={{ width: '100%', backgroundColor: '#302424'}}>
        <Grid container   direction="row"
        alignItems="center"
        justifyContent="center">

        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}>
            <p className="pNormal" style ={{color:"white", textAlign:"center", fontFamily:"Edwin"}}>You can find us at</p>
        </Grid>
        <Grid container spacing={3} justifyContent="center">
        <Grid item xl={12} lg={12} md={12} sm={12} xs={12}  display="flex" justifyContent="center">
          
             <span style={{padding:"20px"}}>
             <a href="https://www.facebook.com/Quindicesima">
            <img className="normal" src={facebookicon}></img>
            </a>
            </span>
            
            <span style={{padding:"20px"}}>
                <a href = "https://www.instagram.com/quindicesima.qma/">
            <img className="normal" src={instagramicon} width={50} height={50}></img>
            </a>
            </span>
            <span style={{padding:"20px"}}>
                <a href = "https://www.carousell.sg/u/quindicesima/">
            <img className="normal" src={carousellicon} width={50} height={50}></img>
            </a>
            </span>
        </Grid>
        </Grid>
        <Grid item>
        <p className="pNormal" style={{color:"white", textAlign:"center", fontFamily:"Edwin"}}>Copyright © 2024 Quindicesima </p>
        </Grid>
        </Grid>
        </Box>
    )
}


export default Footer;