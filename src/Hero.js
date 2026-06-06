 import { useTranslation } from "react-i18next";
 export default function Hero() {
  const {t}=useTranslation();
    return (
      
    <section className="hero text-center text-light d-flex align-items-center">
      <div className="container-fluid ">
        <h1 className="display-4 fw-bold">
          Grow Your Business Online
        </h1>
        <p className="lead">
          Professional Web Development & Digital Solutions
        </p>
        <button className="btn btn-warning btn-lg">
          Get Started 
        </button>
          <h1>{t("welcome")}</h1>
      </div>
    </section>
        
 );

}
