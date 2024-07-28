import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"
import { Grid, Toolbar } from "@mui/material";
import "./WhyChooseUs.css"
import piano from "./resource/piano.jpeg"
//import strings from "./resource/strings.jpg"
import strings2 from "./resource/strings2.jpg"
import percussion from "./resource/percussion.jpg"
import woodwind from "./resource/woodwind.jpg"
import brass from "./resource/brass.jpg"
import audioaccessories from "./resource/audioaccessories.jpg"
import whatsapplogo from "./resource/WhatsAppButtonGreenSmall.svg"

function Products() {
  
  const productsJson=[
    {
      "title": "Piano",
      "image": piano,
      "url" : "/products"
    },

    {
      "title": "Strings",
      "image": strings2,
      "url" : "/products"
    },
    { 
      "title": "Percussion",
      "image": percussion,
      "url": "/products"
    },
    { 
      "title": "Woodwind",
      "image": woodwind,
      "url" : "/products"
    },
    {
      "title": "Brass",
      "image": brass,
      "url" : "/products"
    },
    {
      "title": "Audio Accessories",
      "image": audioaccessories,
      "url" : "/products"
    }

  ]
  const navigate = useNavigate();
  return (
    <div>
    <Grid container spacing={0}  direction="column"
  alignItems="center"
  justifyContent="center"
  sx={{ minHeight: '20vh' }}>
      <Grid item lg={12} md={12} xs={12}><Toolbar><Navbar></Navbar></Toolbar></Grid>
      <Grid className="products-section" container direction="row" justifyContent="center">
  <div>
    <Grid item>
      <p style={{textAlign:"center", fontSize:"50px"}}>OUR PRODUCTS</p>
    </Grid>
    <Grid container spacing={2}>
      {productsJson.map(product => (
        <Grid item key={product.id} xl={6} lg={6} md={6} sm={6} xs={6}>
          {/* You need to wrap the image to a div with position relative to ensure the black background dosent go over other images */}
          <a onClick={()=>navigate(product.url)} style={{cursor:'pointer'}}><div style={{position: "relative"}}>
            <img src={product.image} style={{width: "100%", height: "300px", objectFit: "cover"}} alt={product.title}/>
            <div style={{
              position: "absolute",
              bottom: 0,
              left: 0,
              right: 0,
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              color: "white",
              padding: "8px",
              textAlign: "center",
              fontSize:"18px",
              fontFamily:"Edwin"
            }}>
              {product.title}
            </div>
          </div>
          </a>
        </Grid>
      ))}
    </Grid>
  </div>
</Grid>
    </Grid>
    <Footer></Footer>
    <a aria-label="Chat on WhatsApp" href="https://wa.me/+6591124691?text=Hi%2C%20I%20would%20like%20to%20find%20out%20more%20about%20the%20products%20sold%20by%20Quindicesima%21"> <img alt="Chat on WhatsApp" src={whatsapplogo} style={{position:"fixed", bottom:5,right:5}} /></a>
    </div>
  );
}
export default Products;
