import React from "react";
import "./footer.css";
import make_in_india_img from "./images/make_in_india.png";
import { Link } from "react-router-dom";
import { FiMail } from "react-icons/fi";
import { FaPhoneAlt } from "react-icons/fa";
import { FiClock } from "react-icons/fi";
import { BsFacebook } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { BsGoogle } from "react-icons/bs";

function Footer() {
  const screenSize = window.innerWidth;

  if (screenSize < 600) {
    return (
      <footer id="main-footer" className="footer container-fluid">
        <div>
          <div className="footer-head row pt-4">
            <div className="col-12 footer-col footer-head-col text-center">
              <div className="footer-h2 text-center">
                <b>AGROKART</b>
              </div>
              <p class="footer-text-font">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo eget felis facilisis fermentum.
              </p>
              <div className="mt-3 text-center">
                <span className="footer-social-media-icons">
                  <Link className="sm-icons-links" to="">
                    <BsFacebook />
                  </Link>
                </span>
                <span className="footer-social-media-icons">
                  <Link className="sm-icons-links" to="">
                    <BsLinkedin />
                  </Link>
                </span>
                <span className="footer-social-media-icons">
                  <Link className="sm-icons-links" to="">
                    <BsGoogle />
                  </Link>
                </span>
              </div>
            </div>

            <div className="col-12 footer-col footer-head-col mt-4 text-center mb-3">
              <h2 className="footer-h2">
                <b>CUSTOMER SERVICES</b>
              </h2>
              <div className="footer-head-div-2 footer-text-font-mobile mt-0">
                <Link className="cs-links" to="">
                  Contact Us
                </Link>
              </div>
              <div className="footer-head-div-2 footer-text-font-mobile">
                <Link className="cs-links" to="">
                  Customer Service
                </Link>
              </div>
              <div className="footer-head-div-2 footer-text-font-mobile">
                <Link className="cs-links" to="">
                  FAQs
                </Link>
              </div>
              <div className="footer-head-div-2 footer-text-font-mobile">
                <Link className="cs-links" to="">
                  Order & Returns
                </Link>
              </div>
              <div className="footer-head-div-2 footer-text-font-mobile">
                <Link className="cs-links" to="">
                  Consultancy
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-horizontal-line"></div>

          <div className="footer-base row">
            <div className="footer-lower-left col footer-text-font text-center">
              ©2023 AgroKart. All rights reserved
            </div>
          </div>
        </div>
      </footer>
    );
  } else {
    console.log("large screen");
    return (
      <footer id="main-footer" className="footer container-fluid">
        <div>
          <div className="footer-head row">
            <div className="col-md-4 col-sm-6 footer-col footer-head-col">
              <div className="footer-h2">
                <b>AGROKART</b>
              </div>
              <p class="footer-text-font">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
                odio. Quisque volutpat mattis eros. Nullam malesuada erat ut
                turpis. Suspendisse urna nibh, viverra non, semper suscipit,
                posuere a, pede. Donec nec justo eget felis facilisis fermentum.
              </p>
              <div className="mt-3">
                <span className="footer-social-media-icons">
                  <Link className="sm-icons-links" to="">
                    <BsFacebook />
                  </Link>
                </span>
                <span className="footer-social-media-icons">
                  <Link className="sm-icons-links" to="">
                    <BsLinkedin />
                  </Link>
                </span>
                <span className="footer-social-media-icons">
                  <Link className="sm-icons-links" to="">
                    <BsGoogle />
                  </Link>
                </span>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 footer-col footer-head-col">
              <h2 className="footer-h2">
                <b>My ACCOUNT</b>
              </h2>
              <div className="footer-head-div-1">
                <span className="footer-div1-font">
                  <FiMail /> Email:{" "}
                </span>
                <span className="footer-text-font">agrotech@gmail.com</span>
              </div>
              <div className="footer-head-div-1">
                <span className="footer-div1-font">
                  <FaPhoneAlt /> Phone:{" "}
                </span>
                <span className="footer-text-font">9211</span>
              </div>
              <div className="footer-head-div-1">
                <span className="footer-div1-font">
                  <FiClock /> Opening:{" "}
                </span>
                <span className="footer-text-font">24/7</span>
              </div>
            </div>

            <div className="col-md-4 col-sm-6 footer-col footer-head-col">
              <h2 className="footer-h2">
                <b>CUSTOMER SERVICES</b>
              </h2>
              <div className="footer-head-div-2 footer-text-font mt-0">
                <Link className="cs-links" to="">
                  Contact Us
                </Link>
              </div>
              <div className="footer-head-div-2 footer-text-font">
                <Link className="cs-links" to="">
                  Customer Service
                </Link>
              </div>
              <div className="footer-head-div-2 footer-text-font">
                <Link className="cs-links" to="">
                  FAQs
                </Link>
              </div>
              <div className="footer-head-div-2 footer-text-font">
                <Link className="cs-links" to="">
                  Order & Returns
                </Link>
              </div>
              <div className="footer-head-div-2 footer-text-font">
                <Link className="cs-links" to="">
                  Consultancy
                </Link>
              </div>
            </div>
          </div>

          <div className="footer-horizontal-line"></div>

          <div className="footer-base row">
            <div className="footer-lower-left col footer-text-font">
              ©2023 AgroKart. All rights reserved.
            </div>
            <div className="footer-lower-right col">
              {/* Here images of cards will be displayed */}
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
