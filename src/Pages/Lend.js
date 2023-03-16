import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/esm/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Alert from "react-bootstrap/Alert";
import "./Lend.css";
import face from "./Lend/face_man.jpg";
import f1 from "./Lend/f1.jpg";
import f2 from "./Lend/f2.jpg";
import f3 from "./Lend/f3.jpg";
import f4 from "./Lend/f4.jpg";
import qrr from "./Lend/101.png";
import more from "./Lend/more.mp4";
import moree from "./Lend/moree.webm";

function Lend() {
  return (
    <>
      <Container fluid>
        <br />
        <Row style={{ display: "flex", justifyContent: "center" }}>
          <Col></Col>
          <Col>
            <Card style={{ width: "28rem" }} className="card_main">
              <Card.Img variant="top" src={face} className="face" alt="..." />
              <Card.Body>
                <Card.Title
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Попенко Дмитро Васильович
                </Card.Title>
                <Card.Text
                  style={{
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  Час (1950 - 2015)
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col style={{ display: "flex", justifyContent: "center" }}>
            <wrapper>
              <img src={qrr} className="img-thumbnail" alt="..." />
            </wrapper>
          </Col>
          <br />
        </Row>
        <br />
        <Container>
          <Alert variant="dark">
            <Alert.Heading
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              Трохі про мене
            </Alert.Heading>
            <p>
              Тут ви можете дізнатись{" "}
              <Alert.Link href="#">про мене,</Alert.Link> побачити світлини із
              мого життя, почути мене, разом згадати минуле.
            </p>
            <hr />
            <div className="content_about">
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat fugiat, explicabo dignissimos eum laboriosam et
                aspernatur facilis saepe officiis eveniet culpa? Ut,
                accusantium! Consequuntur voluptates deserunt deleniti tempora
                magni dolorum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellat fugiat, explicabo dignissimos eum
                laboriosam et aspernatur facilis saepe officiis eveniet culpa?
                Ut, accusantium! Consequuntur voluptates deserunt deleniti
                tempora magni dolorum.
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat fugiat, explicabo dignissimos eum laboriosam et
                aspernatur facilis saepe officiis eveniet culpa? Ut,
                accusantium! Consequuntur voluptates deserunt deleniti tempora
                magni dolorum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellat fugiat, explicabo dignissimos eum
                laboriosam et aspernatur facilis saepe officiis eveniet culpa?
                Ut, accusantium! Consequuntur voluptates deserunt deleniti
                tempora magni dolorum.
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat fugiat, explicabo dignissimos eum laboriosam et
                aspernatur facilis saepe officiis eveniet culpa? Ut,
                accusantium! Consequuntur voluptates deserunt deleniti tempora
                magni dolorum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellat fugiat, explicabo dignissimos eum
                laboriosam et aspernatur facilis saepe officiis eveniet culpa?
                Ut, accusantium! Consequuntur voluptates deserunt deleniti
                tempora magni dolorum.
              </p>
              <p className="mb-0">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat fugiat, explicabo dignissimos eum laboriosam et
                aspernatur facilis saepe officiis eveniet culpa? Ut,
                accusantium! Consequuntur voluptates deserunt deleniti tempora
                magni dolorum. Lorem ipsum dolor sit amet consectetur
                adipisicing elit. Repellat fugiat, explicabo dignissimos eum
                laboriosam et aspernatur facilis saepe officiis eveniet culpa?
                Ut, accusantium! Consequuntur voluptates deserunt deleniti
                tempora magni dolorum.
              </p>
            </div>
          </Alert>
        </Container>
        <Container>
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={f1} className="face" alt="..." />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={f2} className="face" alt="..." />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              {/* <Card.Img variant="top" src={f3} className="face" alt="..." /> */}
              <div className="wrapper_lend">
                <div className="video">
                  <video
                    preload="auto"
                    poster={f3}
                    controls
                    className="video_item_lend"
                  >
                    <source src={moree} type="video/webm"></source>
                    <source src={more} type="video/mp4"></source>
                  </video>
                </div>
              </div>
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <br />
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={f2} className="face" alt="..." />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={f3} className="face" alt="..." />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={f4} className="face" alt="..." />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <br />
          <CardGroup>
            <Card>
              <Card.Img variant="top" src={f1} className="face" alt="..." />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={f2} className="face" alt="..." />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
            <Card>
              <Card.Img variant="top" src={f3} className="face" alt="..." />
              <Card.Body>
                <Card.Title>Card title</Card.Title>
                <Card.Text>
                  This is a wider card with supporting text below as a natural
                  lead-in to additional content. This content is a little bit
                  longer.
                </Card.Text>
              </Card.Body>
            </Card>
          </CardGroup>
          <br />
        </Container>
        <br />
        <Container>
          <Alert variant="dark">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat
              fugiat, explicabo dignissimos eum laboriosam et aspernatur facilis
              saepe officiis eveniet culpa? Ut, accusantium! Consequuntur
              voluptates deserunt deleniti tempora magni dolorum. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Repellat fugiat,
              explicabo dignissimos eum laboriosam et aspernatur facilis saepe
              officiis eveniet culpa? Ut, accusantium! Consequuntur voluptates
              deserunt deleniti tempora magni dolorum.
            </p>
          </Alert>
        </Container>
      </Container>
    </>
  );
}

export default Lend;
