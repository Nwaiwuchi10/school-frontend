import React from "react";
import { Col, Dropdown, DropdownButton, Row } from "react-bootstrap";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import CheckoutSteps from "../Components/CheckoutSteps";

import FormContainer from "../Components/FormContainer";
import SearchBox from "../Components/SearchBox";

const CheckResult = () => {
  return (
    <div
      style={{
        height: "60vh",
        border: "1px solid darkblue",
        borderRadius: "8px",
      }}
    >
      <CheckoutSteps step1 step2 step3 step4 />
      {/* <SearchBox /> */}
      {/* <Route render={({ navigate }) => <SearchBox navigate={navigate} />} /> */}
      <FormContainer>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          CheckResult{" "}
        </h1>

        <DropdownButton
          style={{ display: "flex", justifyContent: "center" }}
          id="dropdown-basic-button"
          title="Select Your Class"
        >
          <Row>
            <Col className="text-center py-3" style={{ color: "green" }}>
              JSS1
            </Col>
          </Row>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2022
            </Dropdown.Item>
          </Link>
          <Link to="/result1stterm2021">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2021
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist3">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2020
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist5">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2019
            </Dropdown.Item>
          </Link>
          <Row>
            <Col className="text-center py-3" style={{ color: "green" }}>
              JSS2
            </Col>
          </Row>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2022
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2021
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2020
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2019
            </Dropdown.Item>
          </Link>
          <Row>
            <Col className="text-center py-3" style={{ color: "green" }}>
              JSS3
            </Col>
          </Row>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2022
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2021
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2020
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2019
            </Dropdown.Item>
          </Link>
          <Row>
            <Col className="text-center py-3" style={{ color: "green" }}>
              SS1
            </Col>
          </Row>
          <Link to="/SS1">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2022
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2021
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2020
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2019
            </Dropdown.Item>
          </Link>
          <Row>
            <Col className="text-center py-3" style={{ color: "green" }}>
              SS2
            </Col>
          </Row>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2022
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2021
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2020
            </Dropdown.Item>
          </Link>
          <Link to="/JSS1resultlist">
            {" "}
            <Dropdown.Item href="#/action-1" className="text-center py-3">
              2019
            </Dropdown.Item>
          </Link>
        </DropdownButton>
      </FormContainer>
    </div>
  );
};

export default CheckResult;
