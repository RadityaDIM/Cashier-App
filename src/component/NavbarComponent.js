import React from "react";
import { Col, Container, Nav, Navbar, NavDropdown, Row } from "react-bootstrap";

function NavbarComponent() {
  return (
    <Navbar variant="dark">
      <Container className="pl-3">
        <Navbar.Brand href="#home">
          <Row>
            <Col className="px-0">
              <img
                src="assets/images/cashier.png"
                style={{
                  width: "50px",
                  height: "50px",
                  marginLeft: "10px",
                }}
              />
            </Col>
            <Col className="px-2" style={{ marginTop: "10px" }}>
              <h4>
                <strong>Kasir Ku</strong>
              </h4>
            </Col>
          </Row>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* <Nav.Link >Eat</Nav.Link>
            <Nav.Link >Drink</Nav.Link>
            <Nav.Link >Happy</Nav.Link> */}
            {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarComponent;
