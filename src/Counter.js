import CountUp from "react-countup";

export default  function Counter() {
  return (
    <section className="py-5 bg-primary text-white">
      <div className="container" data-aos="fade-right">
        <div className="row text-center">

          <div className="col-md-3 mb-4">
            <h2 className="fw-bold">
              <CountUp end={500} duration={3} />+
            </h2>
            <p>Happy Clients</p>
          </div>

          <div className="col-md-3 mb-4">
            <h2 className="fw-bold">
              <CountUp end={120} duration={3} />+
            </h2>
            <p>Projects Completed</p>
          </div>

          <div className="col-md-3 mb-4">
            <h2 className="fw-bold">
              <CountUp end={10} duration={3} />+
            </h2>
            <p>Years Experience</p>
          </div>

          <div className="col-md-3 mb-4">
            <h2 className="fw-bold">
              <CountUp end={98} duration={3} />%
            </h2>
            <p>Client Satisfaction</p>
          </div>

        </div>
      </div>
    </section>
  );
}