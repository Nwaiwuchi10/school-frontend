import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import VisibilityIcon from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { Form, Button, Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormContainer from "../Components/FormContainer";

import CircularIndeterminate from "../Components/Progress";
import axios from "axios";

toast.configure();

const StudentSignup = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmpassword] = useState("");

  const [mode, setMode] = useState("password");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // if (localStorage.getItem("user-info")) {
    //   navigate("/homescreen");
    // }
  }, []);
  const handleClick = () => {
    if (mode === "password") {
      setMode("text");
    } else {
      setMode("password");
    }
  };
  const handleClick2 = () => {
    if (mode === "password") {
      setMode("text");
    } else {
      setMode("password");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      registrationNumber: registrationNumber,
      name: name,
      password: password,
      confirmpassword: confirmpassword,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      // "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("/api/users", data, headers)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data.hasError === false) {
          setRegistrationNumber("");
          setName("");
          setPassword("");
          setConfirmpassword("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          localStorage.setItem("token", res.data.token);
          localStorage.setItem("name", res.data.name);
          localStorage.setItem("id", res.data._id);
          localStorage.setItem(
            "registrationNumber",
            res.data.registrationNumber
          );

          console.log(res.data);
          toast.success("Sign Up successful");
          navigate("/checkresult");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Sign Up failed");
      });
  };

  return (
    // <div className="split">
    <FormContainer>
      <h1>Sign Up</h1>
      {loading && <CircularIndeterminate />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="name">
          <Form.Label>Student Full Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Full Name  "
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="registrationNumber">
          <Form.Label>Student Registration Number</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your school registrationNumber  "
            value={registrationNumber}
            onChange={(e) => setRegistrationNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type={mode}
            required
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          ></Form.Control>
          {mode === "password" ? (
            <VisibilityIcon className="icon" onClick={handleClick} />
          ) : (
            <VisibilityOff className="icon" onClick={handleClick} />
          )}
        </Form.Group>
        <Form.Group controlId="confirmpassword">
          <Form.Label>Confirm Password</Form.Label>
          <Form.Control
            type={mode}
            required
            placeholder="Enter password"
            value={confirmpassword}
            onChange={(e) => setConfirmpassword(e.target.value)}
          ></Form.Control>
          {mode === "password" ? (
            <VisibilityIcon className="icon2" onClick={handleClick2} />
          ) : (
            <VisibilityOff className="icon2" onClick={handleClick2} />
          )}
        </Form.Group>
        <Button type="submit" variant="primary">
          Sign Up
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          A student?<Link to="/login">Login </Link>{" "}
        </Col>
      </Row>
    </FormContainer>
    // </div>
  );
};

export default StudentSignup;
