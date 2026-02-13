import React from "react";

function Footer() {
  return (
    <>
      <div
        className="site-footer"
        style={{ backgroundColor: "rgba(44, 26, 12, 0.9)", color: "white" }}
      >
        <div className="inner">
          <div className="container text-center">
            <div className="row">
              {/* About Column */}
              <div className="col-md-4">
                <div className="widget">
                  <h3>About</h3>
                  <p>
                    The Five Great Buddha Pagoda is a symbol of peace and wisdom
                    in Myanmar.
                  </p>
                </div>
              </div>
              {/* Quick Links */}
              <div className="col-md-4">
                <div className="widget">
                  <h3>Quick Links</h3>
                  <ul className="links">
                    <li>
                      <a href="news">News</a>
                    </li>
                    <li>
                      <a href="events">Events</a>
                    </li>
                    <li>
                      <a href="history">History</a>
                    </li>
                    <li>
                      <a href="architecture">Architecture</a>
                    </li>
                    <li>
                      <a href="gallery">Gallery</a>
                    </li>
                    <li>
                      <a href="about">About</a>
                    </li>
                    <li>
                      <a href="contact">Contact Us</a>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Contact */}
              <div className="col-md-4">
                <div className="widget">
                  <h3>Contact</h3>
                  <ul className="links">
                    <li>
                      <a href="#">info@fivegreatbuddha.org</a>
                    </li>
                    <li>Five Greate Buddha, Yangon</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="inner dark">
          <div className="container">
            <p className="text-center">
              © Five Great Buddha Pagoda. All Rights Reserved.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Footer;
