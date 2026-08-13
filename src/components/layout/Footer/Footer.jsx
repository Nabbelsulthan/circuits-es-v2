
import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";

import "./Footer.css";

import logo from "../../../assets/logos/CircuitsES connect logo.png";


const Footer = () => {

  return (

    <footer className="site-footer">

      {/* =====================================================
                MAIN FOOTER
                ===================================================== */}

      <div className="site-footer-main">

        <div className="site-footer-container">

          {/* =================================================
                        BRAND
                        ================================================= */}

          <div className="site-footer-brand">

            <a
              // href="/"
              className="site-footer-logo"
            >
              <img
                src={logo}
                alt="Circuits Energy System"
              />
            </a>


            <p>
              Engineering electrical panels and
              industrial automation solutions built
              for real-world industry.
            </p>



            <div className="site-footer-social">

              <a
                href="https://in.linkedin.com/company/circuitses"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CircuitsES LinkedIn"
              >
                <span className="site-footer-social-letter">
                  in
                </span>
              </a>


              <a
                href="https://www.instagram.com/circuitses?igsh=b25saXcwejk1bzBm&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CircuitsES Instagram"
              >
                <span className="site-footer-social-letter">
                  ◎
                </span>
              </a>

            </div>

          </div>


          {/* =================================================
                        NAVIGATION
                        ================================================= */}

          <div className="site-footer-column">

            <span className="site-footer-label">
              EXPLORE
            </span>


            <a href="/">
              Home
            </a>

            <a href="/#about">
              About Us
            </a>

            <a href="/#solutions">
              Solutions
            </a>

            <a href="/#products">
              Products
            </a>

            <a href="/#services">
              Services
            </a>

            <a href="/#contact">
              Contact
            </a>



          </div>


          {/* =================================================
                        SOLUTIONS
                        ================================================= */}

          <div className="site-footer-column">

            <span className="site-footer-label">
              SOLUTIONS
            </span>


            <a href="/solutions/lt-panels">
              LT Control Panels
            </a>

            <a href="/solutions/plc">
              PLC Automation
            </a>

            <a href="/#solutions">
              Industrial Automation
            </a>

            <a href="/#solutions">
              Electrical Panels
            </a>

            <a href="/#services">
              Engineering Services
            </a>

          </div>


          {/* =================================================
                        CONTACT
                        ================================================= */}

          <div className="site-footer-contact">

            <span className="site-footer-label">
              CONTACT
            </span>


            <a
              href="tel:+918072127505"
              className="site-footer-contact-item"
            >

              <Phone />

              <span>
                +91 80 7212 7505
              </span>

            </a>


            <a
              href="mailto:info@circuitses.com"
              className="site-footer-contact-item"
            >

              <Mail />

              <span>
                info@circuitses.com
              </span>

            </a>


            <a
              href="https://maps.app.goo.gl/Sg6ncJunFLxbMjZN7?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="site-footer-contact-item"
            >

              <MapPin />

              <span>
                Salem · Hosur
              </span>

              <ArrowUpRight />

            </a>

          </div>

        </div>

      </div>


      {/* =====================================================
                BOTTOM BAR
                ===================================================== */}

      <div className="site-footer-bottom">

        <div className="site-footer-container">

          <p>
            © {new Date().getFullYear()} Circuits Energy
            System Pvt. Ltd. All rights reserved.
          </p>


          <div className="site-footer-bottom-links">

            <a href="/privacy-policy">
              Privacy Policy
            </a>

            <a href="/terms">
              Terms & Conditions
            </a>

          </div>


          <span className="site-footer-engineered">
            ENGINEERED FOR INDUSTRY
          </span>

        </div>

      </div>

    </footer>
  );
};


export default Footer;