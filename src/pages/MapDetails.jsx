import React, { useState, useEffect } from 'react';

// Main App Component
const App = () => {
  return (
    <div className="min-h-screen bg-gray-100 font-inter antialiased">
      {/* Header Section */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white p-6 shadow-lg rounded-b-xl">
        <div className="container mx-auto">
          <h1 className="text-4xl font-extrabold text-center tracking-tight drop-shadow-md">
            MEP System Overview
          </h1>
          <p className="mt-2 text-center text-blue-100 text-lg">
            Detailed insights into Mechanical, Electrical, and Plumbing Systems
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        {/* First Layout: Interactive Design with Points */}
        <section className="mb-12">
          <MEPDesignLayout />
        </section>

        {/* Second Layout: Image and Text Side-by-Side */}
        <section>
          <ImageTextLayout />
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-gray-300 p-6 text-center rounded-t-xl">
        <p className="text-sm">&copy; 2024 MEP Solutions. All rights reserved.</p>
        <p className="text-xs mt-1">Designed with precision and care.</p>
      </footer>
    </div>
  );
};

// MEPDesignLayout Component
const MEPDesignLayout = () => {
  // State to manage the currently selected point and modal visibility
  const [selectedPoint, setSelectedPoint] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Dummy data for interactive points on the design image
  const points = [
    {
      id: 1,
      x: '20%', // X-coordinate percentage relative to the image
      y: '30%', // Y-coordinate percentage relative to the image
      title: 'HVAC System',
      description: 'The Heating, Ventilation, and Air Conditioning (HVAC) system is crucial for maintaining indoor air quality and thermal comfort. It includes air handlers, ductwork, and control systems.',
      imageUrl: '/assets/images/Buddha1.jpg',
    },
    {
      id: 2,
      x: '55%',
      y: '25%',
      title: 'Electrical Distribution',
      description: 'This section details the main electrical panel, circuit breakers, and wiring paths throughout the building, ensuring safe and efficient power delivery.',
      imageUrl: 'https://placehold.co/100x100/FFD700/000000?text=Elec',
    },
    {
      id: 3,
      x: '70%',
      y: '60%',
      title: 'Plumbing Network',
      description: 'The plumbing network comprises water supply lines, drainage pipes, and fixtures for fresh water and waste removal, designed for hygiene and efficiency.',
      imageUrl: 'https://placehold.co/100x100/98FB98/000000?text=Plumb',
    },
    {
      id: 4,
      x: '30%',
      y: '75%',
      title: 'Fire Suppression',
      description: 'An integrated fire suppression system with sprinklers, alarms, and emergency lighting, designed to protect occupants and property in case of a fire incident.',
      imageUrl: 'https://placehold.co/100x100/FF6347/000000?text=Fire',
    },
  ];

  // Function to handle point click
  const handlePointClick = (point) => {
    setSelectedPoint(point);
    setIsModalOpen(true);
  };

  // Function to close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedPoint(null);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-xl relative">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center mt-5" >Interactive MEP Design</h2>
      <p className="text-gray-600 mb-8 text-center">Click on the points below to learn more about each system component.</p>

      {/* Container for the image and interactive points */}
      <div className="relative w-full max-w-4xl mx-auto border-4 border-blue-200 rounded-lg overflow-hidden" >
        {/* Placeholder image for the MEP design */}
        <img
          src="https://i.pinimg.com/736x/3d/70/31/3d70319d55140b59ee988e0d3fb0714a.jpg"
          alt="MEP System Design Layout"
          className="w-full h-auto rounded-md"
        />

        {/* Render interactive points */}
        {points.map((point) => (
          <div
            key={point.id}
            className="absolute bg-blue-500 rounded-full w-6 h-6 flex items-center justify-center cursor-pointer
                       hover:bg-blue-700 transition-all duration-300 transform hover:scale-125
                       focus:outline-none focus:ring-4 focus:ring-blue-300"
            style={{ left: point.x, top: point.y, transform: 'translate(-50%, -50%)' }}
            onClick={() => handlePointClick(point)}
            aria-label={`Details for ${point.title}`}
            role="button"
            tabIndex="0"
          >
            <span className="text-white text-xs font-semibold">{point.id}</span>
          </div>
        ))}
      </div>

      {/* Render the modal if open */}
      {isModalOpen && selectedPoint && (
        <PointModal pointData={selectedPoint} onClose={closeModal} />
      )}
    </div>
  );
};

// ImageTextLayout Component
const ImageTextLayout = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-xl">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Core MEP System Elements</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        {/* Image Section */}
        <div className="w-full md:w-1/2 flex-shrink-0">
          <img
            src="https://placehold.co/600x400/D1E9FF/000000?text=MEP+Components"
            alt="Various MEP Components"
            className="w-full h-auto object-cover rounded-lg shadow-md border-2 border-indigo-200"
          />
        </div>

        {/* Text Section */}
        <div className="w-full md:w-1/2">
          <h3 className="text-2xl font-semibold text-gray-700 mb-4">Integrated Building Solutions</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Mechanical, Electrical, and Plumbing (MEP) systems are the backbone of any modern building,
            providing essential services that ensure occupant comfort, safety, and operational efficiency.
            These systems are intricately designed and integrated to work harmoniously,
            from climate control to power distribution and water management.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our comprehensive approach to MEP design focuses on sustainability, energy efficiency,
            and long-term reliability. We leverage advanced technologies and industry best practices
            to deliver solutions that meet the unique demands of each project, ensuring optimal performance
            and reduced environmental impact. Understanding these components is key to a well-functioning infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
};

// PointModal Component
const PointModal = ({ pointData, onClose }) => {
  // Prevent scrolling when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    // Modal Overlay
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50 animate-fade-in"
      onClick={onClose} // Close modal when clicking outside
    >
      {/* Modal Content */}
      <div
        className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full transform scale-95 md:scale-100 transition-all duration-300 relative"
        onClick={(e) => e.stopPropagation()} // Prevent modal from closing when clicking inside
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 transition-colors duration-200"
          aria-label="Close modal"
        >
          {/* Using a simple X icon for close */}
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>

        <h3 className="text-3xl font-bold text-gray-800 mb-4 text-center">{pointData.title}</h3>
        <div className="flex flex-col items-center gap-4">
          {/* Small Image */}
          <img
            src={pointData.imageUrl}
            alt={pointData.title}
            className="w-24 h-24 object-cover rounded-full border-4 border-blue-400 shadow-md"
            onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/100x100/CCCCCC/000000?text=No+Image'; }}
          />
          {/* Description Text */}
          <p className="text-gray-700 text-lg leading-relaxed text-center">{pointData.description}</p>
        </div>
        <div className="mt-6 flex justify-center">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md
                       hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-4 focus:ring-blue-300"
          >
            Got It!
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
