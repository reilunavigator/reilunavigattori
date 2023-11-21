import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { QuestionNavbar } from "../QuestionNavbar.js";

export const Study19 = () => {
  const navigate = useNavigate();

  return (
    <div className="study19">
      <QuestionNavbar />
      <section className="study19banner">
        <center>
          <div
            className="study19question"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div>
              <h3>Miksi et halua tehdä juttua polarisoivasta aiheesta?​​</h3>
            </div>
            <div>
              <h3>
                Minkälaista apua kaipaat polarisoivan aiheen käsittelyyn?​
              </h3>
            </div>
          </div>

          <div className="study19section">
            <Row id="study19row">
              <Col md={3} xs={1} id="study19coloredcolumn" data-aos="fade-right" data-aos-duration="2000">
                <button id="study19buttontext" onClick={() => navigate(`/navigator/info/20`)} >
                  Kaipaan apua yleisön reaktioon vastaamiseen.
                </button>
              </Col>
              <Col md={3} xs={1} id="study19coloredcolumn" data-aos="fade-left" data-aos-duration="2000">
                <button id="study19buttontext" onClick={() => navigate(`/navigator/info/21`)} >
                  Kaipaan tukea ja ohjeita moniäänisten juttujen tekemiseen.​
                </button>
              </Col>
              <Col md={3} xs={1} id="study19coloredcolumn" data-aos="fade-right" data-aos-duration="2000">
                <button id="study19buttontext" onClick={() => navigate(`/navigator/info/22`)} >
                  Kaipaan  lisää aikaa ja resursseja polarisoivan aiheen käsittelyyn.​
                </button>
              </Col>
            </Row>
          </div>
        </center>
      </section>
    </div>
  );
};
