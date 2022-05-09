import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/checkresult">
            <Nav.Link>1st Term Result</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>1st Term Result</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/jss1result2ndterm">
            <Nav.Link>2nd Term Result</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>2nd Term Result</Nav.Link>
        )}
      </Nav.Item>
      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/jss1result3rdterm">
            <Nav.Link>3rd Term Result</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>3rd Term Result</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
