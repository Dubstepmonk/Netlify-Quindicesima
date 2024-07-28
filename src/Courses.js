import Navbar from "./Navbar";
import { Grid, Toolbar, Box } from "@mui/material";
//import background from "./resource/musicbg.jpg";
import kidplayingpiano from "./resource/kidplayingpiano.jpg"
import teacherorchestral from "./resource/teacherorchestral.jpg"
import musictheory from "./resource/musictheory.jpg"
import edwin from "./resource/edwin.jpg"
import whatsapplogo from "./resource/WhatsAppButtonGreenSmall.svg"
import PersonSharpIcon from '@mui/icons-material/PersonSharp';
import Face2SharpIcon from '@mui/icons-material/Face2Sharp';
import Face3SharpIcon from '@mui/icons-material/Face3Sharp';
import Face4SharpIcon from '@mui/icons-material/Face4Sharp';
import FaceSharpIcon from '@mui/icons-material/FaceSharp';
import EmojiEmotionsSharpIcon from '@mui/icons-material/EmojiEmotionsSharp';
import Face5SharpIcon from '@mui/icons-material/Face5Sharp';
import ImageSlideShow from "./ImageSlideShow";
import Footer from "./Footer"
import Font from "./Font.css"
import ResponsiveFont from "./ResponsiveFont.css"


function Courses() {
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
      <Grid item lg={12} md={12} xs={12}>
        <p className="normalPHead" style={{ textAlign: "center"}}>OUR CLASSES</p>
      </Grid>
      <Grid item xl={6} lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <img className="image" src={kidplayingpiano} style={{ maxWidth: "100%", height: "auto", width: "auto", maxHeight: "550px" }} />
      </Grid>
      <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
        <b className="normalPSection">Classical Instruments</b>
        <p>Pricing (1 hour per week):</p>
        <b>9% GST included in prices</b>
        <p>Initial/Beginner - $545.55 (13 week term) / $207.83 (monthly)</p>
        <p>Grade 2 - $701.415 (13 week term) / $259.78 (monthly)</p>
        <p>Grade 3 - $779.35 (13 week term) / $285.77 (monthly)</p>
        <p>Grade 4 - $857.29 (13 week term) /  $311.74 (monthly)</p>
        <p>Grade 5 - $935.22 (13 week term) /  $309.84 (monthly)</p>
        <p>Grade 6 - $929.5 (13 week term) / $337.73 (monthly)</p>
        <p>Grade 7 - $1,091.10 (13 week term) / $357.5 (monthly)</p>
        <p>Grade 8 - $1,072.5 (13 week term) / $389.68 (monthly)</p>
        <p>DipABRSM/ATCL/ARSM - $1,402.84 (13 week term) /  $519.57 (monthly)</p>
        <p>LRSM/LTCL - $1,558.7  (13 week term) / $571.56 (monthly)</p>
        <p>FRSM/FTCL - $1,714.57 (13 week term) / $597.51 (monthly)</p>
      </Grid>
      
      <Grid item xl={6} lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <img className="image" src={teacherorchestral} style={{ maxWidth: "100%", height: "auto", width: "825px", maxHeight: "550px" }} />
      </Grid>
      <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
      <b className="normalPSection">Contemporary & Popular Instrument Lessons</b>
      <p>Our school is a solution for families who would like to expose their children to the world of music!</p>
      <p>Pricing (1 hour per week):</p>
      <b>9% GST included in prices</b>
      <p>Level 1 - $701.42  (13 week term) / $259.78 (monthly)</p>
      <p>Level 2 -  $779.35 (13 week term) / $285.77 (monthly)</p>
      <p>Level 3 -  $857.29 (13 week term) /  $311.74 (monthly)</p>
      <p>Level 4 -  $935.22 (13 week term) /  $337.73 (monthly)</p>
      <p>Level 5 -  $1,013.16 (13 week term) / $363.70 (monthly)</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      </Grid>
    
      <Grid item xl={6} lg={12} md={12} sm={12} xs={12} sx={{ display: 'flex', justifyContent: 'center' }}>
        <img className="image" src={musictheory} style={{ maxWidth: "100%", height: "auto", width: "auto", maxHeight: "550px" }} />
      </Grid>
      <Grid item xl={6} lg={12} md={12} sm={12} xs={12}>
      <b className="normalPSection">Academics & Tuition (monthly)</b>
      <p>Our school is a solution for families who would like to expose their children to the world of music!</p>
      <p>Conducting - $780 </p>
      <p>Classical/Popular Music Composition - $750</p>
      <p>Orchestration + Arranging - $750</p>
      <p>History of music - $700</p>
      <p>Theory (Graded - ABRSM) - Dependent on Grade, refer to Classical lessons.</p>
      <p>NAFA/Lasalle/YST/UAS Module tuition - Dependent on Module, please discuss with staff.</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      <p>&nbsp;</p>
      </Grid>      
    </Grid>
    <Grid>
      <p className="normalWhyChooseUs">Why choose us?</p>
    </Grid>

{/* Edwin experience section */}
    <Grid
    container
    spacing={3}
    direction="row"
    alignItems="center"
    justifyContent="center">
    
    <Grid item xl={6} lg={6} md={12} sm={12} xs={12} >
    <img className="image" src={edwin} style={{maxwidth:"100%" , height:"auto"}}></img>
    </Grid>
    <Grid item xl={6} lg={6} md={12} sm={12} xs={12}>
      <b className="normalPHead"style={{fontFamily:"Edwin"}}>Edwin Choy</b>
      <br></br>
      <b className="normalPSection" style={{fontFamily:"Edwin"}}>Bachelor of Music in Contemporary & Popular Music and Orchestration & Composition</b>
      <p className="normalPEdwinSection" style={{fontSize:"20px", fontFamily:"Edwin"}}>Having learnt music since the age of 3, Edwin Choy has been all about performance and teaching music to others. After graduating from Newcastle University (UK), he returned to Singapore and founded Quindicesima & Bishan Symphonic Orchestra (BSO). With skills of music Composition, Orchestration, & Arrangement, he is able to rewrite difficult scores into different levels for even beginners to play along with professional players. Every piece of music in BSO from 2015-2022, is rearranged and rewritten by Edwin. Therefore this has been effective in closing the gap between high level players and people who have not yet learnt music.
      </p>
      <p className="normalPEdwinSection" style={{ fontFamily:"Edwin"}}>Through rearrangement, he is able to publicise and recruit the community, giving them the opportunity to join an orchestra. Edwin isn't only versed in Western music, but also in Oriental music from countries like China, Korea, Japan, Philippines, and many others. Thus he is also able to incorporate other instruments into BSO, and give them parts corresponding to their respective strengths.
      </p>
      <p className="normalPEdwinSection" style={{fontFamily:"Edwin"}}>Even if a member of public is interested but doesn't have an instrument, Edwin will source for the instrument of his/her choice, and provide it at cost-price. (e.g. a Clarinet for SGD$180, or a trumpet for SGD$220) Edwin then provides extremely cheap music education ($15/hr) to train the public and they are then able to participate in the orchestra after a short period of 2-4 weeks.
      </p>
      <p className="normalPEdwinSection" style={{fontFamily:"Edwin"}}>Edwin believes absolutely in music for the community, and by the community, instead of professional orchestras as he believes that music should be provided at affordable costs to the public.
      </p>
      <p className="normalPEdwinSection" style={{ fontFamily:"Edwin"}}>
      Today, Quindicesima Symphonic Orchestra (QSO) is happy and proud to have Edwin as our music director and continues to strive to achieve the goals BSO has set out to achieve. 
      </p>
      <i className="normalPEdwinSection" style={{fontFamily:"Edwin"}}>"Do unto others, what you would want others to do unto you." - Edwin Choy</i>
    </Grid>
    </Grid>

    <Grid><p></p></Grid>
    {/* Student Reviews section */}
    <Box sx={{ width: '100%', backgroundColor: '#9ba6a5' }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xl={6} display="flex">
          <Box
            sx={{
            
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexGrow={1}
            >
              <Face5SharpIcon sx={{ fontSize: 86, color: "#2772db" }} />
            </Box>
            <Box textAlign="center">
              <p>
                “Lessons have been extremely holistic & “free flow”, Catering to what I require in order to improve my skills and become a better player instead of a rigid syllabus structure.”
              </p>
              <b>-Lee Sek Heng, Grade 8 Piano Performance ABRSM, PASS</b>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={6} display="flex">
          <Box
            sx={{
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexGrow={1}
            >
              <FaceSharpIcon sx={{ fontSize: 86, color: "#2772db" }} />
            </Box>
            <Box textAlign="center">
              <p>
                "Dr Edwin Choy has a wealth of knowledge in music, and is able to convey it to his students well. His approach to teaching allows his students to progress quickly as he is able to identify their weaknesses and strengths and recommends them training to build up the skill they are lacking. This allowed me to quickly improve my playing skills and to play pieces I used to think were beyond my reach."
              </p>
              <b>-Aswin Kummaran s/o Tamilarasu, Grade 8 Piano ABRSM student, Music Composition, Orchestration, Arranging & Production</b>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={6} display="flex">
          <Box
            sx={{
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexGrow={1}
            >
              <Face4SharpIcon sx={{ fontSize: 86, color: "#2772db" }} />
            </Box>
            <Box textAlign="center">
              <p>
                "Edwin alters the lessons according to my skill and knowledge level, and emphasized on the importance of music foundation and understanding. This gave me the skills needed to analyze the music I'm hearing, and understand the intention used by composers."
              </p>
              <b>-Gia Anastasia Leticia Zahid, DipABRSM Student</b>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={6} display="flex">
          <Box
            sx={{
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexGrow={1}
            >
              <EmojiEmotionsSharpIcon sx={{ fontSize: 86, color: "#2772db" }} />
            </Box>
            <Box textAlign="center">
              <p>
                "Edwin has a strong passion for music and gives his time selflessly. By setting up Bishan Symphonic Orchestra (Now disbanded, moved to Quindicesima Symphonic Orchestra), it helps create a platform for many other like minded individuals, making music together regardless of musical ability. He is also patient and shares freely his musical knowledge."
              </p>
              <b>-Juny, QSO percussionist & Oboist</b>
            </Box>
          </Box>
        </Grid>

        <Grid item xl={6} display="flex">
          <Box
            sx={{
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexGrow={1}
            >
              <Face2SharpIcon sx={{ fontSize: 86, color: "#2772db" }} />
            </Box>
            <Box textAlign="center">
              <p>
                "Well-Qualified in music, Talented in Composition, Passionate in coaching!"
              </p>
              <b>-Julie Lee, Parent of student</b>
            </Box>
          </Box>
        </Grid>
        
        <Grid item xl={6} display="flex">
          <Box
            sx={{
              padding: 2,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              height: '100%',
              width: '100%',
            }}
          >
            <Box
              display="flex"
              justifyContent="center"
              alignItems="center"
              flexGrow={1}
            >
              <Face3SharpIcon sx={{ fontSize: 86, color: "#2772db" }} />
            </Box>
            <Box textAlign="center">
              <p>
                "Under Mr Choy, my piano playing and improvisation skills have improved tremendously. If you want to get to the next level and get a passion for music, Mr Choy is the man."
              </p>
              <b>-Asher Fam, DipABRSM Student (2015)</b>
            </Box>
          </Box>
        </Grid>
        {/* Empty grid item to extend the background color  */}
        <Grid item>
          </Grid> 
      </Grid>
    </Box>

    {/* <Grid item>
    <p className="whychooseus">Our Orchestral</p>
    </Grid>
    <Grid item>
      <p style={{textAlign:"center", fontSize:"50px"}}>More than just exams! Beyond Classrooms!</p>
      <p style={{textAlign:"center", fontSize:"30px"}}>Students are encouraged to join Quindicesima Symphonic Orchestra (QSO) where likeminded musicians learn to play as a small group, or an ensemble, or with the entire orchestra!</p>
    </Grid>
    
    <ImageSlideShow></ImageSlideShow>

    <Grid item>
    <p style={{textAlign:"center", fontSize:"30px"}}>Students who study composition can see their work played by QSO, and even continue to produce their own music!</p>
      <p style={{textAlign:"center", fontSize:"30px"}}>Check out the Attack on Titan Composition by our talented student Aswin Kummaran!</p>
      <YoutubeEmbeded embedId="idTvjMJPAHQ"></YoutubeEmbeded>
    </Grid> */}
    
    <Footer></Footer>
    <a aria-label="Chat on WhatsApp" href="https://wa.me/+6591124691?text=Hi%2C%20I%20would%20like%20to%20find%20out%20more%20about%20the%20courses%20%20offered%20by%20Quindicesima%21"> <img alt="Chat on WhatsApp" src={whatsapplogo} style={{position:"fixed", bottom:5,right:5}} /></a>
  </Grid>
  
  
);

};
export default Courses;
