import React, { useState } from 'react';

// SVG Icons with enhanced gold color
const SpireIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="pagoda-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 11l7-7 7 7M5 19l7-7 7 7" />
  </svg>
);

const BellIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="pagoda-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
  </svg>
);

const BaseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="pagoda-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM4 12a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM4 18a2 2 0 012-2h12a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2z" />
  </svg>
);

const RoofIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="pagoda-icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 21v-2a4 4 0 014-4h10a4 4 0 014 4v2M3 10l9-8 9 8-9 8-9-8z" />
  </svg>
);

// Feature Button Component with enhanced styling
const FeatureButton = ({ feature, isActive, onClick }) => {
  let IconComponent;
  switch(feature.id) {
    case 1: IconComponent = SpireIcon; break;
    case 2: IconComponent = BellIcon; break;
    case 3: IconComponent = RoofIcon; break;
    case 4: IconComponent = BaseIcon; break;
    default: IconComponent = SpireIcon;
  }

  return (
    <button
      onClick={onClick}
      className={`feature-button ${isActive ? 'active' : ''}`}
      aria-label={`Explore ${feature.title}`}
    >
      <div className="icon-container">
        <IconComponent />
      </div>
      <div className="feature-text">
        <h5 className="feature-title">{feature.title}</h5>
        {isActive && <div className="active-indicator"></div>}
      </div>
    </button>
  );
};

// Main Component with enhanced design
const Architecture = () => {
  const [selectedFeature, setSelectedFeature] = useState({
    id: 1,
    title: 'The Spire (Hti)',
    description: 'The crowning element of the pagoda, the Hti, is an ornamental spire, often adorned with precious metals and jewels. It symbolizes the sacred Mount Meru, the center of the universe in Buddhist cosmology, representing the path to enlightenment.',
    image: './assets/images/1.JPG',
  });

  const pagodaData = [
    { ...selectedFeature, id: 1 },
    {
      id: 2,
      title: 'The Bell (Khaung)',
      description: 'Below the spire sits the bell-shaped dome. This solid structure often enshrines sacred relics of the Buddha or esteemed monks. Its shape is symbolic of a monk\'s alms bowl, representing purity and the monastic way of life.',
      image: './assets/images/2.JPG',
    },
    {
      id: 3,
      title: 'Tiered Roofs',
      description: 'Pagodas are famous for their multiple, gracefully curving roofs. The number of tiers is significant, often representing different levels of heaven or stages of spiritual attainment. The eaves are decorated with intricate carvings of mythical creatures.',
      image: './assets/images/3.JPG',
    },
    {
      id: 4,
      title: 'The Base (Pyan)',
      description: 'The foundation of the pagoda is a solid, often square or octagonal, terraced base. These terraces may be adorned with Jataka tales (stories of the Buddha\'s past lives) and serve as a walkway for meditative circumambulation.',
      image: './assets/images/4.JPG',
    },
  ];

  return (
    <div className="architecture-app">
      <header className="app-header">
        <div className="header-content">
          <h1>Sacred Buddhist Architecture</h1>
          <div className="divider-line"></div>
                    <p className='text-dark mt-5'>Exploring the Divine Structures of Enlightenment</p>

        </div>
      </header>
      
      <div className="architecture-container">
        <div className="background-overlay"></div>
        <div className="golden-pattern"></div>

        <div className="content-wrapper">
          {/* Main Content Display */}
          <div className="main-content">
            <div className="text-content">
              <div className="feature-display">
                <div className="image-container">
                  <img 
                    key={selectedFeature.id}
                    src={selectedFeature.image} 
                    alt={selectedFeature.title}
                    className="feature-image"
                    onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/1c1917/eab308?text=Image+Not+Found'; }}
                  />
                  <div className="image-overlay"></div>
                </div>
                <div className="text-container">
                  <h3 className="feature-name">{selectedFeature.title}</h3>
                  <div className="description-container">
                    <p className="feature-description">{selectedFeature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature Selection Panel */}
          <div className="feature-selector">
            <div className="selector-header">
              <h4 className="selector-title">Explore The Elements</h4>
              <div className="lotus-decoration">
                <div className="lotus-petal"></div>
                <div className="lotus-petal"></div>
                <div className="lotus-petal"></div>
              </div>
            </div>
            <div className="feature-buttons">
              {pagodaData.map((feature) => (
                <FeatureButton
                  key={feature.id}
                  feature={feature}
                  isActive={selectedFeature.id === feature.id}
                  onClick={() => setSelectedFeature(feature)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Architecture;