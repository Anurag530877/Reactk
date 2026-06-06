import HeaderPage from "./Header"
import { useState,useEffect } from "react"
import Hero from "./Hero"
import Services from "./Service"
import About from "./About"
import Portfolio from "./Portpolio"
import Features from "./Feature"
import Testimonials from "./Testimonials"
import Contact from "./Contact"
import Footer from "./Footer"
import Counter from "./Counter"
import Aos from "aos"
import "aos/dist/aos.css";
import SEO from "./SEO"
import WhatsAppButton from "./WhatsAppButton"
export default function HomePage(){
    const[theme,setTheme]=useState("light")
 useEffect(()=>{
document.body.setAttribute("data-bs-theme",theme)
    },[theme])

 useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true,
    });
  }, []);

    const toggleTheme=()=>{

setTheme(theme==="light"?"dark":"light")
    }
    return(<>
  <SEO
        title="Professional Web Development Company"
        description="We build responsive websites, eCommerce stores and business applications."
        keywords="web development, react js, website design, business website"
      />

    <HeaderPage  theme={theme} toggleTheme={toggleTheme} />
    <Hero/>
    <About/>
    <Services/>
     <Counter/>
    <Features/>
    <Portfolio/>
    <Testimonials/>
    <Contact/>
    <Footer/>
    <WhatsAppButton/>

    
    </>)
}