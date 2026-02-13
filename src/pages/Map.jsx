import React from "react";
import { useNavigate } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate("/map-details");
  };

  return (
    <div className="container-fluid px-0 my-0">
      <div className="row g-0">
        <div className="col-12">
          {/* Map Container with Pagoda-inspired design */}
          <div
            className="position-relative"
            style={{
              borderRadius: "0",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(204, 140, 0, 0.5)",
              border: "8px solid #D4A017",
              position: "relative",
            }}
          >
            {/* Golden border effect */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                right: 0,
                height: "15px",
                background: "linear-gradient(90deg, #D4A017, #FFD700, #D4A017)",
                zIndex: 1,
              }}
            ></div>

            {/* Wrapper div to hide scrollbars */}
            <div style={{
              width: "100%",
              height: "600px",
              
            }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d891.3165561613393!2d96.15011071882755!3d16.80290374153083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30c1eb0037bb8417%3A0x69d68e99a3fa6ac0!2z4YCA4YC84YCu4YC44YCE4YCr4YC44YCA4YC84YCu4YC44YCG4YCv4YCQ4YCx4YCs4YCE4YC64YC44YCV4YC84YCK4YC64YC3IOGAmOGAr-GAm-GArOGAuOGAhOGAq-GAuOGAhuGAsOGAheGAseGAkOGAruGAkOGAseGArOGAuuGAmeGAvOGAkOGAug!5e1!3m2!1sen!2smm!4v1750744812042!5m2!1sen!2smm"
                width="100%"
                height="600"
                style={{
                  border: 0,
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  pointerEvents: "auto"
                }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Shwedagon Pagoda Map"
              />
            </div>

            {/* Decorative elements */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "15px",
                background: "linear-gradient(90deg, #D4A017, #FFD700, #D4A017)",
                zIndex: 1,
              }}
            ></div>

            {/* Corner decorations */}
            <div
              className="position-absolute top-0 start-0"
              style={{
                width: "40px",
                height: "40px",
                borderLeft: "4px solid #D4A017",
                borderTop: "4px solid #D4A017",
                zIndex: 1,
              }}
            ></div>
            <div
              className="position-absolute top-0 end-0"
              style={{
                width: "40px",
                height: "40px",
                borderRight: "4px solid #D4A017",
                borderTop: "4px solid #D4A017",
                zIndex: 1,
              }}
            ></div>
            <div
              className="position-absolute bottom-0 start-0"
              style={{
                width: "40px",
                height: "40px",
                borderLeft: "4px solid #D4A017",
                borderBottom: "4px solid #D4A017",
                zIndex: 1,
              }}
            ></div>
            <div
              className="position-absolute bottom-0 end-0"
              style={{
                width: "40px",
                height: "40px",
                borderRight: "4px solid #D4A017",
                borderBottom: "4px solid #D4A017",
                zIndex: 1,
              }}
            ></div>
          </div>

          {/* Button with pagoda-inspired styling - centered below map */}
          <div
            className="text-center my-4"
            style={{
              position: "absolute",
              bottom: "20px",
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2,
              width: "100%",
            }}
          >
            <button
              className="btn px-4 py-3 fw-bold"
              onClick={handleViewDetails}
              style={{
                background: "rgba(44, 26, 12, 0.85)",
                border: "none",
                borderRadius: "8px",
                color: "white",
                fontSize: "1.1rem",
                boxShadow: "0 4px 15px rgba(204, 140, 0, 0.6)",
                transition: "all 0.3s ease",
                position: "relative",
                overflow: "hidden",
              }}
              onMouseEnter={(e) => {
                e.target.style.transform = "translateY(-3px)";
                e.target.style.boxShadow = "0 7px 20px rgba(204, 140, 0, 0.8)";
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = "translateY(0)";
                e.target.style.boxShadow = "0 4px 15px rgba(204, 140, 0, 0.6)";
              }}
            >
              View Map Details
            </button>
          </div>
        </div>
      </div>

      {/* Add custom scrollbar styling */}
      <style>{`
        body {
          background-image: radial-gradient(ellipse at center,
            rgba(255, 248, 220, 0.95) 0%,
            rgba(255, 223, 85, 0.6) 40%,
            rgba(255, 185, 15, 0.85) 75%,
            rgba(204, 140, 0, 1) 100%);
          background-attachment: fixed;
          min-height: 100vh;
          margin: 0;
          padding: 0;
        }
       
        }
      `}</style>
    </div>
  );
}