import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps2 = ({ step1, step2, step3 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/upload">
            <Nav.Link>1st Term Result</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>1st Term Result</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/upload2ndtermjss1">
            <Nav.Link>2nd Term Result</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>2nd Term Result</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/upload3rdtermjss1">
            <Nav.Link>3rd Term Result</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>3rd Term Result</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps2;
