import React from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Support from "./components/Support.jsx";
import AllInOne from "./components/AllInOne.jsx";
import Pricing from "./components/Pricing.jsx";
import Footer from "./components/Footer.jsx";

const App = ()=>{
  return(
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Support/>
      <AllInOne/>
      <Pricing/>
      <Footer/>
    </div>
  )
}

export default App;