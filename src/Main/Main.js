import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import qr from "./111.jpg";
import qrr from "./101.png";
import "./Main.css";
import Col from "react-bootstrap/esm/Col";

function Main() {
  return (
    <>
      <Container fluid>
        <Row>
          <div className="main-mb">
            <body>
              <Row>
                <Col sm={8}>
                  <div className="page-content">
                    <h3>
                      Цінуйте моменти життя, до того як вони станут спогодами.
                    </h3>
                    <h6 style={{ textAlign: "start" }}>
                      Німецький поет Г. Гайне сказав: “Кожна людина – це
                      неповторний світ. Під кожною могильною плитою – світова
                      історія”. Ми різні: ми по-різному сприймаємо обставини
                      життя, по-різному на них реагуємо. Ми можемо бути
                      адекватними і неадекватними, красивими і некрасивими,
                      розумними і не дуже. Але кожна людина досі жива, поки жива
                      про неї пам 'ять. Ось чому у всі часи людина прагнула
                      залишити після себе щось, що могло нагадувати про неї.
                      Піраміди фараонів, замки сильних світу цього, витвори
                      мистецтва, книгі і навіть проста думка, що людина повинна
                      зробити у свому житті три речі: збудувати дім, посадити
                      дерево, виростити сина - це все намагання залишити про
                      себе пам'ять, згадку. Спалах на мить у безмежному просторі
                      всесвіту - життя людини.
                    </h6>
                  </div>
                </Col>
                <Col sm={4} className="qr">
                  <wrapper>
                    <img src={qrr} className="img-thumbnail" alt="..." />
                  </wrapper>
                </Col>
              </Row>
              <div className="parallaxone">
                <div className="parallax-content">
                  <h1>Memorys Book</h1>
                  <div className="parallax_text">
                    Цінуйте моменти життя, до того як вони станут спогодами
                  </div>
                </div>
                <div className="mask"></div>
              </div>

              <br />
              <Row>
                <Col sm={8}>
                  <div className="page-content">
                    <h3>
                      Цінуйте моменти життя, до того як вони станут спогодами.
                    </h3>
                    <h6 style={{ textAlign: "start", textDecoration: "none" }}>
                      <p>
                        Ми пропонуємо зберегти пам'ять про близьких і рідних
                        людей в сучасному форматі
                      </p>
                      <p>
                        Щоб відвідавши місце спокою, або просто за допомогою
                        коп'ютера згадати про кожного з нас, та надати
                        можливість "цифрового безмерття".
                      </p>
                      <p> Це те саме найменьше, що прагне людина.</p>
                    </h6>
                  </div>
                </Col>
                <Col sm={4} className="qr">
                  <wrapper>
                    <img src={qr} className="img-thumbnail" alt="..." />
                  </wrapper>
                </Col>
              </Row>
              <br />
              <div className="parallaxtwo">
                <div className="parallax-content">
                  <h1>Memorys Book</h1>
                  <div className="parallax_text">
                    Цінуйте моменти життя, до того як вони станут спогодами
                  </div>
                </div>
                <div className="mask"></div>
              </div>
              <Row>
                <Col sm={8}>
                  <div className="page-content">
                    <h3>
                      Цінуйте моменти життя, до того як вони станут спогодами.
                    </h3>
                    <h6 style={{ textAlign: "start" }}>
                      Німецький поет Г. Гайне сказав: “Кожна людина – це
                      неповторний світ. Під кожною могильною плитою – світова
                      історія”. Ми різні: ми по-різному сприймаємо обставини
                      життя, по-різному на них реагуємо. Ми можемо бути
                      адекватними і неадекватними, красивими і некрасивими,
                      розумними і не дуже. Але кожна людина досі жива, поки жива
                      про неї пам 'ять. Ось чому у всі часи людина прагнула
                      залишити після себе щось, що могло нагадувати про неї.
                      Піраміди фараонів, замки сильних світу цього, витвори
                      мистецтва, книгі і навіть проста думка, що людина повинна
                      зробити у свому житті три речі: збудувати дім, посадити
                      дерево, виростити сина - це все намагання залишити про
                      себе пам'ять, згадку. Спалах на мить у безмежному просторі
                      всесвіту - життя людини.
                    </h6>
                  </div>
                </Col>
                <Col sm={4} className="qr">
                  <wrapper>
                    <img src={qrr} className="img-thumbnail" alt="..." />
                  </wrapper>
                </Col>
              </Row>
            </body>
          </div>
          {/* <ToTopButton variant="primary" className="totopbutton" /> */}
        </Row>
      </Container>
    </>
  );
}

export default Main;
