
import { Navigate, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer"
import background from "./resource/musicbg.jpg";
import background2 from "./resource/pianoplaying.jpg"
import background3 from "./resource/trumpet.jpg"
import orchestral1 from "./resource/orchestral1.jpg"
import orchestral2 from "./resource/orchestral2.jpg"
import orchestral3 from "./resource/orchestral3.jpg"
import orchestral4 from "./resource/orchestral4.jpg"
//import edwin from "./resource/edwin.jpg"
import classroom from "./resource/classroom.jpg"
import piano from "./resource/piano.jpeg"
//import strings from "./resource/strings.jpg"
import strings2 from "./resource/strings2.jpg"
import percussion from "./resource/percussion.jpg"
import woodwind from "./resource/woodwind.jpg"
import brass from "./resource/brass.jpg"
import audioaccessories from "./resource/audioaccessories.jpg"
import whatsapplogo from "./resource/WhatsAppButtonGreenSmall.svg"
import { Grid, Box} from "@mui/material";
import React, { useState, useEffect } from 'react';
import './BackgroundChanger.css'; 
import './imagehover.css'
import Divider from '@mui/material/Divider';
import ImageSlideShow from "./ImageSlideShow";
import {AnimatedOnScroll} from "react-animated-css-onscroll";
import { styled } from '@mui/system';
import Typography from '@mui/material/Typography';

function Home() {
  const backgroundimages =[
    background,
    background2,
    background3
  ]

  const orchestralimages=[
    orchestral1,
    orchestral2,
    orchestral3,
    orchestral4
  ]

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


  const [backgroundimageused, setBackGroundImageUsed] = useState(0);
  const [isFading, setIsFading] = useState(false); // Used to control fade effect
  const navigate = useNavigate();
  useEffect(() => {
    const interval = setInterval(() => {
    setIsFading(true); // Start fading out the current image
      setTimeout(() => {
        setBackGroundImageUsed((prevIndex) => (prevIndex + 1) % backgroundimages.length);
        setIsFading(false); // Fade-in the new image after the current image has faded out
      }, 6000); // Fade-out effect lasts for 4 seconds
    }, 16000); // Change image every 10 seconds (6 seconds for fade-in and 4 seconds for fade-out)

    return () => clearInterval(interval);
  }, [backgroundimages.length]);

  // const containerStyle = {
  
  //   width: "100%",
  //   // '@media (min-width: 780px)': {
  //   //   width: '80%'
  //   // },
  //   height: "auto",
  //   backgroundImage: `url(${(backgroundimages[backgroundimageused])})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",

  // };


  // const ResponsiveTypography = styled(Typography)(({ theme, fontSize }) => ({
  //   fontSize: fontSize || '16px', // Default font size
  //   fontFamily:"Edwin",
  //   [theme.breakpoints.up('sm')]: {
  //     fontSize: fontSize ? `${parseFloat(fontSize) * 1.125}rem` : '1.125rem', // Adjust font size for small screens and up
  //   },
  //   [theme.breakpoints.up('md')]: {
  //     fontSize: fontSize ? `${parseFloat(fontSize) * 1.25}rem` : '1.25rem', // Adjust font size for medium screens and up
  //   },
  //   [theme.breakpoints.up('lg')]: {
  //     fontSize: fontSize ? `${parseFloat(fontSize) * 1.375}rem` : '1.375rem', // Adjust font size for large screens and up
  //   },
  // }));

 const buttonStyle = {
    backgroundColor:"#fff474",
    fontFamily:"Edwin",
    borderRadius: 50,
    width:"180px",
    height:"40px",
 }
  return (
    
    <div>
      <head>
    <link rel="stylesheet" href=
"https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css">
  </link>
</head>
      <Navbar></Navbar>
      <Grid className={`background-container ${isFading ? 'fading' : ''}`}style={{backgroundImage: `url(${(backgroundimages[backgroundimageused])})`, backgroundRepeat:"no-repeat" , 
        opacity: isFading ? 0 : 1, // Fade out (0) or fade in (1)
        transition: 'opacity 6s ease-out', // Smooth fade-out
        }}>
        <div className="homeText"  style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',}}>
        <div>
        <h1 style={{fontSize:"80px", margin:"0px" , padding:"0px", fontFamily:"Edwin", color: "white"}}>Music is your world</h1>
        <h3 style = {{paddingLeft:"35%", fontFamily:"Edwin", color: "white"}}>Dont miss a chance!</h3>
        <div style={{paddingLeft:"35%"}}><button className="buttonFindOutMore" onClick={()=>navigate("/booktrial")}><span style={{color:"#4f504b", fontFamily:"Edwin"}}>START LEARNING</span></button></div>
        {/* onMouseEnter={} */}
        </div>
        </div>
      </Grid>

      
      {/* CSS to push the next content section down */}
      <div style={{marginBottom:"100px"}}></div>
      {/* <Divider/> */}
      <AnimatedOnScroll animationIn="bounceInUp">
      <p className="normalPHead" style={{textAlign:"center", fontFamily:"Edwin"}}>MUSIC EDUCATION</p>
      <Grid className="musiceducation-section" container  direction="row" spacing={4}
  >     
        {/* Empty grid item to push the image to the center */}
        <Grid item xl = {2} lg={1} md= {1} sm= {1} xs={0}></Grid>

        <Grid item xl={3} lg={4} md = {4} sm={11} xs ={12}>
          <div className="container">
          
          {/* https://stackoverflow.com/questions/66226603/how-to-fit-images-to-different-screen-resolutions */}
          <a onClick={()=>navigate("/courses")} style={{cursor:"pointer"}}>
           {/* src= classroom */}
          <img className="image" src={classroom} style={{maxwidth:"100%" , height:"600px"}}></img>
          <div class="middle">
    <div class="text"><span style={{fontFamily:"Edwin"}}>FIND OUT MORE!</span></div>
  </div>
  </a>
          </div>
        </Grid>
        <Grid item  xl={7} lg={7} md={7} sm ={12} xs ={12}>
          <div>
            <p className="normalPSection" style={{fontFamily:"Edwin"}}>At Quindicesima, we believe in the transformative power of music education. Music is not just an art form; it is a universal language that nurtures creativity, discipline, and emotional expression. Our commitment to music education is rooted in the understanding that learning music fosters critical thinking, enhances cognitive abilities, and builds confidence. </p>
            <button className="buttonFindOutMore" onClick={()=>navigate("/courses")}><span style={{fontFamily:"Edwin"}}>FIND OUT MORE</span></button>
          </div>

        </Grid>
      </Grid>
      <div style={{marginBottom:"100px"}}></div>
      </AnimatedOnScroll>
{/* <Divider/> */}

<Box sx={{ width: '100%', backgroundColor: '#383434'}}>
<AnimatedOnScroll animationIn="bounceInUp">
<Grid className="orchestral-section" container direction= "row" alignItems="center"  justifyContent="center">
  <div>
  {/* color:"#f07404" */}
    <Grid item>
    <p className="normalPHead" style={{textAlign:"center", color:"white", fontFamily:"Edwin"}}>Quindicesima Symphonic Orchestra</p>
    <p className="normalPSection" style={{textAlign:"center",  color:"white", fontFamily:"Edwin"}}>Join our orchestral family to apply your learning and perform for the community! </p>
    <p className="normalPSection" style={{textAlign:"center",  color:"white", fontFamily:"Edwin"}}>We welcome students of all levels be it Beginner or Professional! </p>
    <div style={{textAlign:"center" , paddingBottom:"20px"}}><button className="buttonFindOutMore" onClick={()=>navigate("/orchestral")}><span style={{color:"#4f504b", fontFamily:"Edwin"}}>JOIN OUR COMMUNITY</span></button></div>
    <ImageSlideShow></ImageSlideShow>
    </Grid>
  </div>

</Grid>
</AnimatedOnScroll>
</Box>

<div style={{marginBottom:"100px"}}></div>
<AnimatedOnScroll animationIn="bounceInUp">
<Grid className="products-section" container direction="row" justifyContent="center">
  <div>
    <Grid item>
      <p className="normalPHead" style={{textAlign:"center", fontFamily:"Edwin"}}>PRODUCTS</p>
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
</AnimatedOnScroll>
<Footer></Footer>
{/* <ResponsiveTypography>THIS IS SPARTA!!!</ResponsiveTypography> */}
<a aria-label="Chat on WhatsApp" href="https://wa.me/+6586319188?text=Hi%2C%20I%20am%20interested%20in%20the%20free%20trial%20lesson%20by%20Quindicesima%21"> <img alt="Chat on WhatsApp" src={whatsapplogo} style={{position:"fixed", bottom:5,right:5}} /></a>
    </div>
    
  );
}
export default Home;
