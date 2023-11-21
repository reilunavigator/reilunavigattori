import { Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { QuestionNavbar } from "../QuestionNavbar.js";

import kiitos from "../../assets/icons/Kiitos.svg";

export const Info23 = () => {
  const navigate = useNavigate();

  return (
    <div className="kiitos">
      <QuestionNavbar />
      <section className="kiitosbanner">
        <center>
          <div data-aos="fade-down" data-aos-duration="2000">
            <img src={kiitos} alt="kiitos" className="kiitosimg" />
          </div>
          <div
            className="kiitosquestion"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            <div>
              <h3 id="kiitosques">Kiitos yhteisestä matkastamme!</h3>
            </div>
          </div>

          <div className="kiitossection">
            <Row id="kiitosrow" data-aos="fade-down" data-aos-duration="2000">
              <p id="kiitospara">
                Toivottavasti olet saanut ideoita ja uusia näkökulmia jutun
                kirjoittamiseen.
              </p>
            </Row>
            <Row id="kiitosrow" data-aos="fade-down" data-aos-duration="2000">
              <p id="kiitospara">
                Ja muista, että matkalla kohti moniäänisempää journalismia tulee
                varmasti hetkiä, kun tunnet itsesi riittämättömäksi.
              </p>
            </Row>
            <Row id="kiitosrow" data-aos="fade-down" data-aos-duration="2000">
              <p id="kiitospara">
                Jokaisella pienelläkin valinnalla on merkitystä. Jokaisella
                kuulluksi tulemisen kokemuksella ja jutulla voidaan kulkea kohti
                tasa-arvoisempaa ja moniäänisempää journalismia.
              </p>
            </Row>
            <div id="kiitosbackbuttondiv" data-aos="fade-up" data-aos-duration="2000">
              <button onClick={() => navigate(`/navigator`)}>
                Takaisin kotisivulle
              </button>
            </div>
          </div>
        </center>
      </section>
    </div>
  );
};
