import GoogleMap from "./Googlemap";
import { FaWhatsapp ,FaInstagram,FaLinkedin} from "react-icons/fa6";
 export default function Footer() {

  return (
    <footer className="bg-dark text-white text-center p-3">
    <div className="contianer">
        <div className="row">
            <div className="col-md-4">
 © 2026 TechBusiness. All Rights Reserved.
  <h4>Anurag Web Solutions</h4>

  <p>📍 Sultanpur, Uttar Pradesh</p>

  <p>📞 +91 XXXXX XXXXX</p>

  <p>📧 info@yourcompany.com</p>
            </div>
            <div className="col-md-4">
                 <GoogleMap/> 
            </div>
            <div className="col-md-4">
<h4 className="border-bottom w-25 mx-auto"> Links</h4>

  <a  href="https://wa.me/919670740023" className="fs-3 nav-link">{<FaWhatsapp/>} Whatsapp </a>
  <a href="https://www.instagram.com/" className="fs-3 nav-link">{<FaInstagram/>} Instagram</a>
  <a href="https://www.linkedin.com/" className="fs-3 nav-link">{<FaLinkedin/>} linkedin </a>

</div>

            </div>
    </div>
  
     </footer>
  );
}
