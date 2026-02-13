import React from "react";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

import Home from "./pages/Home.jsx";
import News from "./pages/news/News.jsx";
import NewsDetails from "./pages/news/NewsDetails.jsx";


import Events from "./pages/event/Events.jsx";
import EventsDetails from "./pages/event/EventsDetails.jsx";
import Title1 from "./pages/history/Title-1.jsx";
import Title2 from "./pages/history/Title2.jsx";
import Architecutre from "./pages/Architecutre.jsx"; // Importing the Architecutre component
import Gallery from "./pages/Gallery.jsx"; // Importing the Gallery component
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx"; // Importing the Contact component
import Map from "./pages/Map.jsx";
import MapDetails from "./pages/MapDetails.jsx";


function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/" element={<Navigate to="/home" replace />} /> */}
        <Route path="/news" element={<News />} />
        <Route path="/news/newsdetails/:id" element={<NewsDetails />} />

        <Route path="/events" element={<Events />} />
        <Route path="/events/eventsdetails/:id" element={<EventsDetails />} />

        <Route path="/about" element={<About />} />
        <Route path="/map" element={<Map />} />
        <Route path="/map-details" element={<MapDetails />} />

        <Route path="/history/title-1" element={<Title1 />} />
        <Route path="/history/title-2" element={<Title2 />} />

        <Route path="/architecture" element={<Architecutre />} /> {/* Route for Architecutre page */}
        <Route path="/gallery" element={<Gallery />} /> {/* Route for Gallery page */}
        {/* Add more routes as needed */}
        <Route path="/contact" element={<Contact />} /> {/* Route for Contact page */}
        
        {/* Redirect any unmatched routes to Home */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;
