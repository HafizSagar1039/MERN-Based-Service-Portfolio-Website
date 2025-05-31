import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import styles from "./Footer.module.css";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <Container>
        <Row className="g-4">
          <Col lg={3} md={6}>
            <div className={styles.footerWidget}>
              <h4 className={styles.widgetTitle}>Hafiz Sagar Tech</h4>
              <p>
                Providing innovative solutions for modern businesses. We help
                companies transform their digital presence and achieve their
                full potential.
              </p>
              <div className={styles.socialLinks}>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <FaFacebook />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Twitter"
                >
                  <FaTwitter />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin />
                </a>
              </div>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className={styles.footerWidget}>
              <h4 className={styles.widgetTitle}>Quick Links</h4>
              <ul className={styles.footerLinks}>
                <ul>
                  <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/">
                      Home
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/about">
                      About Us
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/services">
                      Services
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/portfolio">
                      Portfolio
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link className={styles.menuLink} to="/contact">
                      Contact
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className={styles.footerWidget}>
              <h4 className={styles.widgetTitle}>Our Services</h4>
              <ul className={styles.footerLinks}>
                <ul>
                  <li className={styles.menuItem}>
                    <Link to="/services" className={styles.menuLink}>
                      Web Development
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link to="/services" className={styles.menuLink}>
                      Mobile Applications
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link to="/services" className={styles.menuLink}>
                      UI/UX Design
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link to="/services" className={styles.menuLink}>
                      Digital Marketing
                    </Link>
                  </li>
                  <li className={styles.menuItem}>
                    <Link to="/services" className={styles.menuLink}>
                      IT Consulting
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </Col>

          <Col lg={3} md={6}>
            <div className={styles.footerWidget}>
              <h4 className={styles.widgetTitle}>Contact Info</h4>
              <ul className={styles.contactInfo}>
                <li>
                  <FaMapMarkerAlt className={styles.contactIcon} />
                  <span>New Muslim town Lahore, Pakistan</span>
                </li>
                <li>
                  <FaPhoneAlt className={styles.contactIcon} />
                  <span>+(92) 317-4512095</span>
                </li>
                <li>
                  <FaEnvelope className={styles.contactIcon} />
                  <span>example@gmail.com</span>
                </li>
              </ul>
            </div>
          </Col>
        </Row>

        <div className={styles.footerBottom}>
          <p>&copy; {year} TechVision. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
