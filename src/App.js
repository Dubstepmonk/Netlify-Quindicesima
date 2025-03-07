
import "./App.css";
import * as React from "react";
import Home from "./Home";
import Courses from "./Courses";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Orchestra from "./Orchestra";
import BookTrial from "./BookTrial";
import Products from "./Products";
import Events from "./Events";
import ScrollToTop from "./ScrollToTop"
import SubmitFormSuccess from "./SubmitFormSuccess";
function App() {
  // const containerStyle = {
  //   width: "100vw",
  //   height: "100vh",
  //   backgroundImage: `url(${require("./resource/musicbg.jpg")})`,
  //   backgroundPosition: "center",
  //   backgroundSize: "cover",
  //   backgroundRepeat: "no-repeat",
  // };
  return (
    // <div className="App" style={containerStyle}>
    //   <Navbar></Navbar>
    //   <Cards></Cards>
    // </div>
    
    <Router>
      <ScrollToTop></ScrollToTop>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/home" element={<Home />} />
        <Route path="/orchestra" element={<Orchestra/>} />
        <Route path="/booktrial" element={<BookTrial/>}/>
        <Route path="/products" element={<Products/>}/>
        <Route path = "/events" element={<Events/>}/>
        <Route path ="/success" element={<SubmitFormSuccess/>}/>
      </Routes>
    </Router>
    
  );
}

export default App;
