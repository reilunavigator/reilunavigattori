import React, { useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { ArrowRight, CaretRight } from "react-bootstrap-icons";

import AOS from "aos";
import "aos/dist/aos.css";

import contentimg from "../assets/images/aboutus-img.svg";

export const Content = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="contentbanner" id="content">
      <Container>
        <Col>
          <Row
            className="align-items-left"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1>Reilu Media</h1>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={5}>
              <img
                src={contentimg}
                alt="Content img"
                data-aos="zoom-in"
                data-aos-duration="3000"
              />
              <button
              id="aboutusbtn"
                data-aos="fade-up"
                data-aos-duration="2000"
                onClick={(e) => {
                  e.preventDefault();
                  window.open(`https://projects.tuni.fi/reilumedia/`, '_blank');
                }}
              >
                Lue lisää <ArrowRight size={25} />
              </button>
            </Col>
            <Col xs={12} md={6} xl={7}>
              <Row data-aos="fade-left" data-aos-duration="2000">
                <Col xs={1}>
                  <CaretRight size={24} />
                </Col>
                <Col>
                  <p>
                    Reilu media suhtautuu kunnioittavasti erilaisiin ihmisiin ja
                    näkökulmiin. Reilun jutun lukeminen ei herätä syytöksiä
                    toimittajien puolueellisuudesta tai yksiäänisyydestä.
                  </p>
                </Col>
              </Row>
              <Row data-aos="fade-left" data-aos-duration="2000">
                <Col xs={1}>
                  <CaretRight size={24} />
                </Col>
                <Col>
                  <p>
                    Reilu media -tutkimushanke pyrkii edistämään tätä päämäärää.
                    Reilun median toteuttaminen ei ole aina helppoa, ja siksi
                    kehitimme navigaattorin toimittajien käyttöön.
                  </p>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Container>
    </section>
  );
};
