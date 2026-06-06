import React from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppButton.css";
export default function WhatsAppButton(){
    return(<>

<a href="https://wa.me/9670740023?text=Hello%20I%20want%20a%20website"
  target="_blank"
   rel="noopener noreferrer"
    className="whatsapp-btn"
    >
       <FaWhatsapp size={40} color="green" />  
    </a>


    </>)
}