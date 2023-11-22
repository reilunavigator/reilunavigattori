import { Col, Container, Row } from "react-bootstrap";
import { ArrowRight } from "react-bootstrap-icons";

import { useNavigate } from "react-router-dom";

import arrow1 from "../assets/icons/arrow-1.svg";
import arrow2 from "../assets/icons/arrow-2.svg";
import arrow3 from "../assets/icons/arrow-3.svg";
import arrow4 from "../assets/icons/arrow-4.svg";
import arrow5 from "../assets/icons/arrow-5.svg";

export const Home = () => {
  const navigate = useNavigate();

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} xl={7} id="homeleftcol">
            <h1 data-aos="fade-down" data-aos-duration="3000">
              Reiluusnavigaattori
            </h1>
            <h2 data-aos="fade-down" data-aos-duration="2000">
              Toimittajien apuna hankalien aiheiden risteyksissä
            </h2>
            <button
              id="homebutton"
              data-aos="fade-up"
              data-aos-duration="2000"
              onClick={() => navigate("/navigator/study/4")}
            >
              ALOITA JUTTUPROSESSI <ArrowRight size={25} />
            </button>
          </Col>
          <Col xs={12} md={6} xl={5} id="homerightcol">
            <Row>
              <Col xs={3}></Col>
              <Col
                className="selectablebox"
                id="box1"
                data-aos="zoom-in-up"
                data-aos-duration="2000"
              >
                <button id="selectabletext" onClick={() => navigate(`/navigator/study/4`)}>Aiheen valinta</button>
              </Col>
              <Col xs={3}></Col>
            </Row>
            <Row>
              <Col xs={2}></Col>
              <Col data-aos="fade-up-left" data-aos-duration="2000">
                <center>
                  <img src={arrow5} alt="arrow-5" className="directionalarrow" />
                </center>
              </Col>
              <Col xs={2}></Col>
              <Col data-aos="fade-up-right" data-aos-duration="2000">
                <center>
                  <img src={arrow1} alt="arrow-1" className="directionalarrow" />
                </center>
              </Col>
              <Col xs={2}></Col>
            </Row>
            <Row>
              <Col
                className="selectablebox"
                id="box5"
                data-aos="zoom-in-left"
                data-aos-duration="2000"
              >
                <button id="selectabletext" onClick={() => navigate(`/navigator/study/16`)}>Julkaisu ja seuranta</button>
              </Col>
              <Col xs={2}></Col>
              <Col
                className="selectablebox"
                id="box2"
                data-aos="zoom-in-right"
                data-aos-duration="2000"
              >
                <button id="selectabletext" onClick={() => navigate(`/navigator/study/5`)}>Näkökulma​​</button>
              </Col>
            </Row>
            <Row>
              <Col xs={1}></Col>
              <Col data-aos="fade-down-left" data-aos-duration="2000">
                <center>
                  <img src={arrow4} alt="arrow-4" className="directionalarrow" />
                </center>
              </Col>
              <Col xs={3}></Col>
              <Col data-aos="fade-down-right" data-aos-duration="2000">
                <center>
                  <img src={arrow2} alt="arrow-2" className="directionalarrow" />
                </center>
              </Col>
              <Col xs={1}></Col>
            </Row>
            <Row>
              <Col xs={1}></Col>
              <Col
                className="selectablebox"
                id="box4"
                data-aos="fade-down-left"
                data-aos-duration="2000"
              >
                <button id="selectabletext" onClick={() => navigate(`/navigator/study/12`)}>Käsittely</button>
              </Col>
              <Col xs={1}></Col>
              <Col
                className="selectablebox"
                id="box3"
                data-aos="fade-down-right"
                data-aos-duration="2000"
              >
                <button id="selectabletext" onClick={() => navigate(`/navigator/study/8`)}>Lähteet ja aineisto</button>
              </Col>
              <Col xs={1}></Col>
            </Row>
            <Row>
              <Col xs={3}></Col>
              <Col data-aos="zoom-in-down" data-aos-duration="2000">
                <center>
                  <img src={arrow3} alt="arrow-3" className="directionalarrow" id="arrow3" />
                </center>
              </Col>
              <Col xs={3}></Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
