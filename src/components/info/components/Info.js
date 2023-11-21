import React, { useEffect } from "react";

import { Row, Col, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { CaretRight, ArrowRight } from "react-bootstrap-icons";

import AOS from "aos";
import "aos/dist/aos.css";

export const Info = ({ intro, content, bulletpoints, readmore, next }) => {
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="infobanner" id="info">
      <center>
        <Card className="infocard" id="infocard">
          {intro.map((text) => {
            return (
              <Card.Title
                id="infointro"
                data-aos="fade-down"
                data-aos-duration="2000"
              >
                {text}
              </Card.Title>
            );
          })}
          {content ? (
            content.map((text) => {
              return (
                <Card.Text
                  id="infocontent"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  {text}
                </Card.Text>
              );
            })
          ) : (
            <></>
          )}
          {bulletpoints ? (
            bulletpoints.map((text) => {
              return (
                <Card.Text
                  id="infobulletpoints"
                  data-aos="fade-down"
                  data-aos-duration="2000"
                >
                  <CaretRight />
                  {text}
                </Card.Text>
              );
            })
          ) : (
            <></>
          )}
          <div className="inforeadmorediv">
            {readmore ? (
              readmore.map((choice) => {
                return (
                  <Row
                    id="inforow"
                    data-aos="fade-left"
                    data-aos-duration="2000"
                  >
                    <Col xs={4} md={2} xl={2} id="inforeadmorecol">
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          window.open(`${choice.navigate}`);
                        }}
                      >
                        Lue lisää
                      </button>
                    </Col>
                    <Col>
                      <Card.Text id="inforeadmorecontent">
                        {choice.value}
                      </Card.Text>
                    </Col>
                  </Row>
                );
              })
            ) : (
              <></>
            )}
          </div>

          {next ? (
            <Row id="gotonext">
              <Col>
                <button
                  id="nextBtn"
                  onClick={() => navigate(`/navigator/${next}`)}
                  target="_blank"
                >
                  Jatka <ArrowRight size={25} id="jatkaicon" />
                </button>
              </Col>
            </Row>
          ) : (
            <div id="gotonext"></div>
          )}
        </Card>
      </center>
    </section>
  );
};
