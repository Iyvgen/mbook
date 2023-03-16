import React from "react";
import "./Header.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from "../Main/Main";
import Lend from "../Pages/Lend";
import FAQ from "../Pages/FAQ";

function Header() {
  return (
    <>
      <Router>
        {[false].map((expand) => (
          <Navbar
            key={expand}
            bg="primary"
            variant="dark"
            expand={expand}
            sticky="top"
            className="mb-3"
          >
            <Container fluid>
              <Navbar.Brand
                href="#action1"
                as={Link}
                to="/"
                className="navbar-brand"
                style={{ fontSize: "25px" }}
              >
                MemorysBook
              </Navbar.Brand>
              <Navbar.Toggle
                aria-controls={`offcanvasNavbar-expand-${expand}`}
              />
              <Navbar.Offcanvas
                id={`offcanvasNavbar-expand-${expand}`}
                aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                placement="end"
              >
                <Offcanvas.Header closeButton>
                  <Offcanvas.Title
                    id={`offcanvasNavbarLabel-expand-${expand}`}
                    style={{ color: "#2274d1" }}
                    className="nav-brand"
                  >
                    MB
                  </Offcanvas.Title>
                </Offcanvas.Header>
                <hr />
                <Offcanvas.Body>
                  <Nav className="justify-content-end flex-grow-1 pe-3">
                    <Nav.Link
                      href="#action1"
                      style={{ color: "#2274d1" }}
                      as={Link}
                      to="/"
                    >
                      {"Головна"}
                    </Nav.Link>
                    <NavDropdown.Divider />
                    <Nav.Link
                      href="#action2"
                      style={{ color: "#2274d1" }}
                      as={Link}
                      to="/FAQ"
                    >
                      {"Питання/Відповіді"}
                    </Nav.Link>
                    <NavDropdown
                      title="Варіанти оформлення "
                      id={`offcanvasNavbarDropdown-expand-${expand}`}
                      style={{ color: "#2274d1" }}
                    >
                      <NavDropdown.Item
                        href="#action3"
                        style={{ color: "#2274d1" }}
                        as={Link}
                        to="/Lend"
                      >
                        {"Варіант"}
                      </NavDropdown.Item>
                      <NavDropdown.Item
                        href="#action4"
                        style={{ color: "#2274d1" }}
                      >
                        Another action
                      </NavDropdown.Item>
                      <NavDropdown.Divider />
                      <NavDropdown.Item
                        href="#action5"
                        style={{ color: "#2274d1" }}
                      >
                        Something else here
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                  <Form className="d-flex">
                    <Form.Control
                      type="search"
                      placeholder="Search"
                      className="me-2"
                      aria-label="Search"
                    />
                    <Button variant="outline-primary">Search</Button>
                  </Form>
                </Offcanvas.Body>
              </Navbar.Offcanvas>
            </Container>
          </Navbar>
        ))}
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/Lend" element={<Lend />} />
          <Route path="/FAQ" element={<FAQ />} />
        </Routes>
      </Router>
    </>
  );
}

export default Header;
