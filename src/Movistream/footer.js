import React, { useEffect, useRef, useState } from 'react';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import './footer.css';
const Footer = () => {
  const footerRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1,
      }
    );

    if (footerRef.current) {
      observer.observe(footerRef.current);
    }

    return () => {
      if (footerRef.current) {
        observer.unobserve(footerRef.current);
      }
    };
  }, []);

  return (
    <section className="footer-section">
      <div className="footer-container">
        <div className="footer-social">
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer"><FaFacebook /></a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer"><FaInstagram /></a>
          <a href="https://x.com/" target="_blank" rel="noreferrer"><FaTwitter /></a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer"><FaYoutube /></a>
        </div>

        <div className="footer" ref={footerRef}>
          <p className={`footer-copy ${visible ? 'animate' : ''}`}>
            © 2025 Movistream, Inc.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Footer;
