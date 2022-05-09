import React from "react";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import CheckoutSteps2 from "../Components/CheckoutSteps2";

import FormContainer from "../Components/FormContainer";

const CreateResultList = () => {
  return (
    <div
      style={{
        height: "60vh",
        border: "1px solid darkblue",
        borderRadius: "8px",
      }}
    >
      <CheckoutSteps2 step1 step2 step3 />
      <FormContainer>
        <h1 style={{ display: "flex", justifyContent: "center" }}>
          ClassList{" "}
        </h1>
        <DropdownButton
          style={{ display: "flex", justifyContent: "center" }}
          id="dropdown-basic-button"
          title="Select Your Class"
        >
          <Link to="/admin/jss1results1stterm">
            {" "}
            <Dropdown.Item href="#/action-1">JSS1</Dropdown.Item>
          </Link>
          <Link to="/JSS1Bresultlist">
            <Dropdown.Item href="#/action-2">JSS2</Dropdown.Item>
          </Link>
          <Link to="/JSS1C">
            <Dropdown.Item href="#/action-3">JSS3</Dropdown.Item>
          </Link>
          <Link to="/JSS2A">
            {" "}
            <Dropdown.Item href="#/action-3">SS1</Dropdown.Item>
          </Link>{" "}
          <Link to="/SS1">
            {" "}
            <Dropdown.Item href="#/action-3">SS2</Dropdown.Item>
          </Link>{" "}
        </DropdownButton>
      </FormContainer>
    </div>
  );
};

export default CreateResultList;
