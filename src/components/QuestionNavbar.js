import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { Container, Nav, Navbar } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import logo from "../assets/logo.png";

export const QuestionNavbar = () => {
  const navigate = useNavigate();

  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

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

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container id="questionnavcontainer">
        <Navbar.Brand
          href="#home"
          className={
            activeLink === "home" ? "active-navbar-link" : "navbar-link"
          }
          onClick={() => navigate("/navigator/")}
        >
          <img src={logo} alt="Logo" id="navbarlogo"/>
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
              onClick={() => navigate("/navigator/")}
            >
              Kotisivu
            </Nav.Link>
            <Nav.Link
              id="navlink"
              href="#tietopankkiin"
              className={
                activeLink === "tietopankkiin" ? "active-navbar-link" : "navbar-link"
              }
              onClick={() => navigate("/dashboard/")}
            >
              Tietopankkiin
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
