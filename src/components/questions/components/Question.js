import React, { useEffect } from "react";

import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

export const Question = ({ title, options }) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="questionbanner" id="question">
      <center>
        <Card className="questioncard" id="questioncard">
          <Card.Title
            id="questiontitle"
            data-aos="fade-down"
            data-aos-duration="2000"
          >
            {title}
          </Card.Title>
          {options.map((choice) => {
            return (
              <Row id="optionrow" data-aos="fade-left" data-aos-duration="2000">
                <Col xs={2} md={1} xl={1} id="valitsebtn">
                  <button id="valitsebuttontext" onClick={() => navigate(`/navigator/${choice.navigate}`)}>
                    Valitse
                  </button>
                </Col>
                <Col>
                  <Card.Text id="optioncontent">{choice.value}</Card.Text>
                </Col>
              </Row>
            );
          })}
          <div id="questionlastdiv"></div>
        </Card>
      </center>
    </section>
  );
};
