import React from "react";

export default function Title1() {
  const bgStyle = {
    backgroundImage: `radial-gradient(ellipse at center,
      rgba(255, 248, 220, 0.95) 0%,
      rgba(255, 223, 85, 0.6) 40%,
      rgba(255, 185, 15, 0.85) 75%,
      rgba(204, 140, 0, 1) 100%)`,
    minHeight: "100vh",
    padding: "60px 0",
    color: "#3b2a10",
  };

  const bgAccordian = {
    backgroundColor: "rgba(44, 26, 12, 0.85)",
    color: "white",
    padding: "2rem",
    borderRadius: "12px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
  };

  return (
    <div style={bgStyle}>
      <div className="container mt-5">
        {/* First Layout - Enhanced */}
        <section className="mb-5" style={{}}>
          <h2
            className="text-center mb-4 display-4 fw-bold"
            style={{
              color: "#5a3e1b",
              fontSize: "2.5rem",

              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
              letterSpacing: "1px",
            }}
          >
            The Origin of the Pagoda
          </h2>
          <div
            className="row align-items-center p-4 rounded-4 shadow-lg"
            style={{
              border: "2px solid #d4a762",
              background: "rgba(255, 248, 220, 0.9)",
            }}
          >
            <div className="col-md-6 pe-4">
              <img
                src="/assets/images/12.JPG"
                alt="Pagoda"
                className="img-fluid rounded-3 shadow"
                style={{
                  border: "8px solid #f0e6d2",
                  boxShadow: "0 5px 15px rgba(0,0,0,0.2)",
                }}
              />
            </div>
            <div className="col-md-6 ps-4">
              <div
                className="p-3"
                style={{
                  borderLeft: "3px solid #d4a762",
                  background: "rgba(255,248,220,0.3)",
                }}
              >
                <p
                  className="lead mb-4"
                  style={{
                    fontSize: "1.25rem",
                    lineHeight: "1.8",
                    color: "#5a3e1b",
                  }}
                >
                  The Shwedagon Pagoda is believed to have been constructed over
                  2,600 years ago, making it the oldest pagoda in the world. It
                  is a magnificent stupa located in Yangon, Myanmar, and is
                  revered as one of the most sacred Buddhist sites in the
                  country.
                </p>
                <button
                  className="btn btn-warning px-4 py-2 rounded-pill fw-bold"
style={{
  background: "#eab308", /* Tailwind amber-500 */
  border: "none",
  boxShadow: "0 4px 8px rgba(44, 26, 12, 0.85)",
}}
                >
                  Read More
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Second Layout - Accordion */}
        <section className="mb-5" style={bgAccordian}>
          <h2
            className="text-center mb-4 display-4 fw-bold"
            style={{
              color: "#f8d485",
              fontSize: "2.5rem",

              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Historical Milestones
          </h2>
          <div className="accordion" id="historyAccordion">
            {[1, 2, 3, 4, 5].map((num) => (
              <div
                className="accordion-item border-0 mb-3 rounded-3 overflow-hidden"
                key={num}
                style={{
                  boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
                }}
              >
                <h2 className="accordion-header" id={`heading${num}`}>
                  <button
                    className={`accordion-button ${
                      num !== 1 ? "collapsed" : ""
                    } fw-bold`}
                    type="button"
                    style={{
                      background: "linear-gradient(to right, #8b5a2b, #a67c52)",
                      color: "#fff8dc",
                      fontSize: "1.1rem",
                    }}
                    data-bs-toggle="collapse"
                    data-bs-target={`#collapse${num}`}
                    aria-expanded={num === 1 ? "true" : "false"}
                    aria-controls={`collapse${num}`}
                  >
                    Historical Event {num}
                  </button>
                </h2>
                <div
                  id={`collapse${num}`}
                  className={`accordion-collapse collapse ${
                    num === 1 ? "show" : ""
                  }`}
                  aria-labelledby={`heading${num}`}
                  data-bs-parent="#historyAccordion"
                >
                  <div
                    className="accordion-body"
                    style={{
                      background: "rgba(255, 248, 220, 0.9)",
                    }}
                  >
                    <div className="row align-items-center">
                      <div className="col-md-6 pe-4">
                        <img
                          src="/assets/images/12.JPG"
                          alt={`History ${num}`}
                          className="img-fluid rounded-3 shadow"
                          style={{
                            border: "5px solid #d4a762",
                          }}
                        />
                      </div>
                      <div className="col-md-6 ps-4">
                        <p
                          className="lead"
                          style={{
                            color: "#5a3e1b",
                            lineHeight: "1.8",
                          }}
                        >
                          This is the description of historical milestone {num}.
                          The pagoda's history reflects centuries of devotion,
                          restoration, and reverence. It survived earthquakes,
                          wars, and remains a symbol of Buddhist heritage.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
        <section className="gallery-section">
          <h2
            className="text-center mb-5 display-3 fw-bold"
            style={{
              color: "#5a3e1b",
              fontSize: "2.5rem",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Historical Gallery
          </h2>

          <div className="row g-4">
            {[1, 2, 3, 4, 5, 6].map((card) => (
              <div className="col-md-6" key={card}>
                <div
                  className="gallery-card h-100 border-0 shadow-sm overflow-hidden position-relative"
                  style={{
                    borderRadius: "12px",
                    background:
                      "linear-gradient(to bottom, #ffffff 0%, #f8f4e8 100%)",
                    border: "1px solid rgba(224, 208, 177, 0.5)",
                    cursor: "pointer",
                    transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                    minHeight: "350px", // Set minimum card height
                  }}
                >
                  <div className="row g-0 h-100">
                    {/* Image Column with Aspect Ratio Container */}
                    <div className="col-md-5 position-relative">
                      <div
                        className="ratio ratio-1x1 h-100"
                        style={{
                          overflow: "hidden",
                          position: "relative",
                        }}
                      >
                        <img
                          src={`/assets/images/${card}.JPG`}
                          className="position-absolute w-100 h-100 object-cover"
                          alt={`Historical Moment ${card}`}
                          style={{
                            transition:
                              "transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)",
                            top: "50%",
                            left: "50%",
                            transform: "translate(-50%, -50%)",
                            minWidth: "100%",
                            minHeight: "100%",
                          }}
                        />
                        <div className="position-absolute bottom-0 start-0 p-3">
                          <span className="badge bg-warning text-dark px-3 py-2">
                            Era {card}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Text Column */}
                    <div className="col-md-7 d-flex flex-column p-4">
                      <h3 className="fw-bold mb-3" style={{ color: "#8b5a2b" }}>
                        Significant Event #{card}
                      </h3>
                      <div
                        className="flex-grow-1 overflow-auto"
                        style={{ maxHeight: "250px" }}
                      >
                        <p className="mb-0" style={{ color: "#5a3e1b" }}>
                          The Shwedagon Pagoda has witnessed countless
                          historical moments throughout its 2,600-year
                          existence. This particular event marked a turning
                          point in the pagoda's architectural evolution, when
                          master craftsmen from across Southeast Asia
                          collaborated to reinforce the golden stupa. The
                          intricate details added during this period reflect the
                          fusion of Mon and Pyu artistic traditions, creating
                          the distinctive layered umbrella crown we see today.
                          Records from this era describe elaborate ceremonies
                          attended by royalty from neighboring kingdoms, all
                          paying homage to this sacred site.
                        </p>
                      </div>
                      <div className="mt-3 text-muted small">
                        <em>
                          Documented in royal chronicles from the Konbaung
                          dynasty
                        </em>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effects */}
                  <style jsx>{`
                    .gallery-card:hover {
                      transform: translateY(-5px);
                      box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
                      border-color: rgba(210, 180, 140, 0.8);
                    }

                    .gallery-card:hover img {
                      transform: translate(-50%, -50%) scale(1.05);
                    }

                    .gallery-card:hover h3 {
                      text-decoration: underline;
                      text-decoration-color: #d4a017;
                      text-underline-offset: 4px;
                    }
                  `}</style>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
