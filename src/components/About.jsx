import "./carousal.css";
const About = () => {
  return (
    <div className="container-xxl py-5">
      <div className="container">
        <div className="row g-5 align-items-center">
          <div className="col-lg-6">
            <h5
              className="section-title text-start  text-uppercase"
              style={{
                color: "#FEA116",
                fontWeight: 600,
                lineHeight: "35px",
                borderBottom: "2px solid #FEA116",
              }}
            >
              About Us
            </h5>
            <p className="mb-4" style={{ fontSize: "32px", fontWeight: 600 }}>
              Welcome to{" "}
              <span className="text-uppercase" style={{ color: "#FEA116" }}>
                Oakwood-Resort
              </span>
            </p>
            <p className="mb-4">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu
              diam amet diam et eos. Clita erat ipsum et lorem et sit, sed stet
              lorem sit clita duo justo magna dolore erat amet
            </p>
            <a
              className="btn text-white btn custom-btn py-md-3 px-md-5 me-3 text-uppercase mt-2"
              style={{ fontWeight: 600, background: "#FEA116" }}
              href="/"
            >
              Visit Our Galary
            </a>
          </div>
          <div className="col-lg-6">
            <div className="row g-3">
              <div className="col-6 text-end d-flex justify-content-end">
                <img
                  className="img-fluid  w-75 wow zoomIn align-self-end"
                  data-wow-delay="0.1s"
                  src="img/f1.jpg"
                 
                />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid w-100 wow zoomIn"
                  data-wow-delay="0.3s"
                  src="img/f2.jpg"
                />
              </div>
              <div className="col-6 text-end d-flex justify-content-end">
                <img
                  className="img-fluid  w-50 wow zoomIn"
                  data-wow-delay="0.5s"
                  style={{height:'6rem'}}
                  src="img/f3.jpg"
                  />
              </div>
              <div className="col-6 text-start">
                <img
                  className="img-fluid  w-75 wow zoomIn"
                  
                  style={{height:'9rem'}}
                  data-wow-delay="0.7s"
                  src="img/f4.jpg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
