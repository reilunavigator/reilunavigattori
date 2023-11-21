import { DashboardNavbar } from "../DashboardNavbar";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

export const Tietopankkiin = () => {
  const navigate = useNavigate();

  return (
    <div className="tietopankkiin">
      <DashboardNavbar />
      <section className="tietopankkiinbanner">
        <center>
          <div className="tietopankkiinsection">
            <Row id="tietopankkiinrow">
              <Col id="uncoloredcolumn"></Col>
              <Col md={3} xs={1} id="coloredcolumn" data-aos="fade-down" data-aos-duration="2000">
                <button id="buttontext" onClick={() => navigate(`/navigator/info/27`)}>
                  Yleisö/Kansalaiset
                </button>
              </Col>
              <Col md={3} xs={1} id="coloredcolumn" data-aos="fade-down" data-aos-duration="2000">
                <button id="buttontext" onClick={() => navigate(`/navigator/info/30`)}>Moniäänisyys​</button>
              </Col>
              <Col id="uncoloredcolumn"></Col>
            </Row>

            <Row id="tietopankkiinrow">
              <Col md={3} xs={1} id="coloredcolumn" data-aos="fade-down-right" data-aos-duration="2000">
                <button id="buttontext" onClick={() => navigate(`/navigator/info/25`)}>Toimittajan rooli​</button>
              </Col>
              <Col id="uncoloredcolumn"></Col>
              <Col id="uncoloredcolumn"></Col>
              <Col md={3} xs={1} id="coloredcolumn" data-aos="fade-down-left" data-aos-duration="2000">
                <button id="buttontext" onClick={() => navigate(`/navigator/info/26`)}>Sananvapaus​</button>
              </Col>
            </Row>

            <Row id="tietopankkiinrow">
              <Col md={3} xs={1} id="coloredcolumn" data-aos="zoom-in" data-aos-duration="2000">
                <button id="buttontext" onClick={() => navigate(`/navigator/info/32`)}>Lähteet​</button>
              </Col>
              <Col id="uncoloredcolumn"></Col>
              <Col id="uncoloredcolumn"></Col>
              <Col md={3} xs={1} id="coloredcolumn" data-aos="fade-up-right" data-aos-duration="2000">
                <button id="buttontext" onClick={() => navigate(`/navigator/info/28`)}>Luottamus​</button>
              </Col>
            </Row>

            <Row id="tietopankkiinrow">
              <Col id="uncoloredcolumn"></Col>
              <Col md={3} xs={1} id="coloredcolumn" data-aos="fade-up-left" data-aos-duration="2000">
                <button id="buttontext" onClick={() => navigate(`/navigator/info/29`)}>Journalistin eettiset ohjeet​</button>
              </Col>
              <Col md={3} xs={1} id="coloredcolumn" data-aos="fade-up" data-aos-duration="2000">
                <button id="buttontext" onClick={() => navigate(`/navigator/info/31`)}>Häirintä​</button>
              </Col>
              <Col id="uncoloredcolumn"></Col>
              
            </Row>
          </div>
        </center>
      </section>
    </div>
  );
};
