import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Alert from "react-bootstrap/Alert";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import clouds from "./FAQ/Clouds.mp4";
import cloudss from "./FAQ/Cloudss.webm";
import "./FAQ.css";

function FAQ() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <div className="wrapper">
              <div className="screen_body">
                <div className="screen_title">Memorys Book</div>
                <div className="screen_text">
                  Цінуйте моменти життя, до того як вони станут спогодами
                </div>
              </div>
              <div className="video">
                <video
                  muted
                  autoPlay
                  preload="auto"
                  loop
                  className="video_item"
                >
                  <source src={cloudss} type="video/webm"></source>
                  <source src={clouds} type="video/mp4"></source>
                </video>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
      <br />
      <Container fluid className="content">
        <Alert variant="primary">
          <Alert.Heading className="alert_heading">
            Питання, яки виникають
          </Alert.Heading>
          <p>
            Як створити подібну сторінку пам'яти, як зв'язатись з нами,
            обговорити вміст та текст сторінки, все це та можливо інши питання
            яки виникнуть, можна прочитати тут.
          </p>
          <hr />
          <p className="mb-0">
            Ми докладемо максимум зусиль для втілення ваших задумів.
          </p>
        </Alert>
        <br />
        <br />
        <Accordion>
          <Accordion.Item eventKey="0">
            <Accordion.Header>Як зв'язатись з нами</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="1">
            <Accordion.Header>Як завантажити файли</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="2">
            <Accordion.Header>Політика взаємовідносин</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey="3">
            <Accordion.Header>Інше</Accordion.Header>
            <Accordion.Body>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
        <br />
      </Container>
    </>
  );
}

export default FAQ;
