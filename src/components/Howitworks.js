import React, { useEffect } from "react";

import { Col, Container, Row } from "react-bootstrap";
import { CaretRight } from "react-bootstrap-icons";

import AOS from "aos";
import "aos/dist/aos.css";

import reiluimg from "../assets/logo.png";

export const Howitworks = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <section className="howitworksbanner" id="howitworks">
      <Container>
        <Col>
          <Row
            className="align-items-left"
            data-aos="fade-right"
            data-aos-duration="2000"
          >
            <h1>Kuinka se toimii</h1>
          </Row>
          <Row className="align-items-center">
            <Col xs={12} md={6} xl={5}>
              <img
                src={reiluimg}
                alt="reilulogo"
                data-aos="zoom-in"
                data-aos-duration="3000"
              />
            </Col>
            <Col xs={12} md={6} xl={7}>
              <Row data-aos="fade-left" data-aos-duration="2000">
                <Col xs={1}>
                  <CaretRight size={24} />
                </Col>
                <Col>
                  <p>
                    Voit edetä toimitusprosessissa vaihe kerrallaan tai syventyä
                    aiheeseen liittyviin oppaisiin ja tutkimustietoon
                    tietopankissa. Prosessin aikana reiluusnavigaattori esittää
                    sinulle kysymyksiä pohdittavaksi sekä antaa vinkkejä
                    toimittajan arkeen.
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
