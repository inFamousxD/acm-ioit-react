import React from "react";
import './Footer.css';


const Footer = () => {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="sec about__sec">
            <h2>About ACM</h2>
            <p>
              ACM IOIT Student Chapter was founded on 2019, with a vision to
              carry forward ACM’s international intentions on a grass root level
              at AISSMS’ Institute of Information Technology.
            </p>

            <ul className="sci">
              <li>
                <a href="https://www.facebook.com/ioit.acm">
                  <i class="fab fa-facebook-f"></i>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/ioit.acm/">
                  <i class="fab fa-instagram"></i>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/IOIT_ACM">
                  <i class="fab fa-twitter"></i>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/company/ioit-acm">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </li>
            </ul>
          </div>

          <div className="sec contact">
            <h2>Contact Us</h2>
            <ul className="info">
              <li>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
                <span>
                  AISSMS IOIT ACM Student Chapter. RB Motilal Kennedy Road, near
                  RTO, Sangamvadi, Pune-411001
                </span>
              </li>
              {/* <li>
                <span>
                  <i className="fas fa-map-marker-alt"></i>
                </span>
              </li> */}
              <li>
                <span>
                  <i className="far fa-envelope"></i>
                </span>
                <p>
                  <a href="mailto:support@ioit.acm.org">support@ioit.acm.org</a>
                </p>
              </li>
            </ul>
          </div>

          <div className="sec quickLinks">
            <h2>Quick Links</h2>
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="https://dl.acm.org/">ACM Digital Library</a>
              </li>
              <li>
                <a href="#">Membership</a>
              </li>
            </ul>
          </div>

          {/* <img src="http://localhost:3000/static/media/acm2.01084429.png" height="175px" width="175px"></img> */}

        </div>
      </footer>
    </div>
  );
};

export default Footer;
