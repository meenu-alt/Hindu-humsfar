import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaPhone,
  FaEnvelope,
} from "react-icons/fa";
import logo from "../home/images/logo.png";
import { IoIosCall } from "react-icons/io";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <div className="row">
          <div className=" col-sm-12 col-md-4 col-lg-3 col-xl-3">
            <div className="footer-section logo-social">
              <div className="footer-logo">
                <img src={logo} alt="Logo" className="img-fluid" />
              </div>
              <p className="tagline">
                Your journey to love starts here. Find a partner who truly
                understands and values you. Begin your happily ever after with
                us.
              </p>
              <div className="social-icons icok d-none d-lg-block">
                <FaFacebookF />
                <FaInstagram />
                <FaYoutube />
                <FaTwitter />
              </div>
            </div>
          </div>
          <div className="col-6 col-md-4 col-lg-2 col-xl-2">
            <div className="footer-section">
              <h4>Company</h4>
              <ul>
                <li>Home</li>
                <li>About Us</li>
                <li>How it Works</li>
                <li>Success Stories</li>
                <li>Contact Us</li>
              </ul>
            </div>
          </div>
          <div className=" col-6 col-md-4 col-lg-2 col-xl-2">
            <div className="footer-section">
              <h4>Popular Categories</h4>
              <ul>
                <li>Brides</li>
                <li>Grooms</li>
                <li>Community-Based Matches</li>
                <li>City-Wise Matches</li>
              </ul>
            </div>
          </div>
          <div className=" col-5 col-md-4 col-lg-2 col-xl-2">
            <div className="footer-section">
              <h4>Help & Support</h4>
              <ul>
                <li>FAQ</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
              </ul>
            </div>
          </div>
          <div className=" col-7 col-md-4 col-lg-3 col-xl-3">
            <div className="footer-section ">
              <h4>Contact Details</h4>
              <p>
                <IoIosCall /> +91 8088010188
              </p>
              <p>
                <IoMdMail /> Hinduhumsafar@Gmail.Com
              </p>
            </div>
          </div>

          <div className=" col-sm-12 col-md-4 col-lg-3 col-xl-3  d-block d-lg-none">
            <div className="footer-section logo-social">
              <div className="footer-social">
              <h4>Social Media Skils</h4>
                <div className="social-icons">
                  <FaFacebookF />
                  <FaInstagram />
                  <FaYoutube />
                  <FaTwitter />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        © 2019–2025. All Rights Reserved By Hindu Humsafar
      </div>

      <style>{`
        .footer {
          background-color: #FCECEF;
          color: #000;
          font-family: Arial, sans-serif;
        }
          .icok svg {
    vertical-align: middle;
    margin-right: 20px;
}
 .footer-section h4 {
        font-weight: 600;
    }
        .footer-top {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 40px 20px;
          max-width: 1200px;
          margin: auto;
        }

        .footer-section {
          flex: 1 1 180px;
          margin: 20px;
        }

        .footer-logo {
          width: 120px;
          margin-bottom: 15px;
        }

        .tagline {
          font-size: 14px;
          margin: 10px 0;
        }

        .social-icons {
          display: flex;
          gap: 10px;
          font-size: 18px;
          margin-top: 10px;
        }

        .footer-section h4 {
          font-size: 16px;
          margin-bottom: 10px;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section ul li {
          margin-bottom: 6px;
          font-size: 14px;
          cursor: pointer;
        }

        .contact p {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          margin: 8px 0;
        }

        .footer-bottom {
          background-color: #E53D5C;
          text-align: center;
          padding: 15px;
          color: white;
          font-size: 14px;
        }

        @media (max-width: 768px) {
          .footer-top {
            flex-direction: column;
            align-items: center;
          }

          .footer-section {
            text-align: center;
            margin: 20px 0;
          }

          .social-icons {
            justify-content: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
