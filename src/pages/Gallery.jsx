// src/components/PagodaGallery.jsx
import React, { useState } from "react";

function Gallery() {
  const [activeCategory, setActiveCategory] = useState("all");

  // Sample gallery data
  const galleryData = [
    {
      id: 1,
      title: "Shwedagon Pagoda",
      category: "activities",
      imageUrl: "./assets/images/1.JPG",
      description: "Golden sunrise at Shwedagon Pagoda in Yangon",
    },
    {
      id: 2,
      title: "Kinkaku-ji Golden Pavilion",
      category: "activities",
      imageUrl: "./assets/images/1.JPG",
      description: "The famous Golden Pavilion in Kyoto",
    },
    {
      id: 3,
      title: "Bagan Temples",
      category: "festivals",
      imageUrl: "./assets/images/1.JPG",
      description: "Hot air balloons over Bagan temples at dawn",
    },
    {
      id: 4,
      title: "Toji Pagoda",
      category: "events",
      imageUrl: "./assets/images/1.JPG",
      description: "Toji Pagoda illuminated at night in Kyoto",
    },
    {
      id: 5,
      title: "Wat Arun",
      category: "festivals",
      imageUrl: "./assets/images/1.JPG",
      description: "The Temple of Dawn in Bangkok",
    },
    {
      id: 6,
      title: "Hsinbyume Pagoda",
      category: "activities",
      imageUrl: "./assets/images/1.JPG",
      description: "Whitewashed pagoda in Mingun",
    },
    {
      id: 7,
      title: "Tianning Temple Pagoda",
      category: "other",
      imageUrl: "./assets/images/1.JPG",
      description: "Tallest pagoda in the world in Changzhou",
    },
    {
      id: 8,
      title: "Horyuji Pagoda",
      category: "events",
      imageUrl: "./assets/images/1.JPG",
      description: "Oldest wooden pagoda in Japan",
    },
    {
      id: 9,
      title: "Linh Ung Pagoda",
      category: "other",
      imageUrl: "./assets/images/1.JPG",
      description: "Giant Buddha statue overlooking Da Nang",
    },
    {
      id: 10,
      title: "Sule Pagoda",
      category: "festivals",
      imageUrl: "./assets/images/1.JPG",
      description: "Ancient pagoda in downtown Yangon",
    },
    {
      id: 11,
      title: "Five-Story Pagoda",
      category: "activities",
      imageUrl: "./assets/images/1.JPG",
      description: "Classic five-story pagoda at Sensoji Temple",
    },
    {
      id: 12,
      title: "Wat Phra That Doi Suthep",
      category: "other",
      imageUrl: "./assets/images/1.JPG",
      description: "Sacred temple overlooking Chiang Mai",
    },
  ];

  const categories = [
    { id: "all", name: "All" },
    { id: "activities", name: "Activities" },
    { id: "festivals", name: "Festivals" },
    { id: "events", name: "Events" },
    { id: "other", name: "Other" },
  ];

  const filteredItems =
    activeCategory === "all"
      ? galleryData
      : galleryData.filter((item) => item.category === activeCategory);

  return (
    <section className="pagoda-gallery">
      <div className="container">
        <div className="section-header text-center mb-5">
          <h2 className="display-4 fw-bold text-gradient mt-5">
            Pagoda Moments
          </h2>
          <p className="lead">
            Explore the beauty and serenity of pagodas through our gallery
          </p>
        </div>

        {/* Category Filter */}
        <div className="row mb-5">
          <div className="col-12">
            <ul className="nav nav-pills justify-content-center">
              {categories.map((category) => (
                <li className="nav-item" key={category.id}>
                  <button
                    className={`nav-link ${
                      activeCategory === category.id ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    {category.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="row g-4 gallery-grid">
          {filteredItems.map((item) => (
            <div
              className="col-12 col-sm-6 col-lg-3 gallery-item"
              key={item.id}
            >
              <div className="card h-100 border-0 shadow-sm hover-effect">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="card-img-top img-fluid"
                  loading="lazy"
                />
                <div className="card-body d-flex flex-column">
                  <h3 className="h5 card-title mb-1">{item.title}</h3>
                  <span className="badge bg-warning bg-gradient mb-2">
                    {categories.find((c) => c.id === item.category)?.name}
                  </span>
                  <p className="card-text text-muted">{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
