import { useState } from 'react';
import { Fade } from 'react-reveal';
import './carousal.css';

const LuxuryLiving = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  const toggleVideo = () => {
    setVideoPlaying(!videoPlaying);
  };

  return (
    <div className="container-xxl py-5 px-0" style={{ height: '100%' }}>
      <Fade>
        <div className="row g-0" style={{ height: '100%' }}>
          <div className="col-md-6 d-flex align-items-center" style={{ background: '#0F172B', height: '100%' }}>
            <div className="p-5">
              <h6 className="section-title text-start text-white text-uppercase mb-3">Rainbow Trout Fish</h6>
              <p className="text-white mb-4"style={{fontSize:'32px',fontWeight:600}}> Explore the Majestic Rainbow Trout</p>
              <p className="text-white mb-4">
                Indulge in a unique aquatic experience at our resort, where the vibrant Rainbow Trout thrives in crystal-clear waters.
                Immerse yourself in the tranquility of nature and discover the allure of Rainbow Trout fishing at our exclusive retreat.
              </p>
              <button className="btn text-white py-md-3 px-md-5 me-3" style={{ background: '#FEA116' }} onClick={toggleVideo}>
                {videoPlaying ? "Pause Video" : "Play Video"}
              </button>
              <button className="btn styled-button rounded py-md-3 px-md-5">Reserve Now</button>
            </div>
          </div>
          <div className="col-md-6" >
            {/* <div className="video-container" style={{ height: '100%' }}> */}
              <iframe
                width="100%"
                height="100%" // Set the height to 100%
                src={`https://www.youtube.com/embed/2qf0QTItmnE?autoplay=${videoPlaying ? 1 : 0}`}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          {/* </div> */}
        </div>
      </Fade>
    </div>
  );
};

export default LuxuryLiving;
