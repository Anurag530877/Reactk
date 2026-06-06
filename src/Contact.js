 export default function Contact() {
  return (
    <section id="contact" className="bg-light py-5">
      <div className="container" data-aos="zoom-in">
        <h2 className="text-center mb-4">Contact Us</h2>

        <form className="row g-3">
          <div className="col-md-6">
            <input
              type="text"
              className="form-control"
              placeholder="Name"
            />
          </div>

          <div className="col-md-6">
            <input
              type="email"
              className="form-control"
              placeholder="Email"
            />
          </div>

          <div className="col-12">
            <textarea
              className="form-control"
              rows="5"
              placeholder="Message"
            ></textarea>
          </div>

          <div className="col-12 text-center">
            <button className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

