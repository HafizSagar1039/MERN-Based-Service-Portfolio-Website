import { useState, useEffect, useContext } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  Container,
  Navbar as BootstrapNavbar,
  Nav,
  Offcanvas,
  Button,
} from "react-bootstrap";
import { AuthContext } from "../../../context/AuthContext";
import styles from "./Navbar.module.css";
import { FaLaptopCode } from "react-icons/fa";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const { isAuthenticated, logout } = useContext(AuthContext);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Close mobile menu when route changes
    setExpanded(false);
  }, [location]);

  const navbarClass = scrolled
    ? `${styles.navbar} ${styles.scrolled}`
    : styles.navbar;

  return (
    <BootstrapNavbar
      expanded={expanded}
      expand="lg"
      fixed="top"
      className={navbarClass}
      variant="dark"
    >
      <Container>
        <BootstrapNavbar.Brand as={Link} to="/" className={styles.brand}>
          <h2 className={styles.logoicon}>
           <FaLaptopCode />
          </h2>
          <span className={styles.logo}> Hafiz Sagar Tech</span>
        </BootstrapNavbar.Brand>

        <BootstrapNavbar.Toggle
          aria-controls="offcanvas-navbar-nav"
          onClick={() => setExpanded(!expanded)}
          className={styles.toggleButton}
        />

        <BootstrapNavbar.Offcanvas
          id="offcanvas-navbar-nav"
          aria-labelledby="offcanvas-navbar-label"
          placement="start" // This makes it open from the left
          show={expanded}
          onHide={() => setExpanded(false)}
          className={styles.offcanvas}
        >
          <Offcanvas.Header
            closeButton
            className={styles.offcanvasHeader}
            closeVariant="white" // This makes the X white
          >
            <Offcanvas.Title className="text-light" id="offcanvas-navbar-label">
              Menu
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to="/" className={styles.navLink} end>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to="/about" className={styles.navLink}>
                About Us
              </Nav.Link>
              <Nav.Link as={NavLink} to="/services" className={styles.navLink}>
                Services
              </Nav.Link>
              <Nav.Link as={NavLink} to="/portfolio" className={styles.navLink}>
                Portfolio
              </Nav.Link>
              <Nav.Link as={NavLink} to="/contact" className={styles.navLink}>
                Contact
              </Nav.Link>

              {isAuthenticated ? (
                <>
                  <Nav.Link as={NavLink} to="/admin" className={styles.navLink}>
                    Admin
                  </Nav.Link>
                  <Nav.Link onClick={logout} className={styles.navLink}>
                     <Button 
                  variant="outline-info">
                    Logout
                    </Button>
                  </Nav.Link>
                </>
              ) : (
                <Nav.Link as={NavLink} to="/login" className={styles.navLink}>
                  <Button variant="outline-info">Login</Button>
                </Nav.Link>
              )}
            </Nav>
          </Offcanvas.Body>
        </BootstrapNavbar.Offcanvas>
      </Container>
    </BootstrapNavbar>
  );
};

export default Navbar;
