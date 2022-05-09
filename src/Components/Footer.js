import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Footer = () => {
  const ref = () => {
    window.location.href =
      "https://web.facebook.com/chrysogonuschinemerem.nwaiwu";
  };
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">
            Copyright &copy; Praise-El Schools 2022
          </Col>
        </Row>
        <Row>
          <Col
            className="text-center py-3"
            style={{ cursor: "pointer" }}
            onClick={ref}
          >
            @DJ N'CHRYS Tech
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
