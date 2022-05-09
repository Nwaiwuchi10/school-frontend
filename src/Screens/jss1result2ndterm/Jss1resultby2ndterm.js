import React from "react";
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import CheckoutSteps from "../../Components/CheckoutSteps";

import FormContainer from "../../Components/FormContainer";

const Jss1resultby2ndterm = () => {
  return (
    <div
      style={{
        height: "60vh",
        border: "1px solid darkblue",
        borderRadius: "8px",
      }}
    >
      <CheckoutSteps step1 step2 step3 step4 />
      <FormContainer>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          Check Result
        </h1>

        <DropdownButton
          style={{ display: "flex", justifyContent: "center" }}
          id="dropdown-basic-button"
          title="Select Your Class"
        >
          <Row>
            <Col>JSS1</Col>
          </Row>
          <Link to="/2ndterm2022">
            {" "}
            <Dropdown.Item href="#/action-1">2022</Dropdown.Item>
          </Link>
          <Link to="/2ndterm2021">
            {" "}
            <Dropdown.Item href="#/action-1">2021</Dropdown.Item>
          </Link>
          <Link to="/2ndterm2020">
            {" "}
            <Dropdown.Item href="#/action-1">2020</Dropdown.Item>
          </Link>
          <Link to="/2ndterm2019">
            {" "}
            <Dropdown.Item href="#/action-1">2019</Dropdown.Item>
          </Link>
          <Row>
            <Col>JSS2</Col>
          </Row>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2022</Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2021</Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2020</Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2019</Dropdown.Item>
          </Link>
          <Row>
            <Col>JSS3</Col>
          </Row>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2022</Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2021</Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2020</Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2019</Dropdown.Item>
          </Link>
          <Row>
            <Col>SS1</Col>
          </Row>
          <Link to="/SS1">
            {" "}
            <Dropdown.Item href="#/action-1">2022</Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2021</Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2020</Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2019</Dropdown.Item>
          </Link>
          <Row>
            <Col>SS2</Col>
          </Row>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2022</Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2021</Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2020</Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1">2019</Dropdown.Item>
          </Link>
        </DropdownButton>
      </FormContainer>
    </div>
  );
};

export default Jss1resultby2ndterm;
