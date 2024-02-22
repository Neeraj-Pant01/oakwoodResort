
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../App.css'

const Testimonial = () => {
  const testimonials = [
    {
      id: 1,
      image: 'img/f1.jpg',
      name: 'Client Name',
      profession: 'Profession',
      text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet  diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
    },
    {
      id: 2,
      image: 'img/f2.jpg',
      name: 'Client Name',
      profession: 'Profession',
      text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
    },
    {
      id: 3,
      image: 'img/f3.jpg',
      name: 'Client Name',
      profession: 'Profession',
      text: 'Tempor stet labore dolor clita stet diam amet ipsum dolor duo ipsum rebum stet dolor amet diam stet. Est stet ea lorem amet est kasd kasd et erat magna eos',
    },
  ];

  return (
    <div className="container-l testimonial my-5  " >
  <div className="container-xl p-lg-5" style={{ boxShadow:'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',borderRadius:15}}>
    <div className="row">
      <div className="col-lg-7">
        <Carousel autoPlay interval={3000}  infiniteLoop >
          {testimonials.map((testimonial) => (
            <div className="testimonial-item position-relative bg-white rounded overflow-hidden" key={testimonial.id}>
              <p className="fs-5">{testimonial.text}</p>
              <div className="d-flex align-items-center mt-3">
                <img className="img-fluid rounded-circle me-3" src={testimonial.image} style={{ width: '50px', height: '50px' }} alt={testimonial.name} />
                <div>
                  <h6 className="fw-bold mb-0">{testimonial.name}</h6>
                  <small className="text-muted">{testimonial.profession}</small>
                </div>
              </div>
              {/* <i className="fa fa-quote-right fa-2x text-primary position-absolute bottom-0 end-0 mb-3 me-3"></i> */}
            </div>
          ))}
        </Carousel>
       
      </div>
      <div className="col-lg-5">
        <img className="img-fluid" src="img/slide1.jpeg" style={{borderRadius:15}} alt="Image" />
      </div>
    </div>
  </div>
</div>


  );
};

export default Testimonial;



