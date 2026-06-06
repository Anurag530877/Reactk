import Dashboard from "./Admin/Deshboard";
import { useNavigate } from "react-router-dom";
export default function Services() {
const navigate=useNavigate();
  const services = [
    "Web Design",
    "Web Development",
    "SEO",
    "Digital Marketing",
    "E-Commerce",
    "Mobile Apps"
  ]

  return (
    <section id="services" className="bg-light py-5">
      <div className="container"  data-aos="zoom-in"
    data-aos-delay="100">
        <h2 className="text-center mb-5 border-bottom w-25 mx-auto pb-2">Services</h2>

        <div className="row">
          {services.map((service, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <div className="card p-4 text-center h-100">
                <h4>{service}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
