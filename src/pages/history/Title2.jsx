import React, { useState } from 'react';

// --- Mock Data ---
const pagodaData = [
  {
    id: 1,
    name: 'Shwedagon Pagoda',
    location: 'Yangon, Myanmar',
    description: 'The Shwedagon Pagoda is believed to have been constructed over 2,600 years ago, making it the oldest pagoda in the world. It is a magnificent stupa located in Yangon, Myanmar, and is revered as one of the most sacred Buddhist sites in the country.',
    imageUrl: 'https://placehold.co/800x600/a16207/FFFFFF?text=Shwedagon+Pagoda'
  },
  {
    id: 2,
    name: 'Bagan Temples',
    location: 'Bagan, Myanmar',
    description: 'The Bagan Temples are a collection of over 2,000 Buddhist temples and pagodas scattered across the Bagan plains. Built between the 11th and 13th centuries, this archaeological zone represents the spiritual heritage of Myanmar and is a UNESCO World Heritage Site.',
    imageUrl: 'https://placehold.co/800x600/854d0e/FFFFFF?text=Bagan+Temples'
  },
  {
    id: 3,
    name: 'Golden Rock',
    location: 'Mon State, Myanmar',
    description: 'Kyaiktiyo Pagoda, known as the Golden Rock, is a gravity-defying boulder covered in gold leaf and topped with a small pagoda. According to legend, ',
    imageUrl: 'https://placehold.co/800x600/713f12/FFFFFF?text=Golden+Rock'
  },
  {
    id: 4,
    name: 'Sule Pagoda',
    location: 'Yangon, Myanmar',
    description: 'Located in downtown Yangon, Sule Pagoda is said to be over 2,000 years old. It serves as a landmark in the city center and is unique for its octagonal shape. The pagoda is believed to enshrine a hair relic of the Buddha.',
    imageUrl: 'https://placehold.co/800x600/573b10/FFFFFF?text=Sule+Pagoda'
  },
  {
    id: 5,
    name: 'Ananda Temple',
    location: 'Bagan, Myanmar',
    description: 'The Ananda Temple is one of the most beautiful and best-preserved temples in Bagan. Built in 1105 AD, it combines Mon and Indian architectural styles. The temple houses four standing Buddha statues, each facing a cardinal direction.',
    imageUrl: 'https://placehold.co/800x600/ca8a04/FFFFFF?text=Ananda+Temple'
  },
  {
    id: 6,
    name: 'Mahamuni Buddha Temple',
    location: 'Mandalay, Myanmar',
    description: 'The Mahamuni Buddha Temple is a Buddhist temple and major pilgrimage site, located southwest of Mandalay. The Mahamuni Image is deified in this temple, and originally came from Arakan. Devotees cover the image with gold leaf, giving it a distinctive lumpy texture.',
    imageUrl: 'https://placehold.co/800x600/451a03/FFFFFF?text=Mahamuni+Temple'
  }
];

// Modal Component
const PagodaModal = ({ pagoda, onClose }) => {
  return (
    <div className="modal fade show" style={{ display: 'block', backgroundColor: 'rgba(0,0,0,0.7)' }}>
      <div className="modal-dialog modal-lg modal-dialog-centered">
        <div className="modal-content" style={{ 
          border: 'none',
          borderRadius: '12px',
          overflow: 'hidden',
          background: 'linear-gradient(to bottom, #f8f4e8 0%, #fff8dc 100%)'
        }}>
          <div className="modal-header" style={{
            borderBottom: '1px solid #d4a762',
            background: 'linear-gradient(to right, #8b5a2b, #a67c52)',
            color: '#fff8dc'
          }}>
            <h5 className="modal-title fw-bold">{pagoda.name}</h5>
            <button 
              type="button" 
              className="btn-close" 
              onClick={onClose}
              style={{ filter: 'invert(1)' }}
            ></button>
          </div>
          <div className="modal-body">
            <div className="row">
              <div className="col-md-6 mb-3 mb-md-0">
                <img 
                  src={pagoda.imageUrl} 
                  alt={pagoda.name} 
                  className="img-fluid rounded-3 shadow" 
                  style={{ border: '5px solid #d4a762' }}
                />
              </div>
              <div className="col-md-6">
                <p className="text-muted mb-3">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  {pagoda.location}
                </p>
                <p style={{ color: '#5a3e1b', lineHeight: '1.8' }}>
                  {pagoda.description}
                </p>
              </div>
            </div>
          </div>
          <div className="modal-footer" style={{
            borderTop: '1px solid #d4a762',
            background: 'rgba(255, 248, 220, 0.7)'
          }}>
            <button 
              type="button" 
              className="btn" 
              onClick={onClose}
              style={{
                background: 'linear-gradient(to right, #8b5a2b, #a67c52)',
                color: '#fff8dc',
                border: 'none'
              }}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
export default function Title2() {
  const [selectedPagoda, setSelectedPagoda] = useState(null);
  const [openId, setOpenId] = useState(pagodaData.length > 0 ? pagodaData[0].id : null);

  const openModal = (pagoda) => {
    setSelectedPagoda(pagoda);
  };

  const closeModal = () => {
    setSelectedPagoda(null);
  };

  // Styles
  const bgStyle = {
   
    minHeight: "100vh",
    padding: "60px 0",
    color: "#3b2a10",
    fontFamily: "'Noto Serif', serif"
  };

  const sectionTitleStyle = {
    color: "#5a3e1b",
    fontSize: "2.5rem",
    textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
    letterSpacing: "1px",
    position: 'relative',
    display: 'inline-block',
    marginBottom: '2rem'
  };

  const sectionTitleAfter = {
    content: '""',
    position: 'absolute',
    bottom: '-10px',
    left: '0',
    width: '80px',
    height: '4px',
    background: 'linear-gradient(to right, #d4a762, #8b5a2b)',
    borderRadius: '2px'
  };

  const cardHoverStyle = {
    transform: 'translateY(-5px)',
    boxShadow: '0 15px 30px rgba(0,0,0,0.15)'
  };

  return (
    <div style={bgStyle}>
      <div className="container py-5">
        {/* Hero Section */}
        <section className="text-center mb-5">
          <h1 className="display-4 fw-bold mb-4" style={{ 
            color: '#5a3e1b',
            textShadow: '2px 2px 4px rgba(0,0,0,0.1)'
          }}>
            Sacred Pagodas of Myanmar
          </h1>
          <p className="lead" style={{ maxWidth: '800px', margin: '0 auto', color: '#5a3e1b' }}>
            Explore the magnificent Buddhist pagodas that have stood for centuries as symbols of faith, culture, and architectural brilliance.
          </p>
        </section>

        {/* Featured Pagoda */}
        <section className="mb-5">
          <h2 className="text-center mb-5" style={sectionTitleStyle}>
            <span>Featured Pagoda</span>
            <div style={sectionTitleAfter}></div>
          </h2>
          <div className="row g-4 align-items-center">
            <div className="col-lg-6">
              <div 
                className="rounded-4 overflow-hidden shadow-lg"
                style={{
                  border: '3px solid #d4a762',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onClick={() => openModal(pagodaData[0])}
              >
                <img
                  src={pagodaData[0].imageUrl}
                  alt={pagodaData[0].name}
                  className="img-fluid w-100"
                  style={{ transition: 'transform 0.3s ease' }}
                />
              </div>
            </div>
            <div className="col-lg-6">
              <div 
                className="p-4 p-lg-5 rounded-4 h-100"
                style={{
                  background: 'rgba(255, 248, 220, 0.7)',
                  border: '2px solid #d4a762',
                  boxShadow: '0 10px 20px rgba(0,0,0,0.1)'
                }}
              >
                <h3 className="fw-bold mb-3" style={{ color: "#8b5a2b" }}>{pagodaData[0].name}</h3>
                <p className="text-muted mb-4">
                  <i className="bi bi-geo-alt-fill me-2"></i>
                  {pagodaData[0].location}
                </p>
                <p className="mb-4" style={{ fontSize: "1.1rem", lineHeight: "1.8", color: "#5a3e1b" }}>
                  {pagodaData[0].description.substring(0, 200)}...
                </p>
                <button 
                  className="btn mt-auto"
                  onClick={() => openModal(pagodaData[0])}
                  style={{
                    background: 'linear-gradient(to right, #8b5a2b, #a67c52)',
                    color: '#fff8dc',
                    border: 'none',
                    padding: '0.5rem 1.5rem'
                  }}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* All Pagodas Grid */}
        <section className="mb-5">
          <h2 className="text-center mb-5" style={sectionTitleStyle}>
            <span>Explore Sacred Sites</span>
            <div style={sectionTitleAfter}></div>
          </h2>
          <div className="row g-4">
            {pagodaData.map((pagoda) => (
            // In the All Pagodas Grid section, update the card structure:
<div className="col-xl-4 col-md-6" key={pagoda.id}>
  <div 
    className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden"
    style={{
      transition: 'all 0.3s ease',
      background: 'linear-gradient(to bottom, #ffffff 0%, #f8f4e8 100%)',
      border: '1px solid rgba(224, 208, 177, 0.5)',
      cursor: 'pointer'
    }}
    onClick={() => openModal(pagoda)}
  >
    <div className="position-relative overflow-hidden" style={{ height: '200px' }}>
      <img 
        src={pagoda.imageUrl} 
        alt={pagoda.name} 
        className="img-fluid w-100 h-100 object-fit-cover"
        style={{ 
          transition: 'transform 0.5s ease',
          transform: 'scale(1)'
        }}
      />
    </div>
    <div 
      className="card-body"
      style={{
        transition: 'all 0.3s ease',
        background: 'transparent'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = 'rgba(255, 248, 220, 0.7)';
        e.currentTarget.parentNode.querySelector('img').style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = 'transparent';
        e.currentTarget.parentNode.querySelector('img').style.transform = 'scale(1)';
      }}
    >
      <h5 className="card-title fw-bold mb-3" style={{ color: "#8b5a2b" }}>{pagoda.name}</h5>
      <p className="card-text text-muted mb-3">
        <i className="bi bi-geo-alt-fill me-2"></i>
        {pagoda.location}
      </p>
      <p className="card-text" style={{ color: "#5a3e1b" }}>
        {pagoda.description.substring(0, 100)}...
      </p>
    </div>
    <div className="card-footer bg-transparent border-top-0">
      <button 
        className="btn btn-sm w-100"
        onClick={(e) => {
          e.stopPropagation();
          openModal(pagoda);
        }}
        style={{
          background: 'linear-gradient(to right, #8b5a2b, #a67c52)',
          color: '#fff8dc',
          border: 'none'
        }}
      >
        View Details
      </button>
    </div>
  </div>
</div>
            ))}
          </div>
        </section>

        {/* Timeline Section */}
        <section>
          <h2 className="text-center mb-5" style={sectionTitleStyle}>
            <span>Historical Timeline</span>
            <div style={sectionTitleAfter}></div>
          </h2>
          <div className="timeline">
            {pagodaData.map((pagoda, index) => (
              <div 
                className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`} 
                key={`timeline-${pagoda.id}`}
                onClick={() => openModal(pagoda)}
              >
                <div className="timeline-content rounded-4 shadow-sm p-4"
                  style={{
                    background: 'rgba(255, 248, 220, 0.9)',
                    border: '2px solid #d4a762',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease'
                  }}
                >
                  <h5 className="fw-bold" style={{ color: "#8b5a2b" }}>{pagoda.name}</h5>
                  <p className="text-muted small mb-2">{pagoda.location}</p>
                  <p style={{ color: "#5a3e1b" }}>{pagoda.description.substring(0, 80)}...</p>
                  <button 
                    className="btn btn-sm mt-2"
                    onClick={(e) => {
                      e.stopPropagation();
                      openModal(pagoda);
                    }}
                    style={{
                      background: 'linear-gradient(to right, #8b5a2b, #a67c52)',
                      color: '#fff8dc',
                      border: 'none'
                    }}
                  >
                    Read More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* Modal */}
      {selectedPagoda && <PagodaModal pagoda={selectedPagoda} onClose={closeModal} />}
    </div>
  );
}