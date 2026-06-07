 import LanguageSwitche from "./LanguageSwitche"
 import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import "./i18n";
 export default function HeaderPage({ theme, toggleTheme }){
  
  const {t}=useTranslation();
 
    return(<>

    <div className="container-fluid px-3 py-2 bg-dark text-light">
        <div className="row mt-1 justify-content-end text-center mt-2" >
            <div className="col-md-2"><h3>Tech Academy</h3></div>
            <div className="col-md-7">
                <input type="text" placeholder="Search" className="form-control"/>
            </div>
            {/* <div className="col-md-1"><h5>Cart(0)</h5></div> */}
            <div className="col-md-1">
              <h5>Cart(0)</h5>
            </div>
            <div className="col-md-1">
                <Link to="/login" className="btn btn-info ">Login</Link>
            </div>
        </div>
    </div>

 <nav className="navbar  navbar-expand-lg navbar-warning bg-warning sticky-top"> 
      <div className="container">
        <a className="navbar-brand fw-bold text-dark" href="https://google.com">
          TechBusiness
        </a>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className=" navbar-nav ms-auto">
            <li className="nav-item fw-bold "><a className="nav-link" href="#about">{t("Header.about")}</a></li>
            <li className="nav-item fw-bold"><a className="nav-link" href="#services">{t("Header.Services")}</a></li>
            <li className="nav-item fw-bold" ><a className="nav-link" href="#portfolio">{t("Header.Portpoliyo")}</a></li>
            <li className="nav-item fw-bold"><a className="nav-link" href="#contact">{t("Header.Contact")}</a></li>
            <li className="nav-item ms-lg-3">
                <button onClick={toggleTheme} className="btn  btn-outline-primary mt-1">{theme === "light" ? "🌙 Dark" : "☀️ Light"}</button></li>
<LanguageSwitche/>
          </ul>
        </div> 
      </div>
    </nav>
   
    </>)
}