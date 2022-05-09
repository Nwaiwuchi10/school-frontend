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

const TeacherSignup = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [classes, setClasses] = useState("");
  const [roles, setRoles] = useState("");
  const [formTeacher, setFormTeacher] = useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");

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

  const submitHandler = (e) => {
    e.preventDefault();
    setLoading(true);
    const data = {
      email: email,
      name: name,
      subject: subject,
      classes: classes,
      formTeacher: formTeacher,
      roles: roles,
      phoneNumber: phoneNumber,
      password: password,
    };

    const headers = {
      "Custom-Header": "xxxx-xxxx-xxxx-xxxx",
      // "Content-Type": "application/json",
      // Accept: "application/json",
      // body: JSON.stringify(data),
    };

    axios
      .post("/api/staffusers", data, headers)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        if (res.data.hasError === false) {
          setEmail("");
          setFormTeacher("");
          setClasses("");
          setName("");
          setRoles("");
          setPhoneNumber("");
          setSubject("");
          setPassword("");

          const items = data;
          localStorage.setItem("Teacher-Info", JSON.stringify(items));

          //   localStorage.setItem("token", res.data.token);
          //   localStorage.setItem("name", res.data.name);
          //   localStorage.setItem("id", res.data._id);
          //   localStorage.setItem("email", res.data.email);
          //   localStorage.setItem("formTeacher", res.data.formTeacher);
          //   localStorage.setItem("isAdmin", res.data.isAdmin);
          //   localStorage.setItem("classes", res.data.classes);
          //   localStorage.setItem("subject", res.data.subject);

          console.log(res.data);
          toast.success("SignUp successful");
          navigate("/");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("SignUp failed");
      });
  };

  return (
    // <div className="split">
    <FormContainer>
      <h1>SignUp </h1>
      {loading && <CircularIndeterminate />}
      <Form onSubmit={submitHandler}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter your Email Address "
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Name "
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="subject">
          <Form.Label>Subject</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter List of subjects you teach "
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="classes">
          <Form.Label>Classes</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter Classes you Teach "
            value={classes}
            onChange={(e) => setClasses(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Form.Group controlId="phoneNumber">
          <Form.Label>PhoneNumber</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Phone Number "
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="formTeacher">
          <Form.Check
            type="checkbox"
            label="Are You A Form Teacher"
            checked={formTeacher}
            onChange={(e) => setFormTeacher(e.target.checked)}
          ></Form.Check>
        </Form.Group>

        <Form.Group controlId="roles">
          <Form.Label>Roles</Form.Label>
          <div
            className="backdrop"
            placeholder="Enter your Roles "
            onClick={() => setRoles(false)}
          ></div>
          <select className="select" onChange={(e) => setRoles(e.target.value)}>
            <option value="Teacher">Teacher</option>
            <option value="Principal">Principal</option>
            <option value="HOD">HOD</option>
          </select>
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

        <Button type="submit" variant="primary">
          SignUp In
        </Button>
      </Form>
      <Row className="py-3">
        <Col>
          New Teacher?<Link to="/teachersignup">Signup </Link>{" "}
        </Col>
      </Row>
    </FormContainer>
    // </div>
  );
};

export default TeacherSignup;
