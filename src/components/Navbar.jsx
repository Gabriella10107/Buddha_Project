import React from "react";

function Navbar() {
  return (
    <>
      <div>
        <div className="site-mobile-menu">
          <div className="site-mobile-menu-header">
            <div className="site-mobile-menu-close">
              <span className="icofont-close js-menu-toggle" />
            </div>
          </div>
          <div className="site-mobile-menu-body" />
        </div>
        <img
          src="/assets/images/top-left.png"
          className="corner-img top-left"
          alt="Decoration"
        />
        <img
          src="/assets/images/top-right.png"
          className="corner-img top-right"
          alt="Decoration"
        />
        <img
          src="/assets/images/bottom-left.png"
          className="corner-img bottom-left"
          alt="Decoration"
        />
        <img
          src="/assets/images/bottom-right.png"
          className="corner-img bottom-right"
          alt="Decoration"
        />
        <nav
          className="site-nav py-3"
          style={{
            backgroundColor: "rgba(44, 26, 12, 0.85)",
            color: "white",
            position: "fixed",
          }}
        >
          <div className="container">
            <div className="site-navigation d-flex align-items-center justify-content-between">
              {/* Logo + Title */}
              <a
                href="/"
                className="logo d-flex align-items-center text-decoration-none"
              >
                <img
                  src="/assets/images/logo.png"
                  alt="Five Great Buddha Logo"
                  className="img-fluid ml-4"
                  style={{ height: 55, width: 100 }}
                />
                <span
                  className="fs-4 fw-bold"
                  style={{ fontFamily: '"Srisakdi", serif', color: "#D4AF37" }}
                >
                  {/* Five Great Buddha */}
                </span>
              </a>
              {/* Navigation Menu */}
              <ul
                className="js-clone-nav d-none d-lg-flex align-items-center site-menu m-0"
                style={{ gap: 20 }}
              >
                <li className="active">
                  <a href="/" className="nav-link text-white">
                    Home
                  </a>
                </li>
                <li>
                  <a href="news" className="nav-link ">
                    News
                  </a>
                </li>
                <li>
                  <a href="/events" className="nav-link">
                    Events
                  </a>
                </li>
                <li class="nav-item dropdown">
                  <a
                    class="nav-link dropdown-toggle"
                    href="#"
                    id="historyDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    History
                  </a>
                  <ul class="dropdown-menu" aria-labelledby="historyDropdown">
                    <li>
                      <a
                        class="dropdown-item bg-transparent text-dark hover-bg-warning"
                        href="/history/title-1"
                      >
                        Title-1
                      </a>
                    </li>
                    <li>
                      <a
                        class="dropdown-item bg-transparent text-dark hover-bg-warning"
                        href="/history/title-2"
                      >
                        Title-2
                      </a>
                    </li>
                  </ul>
                </li>

                <li>
                  <a href="/architecture" className="nav-link">
                    Architecture
                  </a>
                </li>
                <li>
                  <a href="/gallery" className="nav-link">
                    Gallery
                  </a>
                </li>
                <li>
                  <a href="/about" className="nav-link">
                    About
                  </a>
                </li>
                <li>
                  <a href="/contact" className="nav-link">
                    Contact Us
                  </a>
                </li>
              </ul>
              {/* Mobile Burger Icon */}
              <a
                href="#"
                className="burger ml-auto float-right site-menu-toggle js-menu-toggle d-inline-block d-lg-none light"
                style={{ marginRight: 20 }} // Move button to the left
              >
                <span />
              </a>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
}
export default Navbar;
