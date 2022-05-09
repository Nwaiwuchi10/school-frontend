import axios from "axios";
import React, { useEffect, useState } from "react";
import { Dropdown, DropdownButton, Row } from "react-bootstrap";

import { Link } from "react-router-dom";

import FormContainer from "../Components/FormContainer";

const Reg = () => {
  const [bridals, setBridals] = useState([]);

  useEffect(() => {
    axios.get("/api/students/classes/JSS1B").then((response) => {
      if (!response.data.hasError) {
        setBridals(response.data.students);
      }
    });
    // axios.get("/api/vendors/categories/MC").then((response) => {
    //   if (!response.data.hasError) {
    //     setMC(response.data.vendors);
    //     setMcLoading(false);
    //     setError(false);
    //   }
    // });
  }, []);

  return (
    <div>
      <FormContainer>
        {/* <Col clasName="text-center py-3">Choose your class</Col> */}
        <Row
          style={{
            margin: "auto",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "auto",
            marginBottom: "auto",
            width: "250px",
            border: "1px solid #1e2a34",
            borderRadius: "10px",
          }}
        >
          {" "}
          Once you select your class, your class list will be displayed. You may
          search through your class list to find your registration
        </Row>

        <DropdownButton
          style={{ display: "flex", justifyContent: "center" }}
          id="dropdown-basic-button"
          title="Select Your Class"
        >
          <Link to="/JSS1A">
            {" "}
            <Dropdown.Item href="#/action-1">JSS1A</Dropdown.Item>
          </Link>
          <Link to="/JSS1B">
            <Dropdown.Item href="#/action-2">JSS1B</Dropdown.Item>
          </Link>
          <Link to="/JSS1C">
            <Dropdown.Item href="#/action-3">JSS1C</Dropdown.Item>
          </Link>
          <Link to="/JSS2A">
            {" "}
            <Dropdown.Item href="#/action-3">JSS2A</Dropdown.Item>
          </Link>{" "}
        </DropdownButton>

        {/* <Form.Select
          aria-label="Choose from the list"
          id="selectBox"
          value={selects}
          onChange={(e) => setSelects(e.target.value)}
        >
          <option>Open this select menu</option> <option> JSS1A </option>{" "}
          <option value="2">JSS1B</option> <option>JSS1C</option>
        </Form.Select> */}

        {/* <Button onClick={(e) => handleClick()}>{selects}</Button> */}
      </FormContainer>
    </div>
  );
};

export default Reg;
