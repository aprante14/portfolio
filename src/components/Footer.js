import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">

          <Col xs={12} sm={6} className="text-start">
            <img src={logo} alt="Logo" className="footer-logo" />
          </Col>
          <Col xs={12} sm={6} className="text-end">
            <div className="social-icon">
              <a href="#"><img src={navIcon1} alt="Icon" /></a>
              <a href="#"><img src={navIcon2} alt="Icon" /></a>
              <a href="#"><img src={navIcon3} alt="Icon" /></a>
            </div>
            <p className="footer-text">Copyright 2023. Todos os direitos reservados.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
