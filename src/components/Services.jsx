const Services = () => {
  return (
    <section className="text-center mt-4">
      <div className="container">
        <div className="space-y-3 mb-5">
          <p className="mb-2 text-center" style={{fontSize:'32px',fontWeight:600}}>
            Discover the joy of
            <span className="text-uppercase" style={{ color: "#FEA116" }}>
              {" "}
              Oakwood
            </span>
          </p>
          <h6 style={{ fontWeight: 400, color: "#666565" }}>
            Experience the great outdoors. We offer the best camping experience
            for families and friends.
          </h6>
        </div>
        <div className="row align-items-center justify-content-center gap-6">
          {/* Image Section */}
          <div className="col-lg-6">
            <img
              alt="Image"
              className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center"
              height="310"
              src="img/slide2.jpg"
              width="550"
              style={{ borderRadius: 10 }}
            />
          </div>
          {/* Text Section */}
          <div className="col-lg-4">
            <ul className="grid gap-6" style={{ listStyleType: "none" }}>
              <li className="mb-4">
                <div className="grid gap-1">
                  <h4 className="text-xl font-bold ">Family Friendly</h4>
                  <p style={{ fontWeight: 400, color: "#666565" }}>
                    Our campsite is perfect for families with kids. We have fun
                    activities for everyone.
                  </p>
                </div>
              </li>
              <li className="mb-4">
                <div className="grid gap-1">
                  <h4 className="text-xl font-bold ">Scenic Views</h4>
                  <p style={{ fontWeight: 400, color: "#666565" }}>
                    Wake up to breathtaking views of the mountains and the lake.
                    Perfect for nature lovers.
                  </p>
                </div>
              </li>
              <li className="mb-5">
                <div className="grid gap-1">
                  <h4 className="text-xl font-bold ">Campfire Nights</h4>
                  <p style={{ fontWeight: 400, color: "#666565" }}>
                    Enjoy s'mores and stories by the campfire. Our friendly
                    staff will make sure you have a great time.
                  </p>
                </div>
              </li>
            </ul>
            <div className="d-lg-flex justify-content-end flex-lg-row gap-2 gap-lg-4 ps-lg-4">
              <a className="text-end" href="" style={{borderBottom:"1px solid #FEA116",fontWeight:500,textDecoration:"none", color: "#FEA116" }}>Show All Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
