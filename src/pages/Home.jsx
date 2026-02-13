import React from "react";
import Map from './Map.jsx';
function Home() {
  return (
    <>
      <div>
      <div className="hero">
  <div className="container">
    <div className="row align-items-center">
      <div className="col-lg-7">
        <div className="intro-wrap">
          <div className="golden-border-left"></div>
          <h1 className="mb-5">
            <span className="d-block blessing-line mt-5">May you be blessed with</span>{" "}
            <span className="golden-text">peace and serenity</span> through the fivefold virtues of the
            Buddhas. <span className="typed-words" />
          </h1>
          
        </div>
      </div>
      <div className="col-lg-5 mt-5">
        <div className="slides">
          <div className="halo-effect"></div>
          <img
            src="/assets/images/Buddha1.jpg"
            alt="Buddha"
            className="img-fluid active"
          />
          <img
            src="/assets/images/Buddha2.jpg"
            alt="Buddha"
            className="img-fluid"
          />
          <img
            src="/assets/images/Buddha3.jpg"
            alt="Buddha"
            className="img-fluid"
          />
          <img
            src="/assets/images/Buddha4.jpg"
            alt="Buddha"
            className="img-fluid"
          />
          <img
            src="/assets/images/Buddha5.jpg"
            alt="Buddha"
            className="img-fluid"
          />
        </div>
        <div className="slider-nav">
          {[1, 2, 3, 4, 5].map((num, index) => (
            <button
              key={index}
              className={`slider-btn ${index === 0 ? "active" : ""}`}
              data-index={index}
            >
              <div className="pagoda-animation">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 64 64"
                  className="pagoda-icon"
                >
                  <g fill="none" stroke="#d4a017" strokeWidth="2">
                    <polygon points="32,4 24,16 40,16" fill="#d4a017" />
                    <rect x="20" y="16" width="24" height="6" fill="#fff3cd" />
                    <polygon points="32,22 16,32 48,32" fill="#ffd700" />
                    <rect x="12" y="32" width="40" height="8" fill="#fff8dc" />
                    <rect x="18" y="40" width="28" height="12" fill="#d4a017" />
                  </g>
                  <text
                    x="50%"
                    y="58"
                    textAnchor="middle"
                    fill="#8e6c42"
                    fontSize="12"
                    fontWeight="bold"
                  >
                    {num}
                  </text>
                </svg>
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  </div>
</div>
        <div className="untree_co-section">
          <div className="container">
            <div className="row mb-5 justify-content-center">
              <div className="col-lg-6 text-center">
                <h2 className="section-title text-center mb-3">
                  Summary Details
                </h2>
                <p>
                  Siddhartha Gautama, known as the Buddha, was born in Lumbini
                  (modern-day Nepal) in the 6th century BCE. Renouncing his
                  royal life, he sought the end of suffering and attained
                  enlightenment under the Bodhi tree in Bodh Gaya. His
                  teachings, known as the Dharma, focus on the Four Noble Truths
                  and the Eightfold Path, guiding followers toward liberation
                  from suffering and the cycle of rebirth. The Buddha spent his
                  life sharing wisdom, compassion, and the path to Nirvana,
                  leaving a profound legacy that continues to inspire millions
                  worldwide.
                </p>
              </div>
            </div>
            <div className="row align-items-stretch">
              <div className="col-lg-4 order-lg-1">
                <div className="h-100">
                  <div className="frame h-100">
                    <div
                      className="feature-img-bg h-100"
                      style={{
                        backgroundImage: 'url("/assets/images/Buddha1.jpg")',
                      }}
                    ></div>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-1">
                <div className="feature-1 d-md-flex">
                  <div className="align-self-center">
                    <span className="flaticon-house display-4 text-primary" />
                    <h3>Meditation Hall</h3>
                    <p className="mb-0">
                      Our tranquil meditation space offers daily guided sessions
                      for cultivating mindfulness and inner peace.
                    </p>
                  </div>
                </div>
                <div className="feature-1 ">
                  <div className="align-self-center">
                    <span className="flaticon-restaurant display-4 text-primary" />
                    <h3>Vegetarian Dhamma</h3>
                    <p className="mb-0">
                      Nourish your body with our blessed vegetarian meals
                      prepared according to Buddhist principles.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-6 col-sm-6 col-lg-4 feature-1-wrap d-md-flex flex-md-column order-lg-3">
                <div className="feature-1 d-md-flex">
                  <div className="align-self-center">
                    <span className="flaticon-mail display-4 text-primary" />
                    <h3>Dhamma Teachings</h3>
                    <p className="mb-0">
                      Receive guidance through our regular discourses on
                      Buddhist scriptures and practice.
                    </p>
                  </div>
                </div>
                <div className="feature-1 d-md-flex">
                  <div className="align-self-center">
                    <span className="flaticon-phone-call display-4 text-primary" />
                    <h3>Monastic Support</h3>
                    <p className="mb-0">
                      Our resident monks are available for spiritual counseling
                      and blessings throughout the day.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

 <div className="untree_co-section py-5" style={{backgroundColor: '#f8f5e6'}}>
  <div className="container-fluid">
   
    
    <div className="row g-4 px-4">
      {/* Card 1 - Lumbini */}
      <div className="col-md-4">
        <div className="card h-100 border-0 overflow-hidden" style={{
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(142, 108, 61, 0.1)',
          transition: 'all 0.3s ease',
          background: 'linear-gradient(180deg, #ffffff 0%, #f9f4e8 100%)'
        }}>
          <div className="position-relative overflow-hidden">
            <img
              src="/assets/images/12.JPG"
              className="card-img-top"
              alt="Lumbini"
              style={{transition: 'transform 0.5s ease'}}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{
              background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.1) 0%, rgba(142, 108, 61, 0.3) 100%)'
            }}></div>
          </div>
          <div className="card-body text-center position-relative" style={{zIndex: 1}}>
            <div className="position-absolute top-0 start-50 translate-middle" style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#f8f5e6',
              borderRadius: '50%',
              border: '3px solid #d4af37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-30px'
            }}>
               <svg
      xmlns="http://www.w3.org/2000/svg"
      width="32"
      height="32"
      viewBox="0 0 24 24"
      fill="#8e6c3d"
    >
      <path d="M12 2C10.343 2 9 3.343 9 5s1.343 3 3 3 3-1.343 3-3-1.343-3-3-3zm0 4a1 1 0 110-2 1 1 0 010 2zm0 3c-4.418 0-8 3.582-8 8 0 1.438.387 2.785 1.066 3.953C5.38 20.416 7.535 20 12 20s6.62.416 6.934.953A7.963 7.963 0 0020 17c0-4.418-3.582-8-8-8zm0 14c-3.346 0-6.305-1.403-8.423-3.669C5.462 21.426 8.626 22 12 22s6.538-.574 8.423-1.669C18.305 21.597 15.346 23 12 23z"/>
    </svg>
            </div>
            <h5 className="card-title mt-4" style={{color: '#5a4a3a', fontFamily: "'Noto Sans', sans-serif", fontWeight: 600}}>Festivals</h5>
            <p className="card-text" style={{color: '#8e6c3d'}}>
              Birthplace of Buddha, Nepal
            </p>
           
          </div>
          <div className="card-footer bg-transparent border-0 pb-3">
            <button className="btn btn-sm" style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: 'transparent',
              color: '#8e6c3d',
              border: '1px solid #d4af37',
              borderRadius: '20px',
              padding: '5px 15px',
              fontSize: '0.8rem'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Card 2 - Bodh Gaya */}
      <div className="col-md-4">
        <div className="card h-100 border-0 overflow-hidden" style={{
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(142, 108, 61, 0.1)',
          transition: 'all 0.3s ease',
          background: 'linear-gradient(180deg, #ffffff 0%, #f9f4e8 100%)'
        }}>
          <div className="position-relative overflow-hidden">
            <img
              src="/assets/images/13.JPG"
              className="card-img-top"
              alt="Bodh Gaya"
              style={{transition: 'transform 0.5s ease'}}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{
              background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.1) 0%, rgba(142, 108, 61, 0.3) 100%)'
            }}></div>
          </div>
          <div className="card-body text-center position-relative" style={{zIndex: 1}}>
            <div className="position-absolute top-0 start-50 translate-middle" style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#f8f5e6',
              borderRadius: '50%',
              border: '3px solid #d4af37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-30px'
            }}>
             <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#d4af37">
  <path d="M14 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8l-6-6zM6 20V4h7v5h5v11H6z"/>
  <path d="M10 10H8v2h2v-2zm0 4H8v2h2v-2zm4-4h-2v2h2v-2z" fill="#8e6c3d"/>
</svg>

            </div>
            <h5 className="card-title mt-4" style={{color: '#5a4a3a', fontFamily: "'Noto Sans', sans-serif", fontWeight: 600}}>History</h5>
            <p className="card-text" style={{color: '#8e6c3d'}}>
              Site of Enlightenment, India
            </p>
            
          </div>
          <div className="card-footer bg-transparent border-0 pb-3">
            <button className="btn btn-sm" style={{
              backgroundColor: 'transparent',
              color: '#8e6c3d',
              border: '1px solid #d4af37',
              borderRadius: '20px',
              padding: '5px 15px',
              fontSize: '0.8rem'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
      
      {/* Card 3 - Sarnath */}
      <div className="col-md-4">
        <div className="card h-100 border-0 overflow-hidden" style={{
          borderRadius: '8px',
          boxShadow: '0 5px 15px rgba(142, 108, 61, 0.1)',
          transition: 'all 0.3s ease',
          background: 'linear-gradient(180deg, #ffffff 0%, #f9f4e8 100%)'
        }}>
          <div className="position-relative overflow-hidden">
            <img
              src="/assets/images/14.JPG"
              className="card-img-top"
              alt="Sarnath"
              style={{transition: 'transform 0.5s ease'}}
            />
            <div className="position-absolute top-0 start-0 w-100 h-100" style={{
              background: 'linear-gradient(180deg, rgba(212, 175, 55, 0.1) 0%, rgba(142, 108, 61, 0.3) 100%)'
            }}></div>
          </div>
          <div className="card-body text-center position-relative" style={{zIndex: 1}}>
            <div className="position-absolute top-0 start-50 translate-middle" style={{
              width: '60px',
              height: '60px',
              backgroundColor: '#f8f5e6',
              borderRadius: '50%',
              border: '3px solid #d4af37',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: '-30px'
            }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#8e6c3d" strokeWidth="1.5">
  {/* Building outline */}
  <path d="M3 21h18V6H3v15zM3 6l9-4 9 4M7 10v6m5-6v6m5-6v6"/>
  {/* Golden accents */}
  <path d="M12 16c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z" fill="#d4af37"/>
</svg>
            </div>
            <h5 className="card-title mt-4" style={{color: '#5a4a3a', fontFamily: "'Noto Sans', sans-serif", fontWeight: 600}}>Five Greate Buddha Exhibition Hall</h5>
            <p className="card-text" style={{color: '#8e6c3d'}}>
              First Teaching, India
            </p>
           
          </div>
          <div className="card-footer bg-transparent border-0 pb-3">
            <button className="btn btn-sm" style={{
              backgroundColor: 'transparent',
              color: '#8e6c3d',
              border: '1px solid #d4af37',
              borderRadius: '20px',
              padding: '5px 15px',
              fontSize: '0.8rem'
            }}>
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
    
    
  </div>
  
  <style jsx>{`
    .card:hover {
      transform: translateY(-5px);
      box-shadow: 0 15px 30px rgba(142, 108, 61, 0.2) !important;
    }
    .card:hover img {
      transform: scale(1.05);
    }
    .card-title {
      position: relative;
      display: inline-block;
    }
    .card-title:after {
      content: '';
      position: absolute;
      bottom: -5px;
      left: 50%;
      transform: translateX(-50%);
      width: 30px;
      height: 2px;
      background: linear-gradient(90deg, #d4af37, #8e6c3d);
    }
  `}</style>
</div>

        <div className="untree_co-section">
          <div className="container">
            <div className="row text-center justify-content-center mb-5">
              <div className="col-lg-7">
                <h2 className="section-title text-center">History of Buddha</h2>
              </div>
            </div>
            <div className="owl-carousel owl-3-slider" style={{ gap: '20px' }}>
              <div className="item">
                <a
                  className="media-thumb"
                  href="/assets/images/12.JPG"
                  data-fancybox="gallery"
                >
                  <div className="media-text">
                    <h3>Festivals</h3>
                    <span className="location">
                      Birthplace of Buddha, Nepal
                    </span>
                  </div>
                  <img
                    src="/assets/images/12.JPG"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="item">
                <a
                  className="media-thumb"
                  href="/assets/images/13.JPG"
                  data-fancybox="gallery"
                >
                  <div className="media-text">
                    <h3>Bodh Gaya</h3>
                    <span className="location">
                      Site of Enlightenment, India
                    </span>
                  </div>
                  <img
                    src="/assets/images/13.JPG"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="item">
                <a
                  className="media-thumb"
                  href="/assets/images/14.JPG"
                  data-fancybox="gallery"
                >
                  <div className="media-text">
                    <h3>Sarnath</h3>
                    <span className="location">First Teaching, India</span>
                  </div>
                  <img
                    src="/assets/images/14.JPG"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="item">
                <a
                  className="media-thumb"
                  href="/assets/images/15.JPG"
                  data-fancybox="gallery"
                >
                  <div className="media-text">
                    <h3>Kushinagar</h3>
                    <span className="location">Parinirvana, India</span>
                  </div>
                  <img
                    src="/assets/images/15.JPG"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="item">
                <a
                  className="media-thumb"
                  href="/assets/images/16.JPG"
                  data-fancybox="gallery"
                >
                  <div className="media-text">
                    <h3>Rajgir</h3>
                    <span className="location">Buddha's Retreat, India</span>
                  </div>
                  <img
                    src="/assets/images/16.JPG"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
              <div className="item">
                <a
                  className="media-thumb"
                  href="/assets/images/17.JPG"
                  data-fancybox="gallery"
                >
                  <div className="media-text">
                    <h3>Shravasti</h3>
                    <span className="location">Buddha's Teachings, India</span>
                  </div>
                  <img
                    src="/assets/images/17.JPG"
                    alt="Image"
                    className="img-fluid"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <Map />
      </div>
    </>
  );
}
export default Home;
