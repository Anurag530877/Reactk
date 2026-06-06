 export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-light py-5">
      <div className="container" data-aos="flip-left">
        <h2 className="text-center border-bottom w-25 mx-auto pb-2">Portfolio</h2>

        <div className="row mt-4">
          {[1,2,3].map(item => (
            <div className="col-md-4 mb-4" key={item}>
              <div className="card">
                <img
                  src={`https://picsum.photos/400/250?random=${item}`}
                  className="card-img-top"
                  alt="project"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
 