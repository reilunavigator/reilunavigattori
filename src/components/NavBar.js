import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import logo from "../assets/logo.png";

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand
          href="#home"
          className={
            activeLink === "home" ? "active-navbar-link" : "navbar-link"
          }
          onClick={() => onUpdateActiveLink("home")}
        >
          <img src={logo} alt="Logo" id="navbarlogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggle-icon"><List size={25} /></span>
        </Navbar.Toggle>
        <Navbar.Collapse className="justify-content-end">
          <Nav id="nav">
            <Nav.Link
              id="navlink"
              href="#home"
              className={
                activeLink === "home" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("home")}
            >
              Kotisivu
            </Nav.Link>
            <Nav.Link
              id="navlink"
              href="#howitworks"
              className={
                activeLink === "howitworks" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("howitworks")}
            >
              Kuinka se toimii
            </Nav.Link>
            <Nav.Link
              id="navlink"
              href="#content"
              className={
                activeLink === "content" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("content")}
            >
              Reilu Media
            </Nav.Link>
            <Nav.Link
              id="navlink"
              href="#partners"
              className={
                activeLink === "partners" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => onUpdateActiveLink("partners")}
            >
              Yhteistyössä
            </Nav.Link>
            <Nav.Link
              id="navlink"
              href="#dashboard"
              className={
                activeLink === "dashboard"
                  ? "active-navbar-link"
                  : "navbar-link"
              }
              onClick={() => navigate("/dashboard/")}
            >
              Tietopankki
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
