import { Container, Row, Col } from "react-bootstrap";

import universitylogo from "../assets/images/partner-logos/university logo.svg";
import reilumedialog from "../assets/images/partner-logos/reilu media logo.svg";
import sponsorlogo from "../assets/images/partner-logos/sponsor logo.png";

export const Partners = () => {
  return (
    <section className="partnersbanner" id="partners">
      <Container>
        <Row className="align-items-center">
          <center>
            <h1 data-aos="fade-down" data-aos-duration="2000">
              Yhteistyössä
            </h1>
          </center>
        </Row>
        <Row className="align-items-center">
          <Col
            id="partnerlogo"
            data-aos="zoom-in-left"
            data-aos-duration="2000"
            md={3}
            xs={1}
          >
            <a href="https://www.tuni.fi/fi/" target="_blank" rel="noreferrer">
              <img src={universitylogo} alt="Tampere University logo" />
            </a>
          </Col>
          <Col
            id="partnerlogo"
            data-aos="zoom-in"
            data-aos-duration="2000"
            md={3}
            xs={1}
          >
            <a href="https://projects.tuni.fi/reilumedia/" target="_blank" rel="noreferrer">
              <img src={reilumedialog} alt="Reilu media logo" />
            </a>
          </Col>
          <Col
            id="partnerlogo"
            data-aos="zoom-in-right"
            data-aos-duration="2000"
            md={3}
            xs={1}
          >
            <a href="https://www.mediaalantutkimussaatio.fi/" target="_blank" rel="noreferrer">
              <img src={sponsorlogo} alt="Sponsor logo" id="sponsorlogo" />
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
