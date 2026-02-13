import React from "react";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaShareAlt,
} from "react-icons/fa";
import { FiSend } from "react-icons/fi";
import { FaXTwitter, FaFacebook, FaInstagram } from "react-icons/fa6";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <div className="contact-page-wrapper">
      {/* Decorative elements */}
      <div className="decorative-circle-1"></div>
      <div className="decorative-circle-2"></div>
      <div className="decorative-blur-1"></div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="contact-container"
      >
        {/* Header Section */}
        <header className="contact-header">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* <h6 className="section-subtitle">GET IN TOUCH</h6> */}
            <h1 className="section-title mt-4" >Contact Our Team</h1>
            {/* <div className="header-divider"></div> */}
            <p className="header-description mb-5">
              We're here to help and answer any questions you might have. We
              look forward to hearing from you.
            </p>
          </motion.div>
        </header>

        {/* Contact Cards Grid */}
        <div className="contact-grid">
          {/* Email Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="contact-card email-card"
          >
            <div className="card-icon-wrapper">
              <div className="card-icon-bg"></div>
              <FaEnvelope className="card-icon" />
            </div>
            <h3 className="card-title">Email Us</h3>
            <div className="card-content">
              {/* <a href="mailto:support@pagodadata.com" className="contact-link">
                support@pagodadata.com
              </a> */}
              <a href="mailto:info@pagodadata.com" className="contact-link">
                info@pagodadata.com
              </a>
            </div>
            <div className="card-hover-indicator"></div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="contact-card phone-card"
          >
            <div className="card-icon-wrapper">
              <div className="card-icon-bg"></div>
              <FaPhoneAlt className="card-icon" />
            </div>
            <h3 className="card-title">Call Us</h3>
            <div className="card-content">
              <a href="tel:+18001234567" className="contact-link">
                +1 (800) 123-4567
              </a>
              <a href="tel:+15559876543" className="contact-link">
                +1 (555) 987-6543
              </a>
            </div>
            <div className="card-hover-indicator"></div>
          </motion.div>

          {/* Location Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="contact-card location-card"
          >
            <div className="card-icon-wrapper">
              <div className="card-icon-bg"></div>
              <FaMapMarkerAlt className="card-icon" />
            </div>
            <h3 className="card-title">Our Location</h3>
            <div className="card-content">
              <p>123 Data Pagoda Way</p>
              <p>San Francisco, CA 94107</p>
            </div>
            <div className="card-hover-indicator"></div>
          </motion.div>

          {/* Social Card */}
          <motion.div
            whileHover={{ y: -8 }}
            className="contact-card social-card"
          >
            <div className="card-icon-wrapper">
              <div className="card-icon-bg"></div>
              <FaShareAlt className="card-icon" />
            </div>
            <h3 className="card-title">Social Media</h3>
            <div className="d-flex justify-content-center social-icons mt-5">
              <a href="#" className="social-icon" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="#" className="social-icon" aria-label="Facebook">
                <FaFacebook />
              </a>

              <a href="#" className="social-icon" aria-label="Twitter">
                <FaXTwitter />
              </a>
            </div>
            <div className="card-hover-indicator"></div>
          </motion.div>
        </div>

        {/* Contact Form Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="contact-form-section"
        >
          <div className="form-container">
            <h2 className="form-title">Send Us a Message</h2>
            <p className="form-subtitle">
              Fill out the form below and our team will get back to you within
              24 hours.
            </p>

            <form className="contact-form">
              <div className="form-row">
                <div className="form-group">
                  <input
                    type="text"
                    id="name"
                    className="form-input"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="name" className="form-label">
                    Your Name
                  </label>
                  <div className="input-underline"></div>
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    id="email"
                    className="form-input"
                    placeholder=" "
                    required
                  />
                  <label htmlFor="email" className="form-label">
                    Your Email
                  </label>
                  <div className="input-underline"></div>
                </div>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  id="subject"
                  className="form-input"
                  placeholder=" "
                  required
                />
                <label htmlFor="subject" className="form-label">
                  Subject of Your Message
                </label>
                <div className="input-underline"></div>
              </div>

              <div className="form-group">
                <textarea
                  id="message"
                  className="form-textarea"
                  placeholder=" "
                  rows="5"
                  required
                ></textarea>
                <label htmlFor="message" className="form-label">
                  Your Message
                </label>
                <div className="textarea-underline"></div>
              </div>

              <button type="submit" className="submit-button">
                <span>Send Message</span>
                <FiSend className="button-icon" />
                <div className="button-hover-effect"></div>
              </button>
            </form>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
