import React from "react";

import { Button, Image, Row, Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import "./Welcome2.css";

const Welcome2 = () => {
  return (
    <div>
      <div
        className="space-div"
        style={{
          display: "flex",
          justifyContent: "space around",

          margin: "auto",
          marginTop: "30px",
        }}
      >
        <div
          className="bit"
          style={{
            width: "70%",
            height: "auto",
            font: "20px",
            padding: "50px",
          }}
        >
          <Col>
            {" "}
            <h1 className="feed-h2">Welcome To Praise-El Schools</h1>
          </Col>

          <Col className="text-center py-3">
            {" "}
            Emerald School was established in 1995 starting with Emerald Nursery
            and Primary School, Lagos, Nigeria. Our Aim at Emerald School is to
            be widely acclaimed locally and internationally as a school that
            trains and turns out students who have been adequately prepared for
            tertiary education and life. Our Mission Statement is “To produce
            the total child through a holistic education programme that
            benchmarks best practices while being socially responsible.”{" "}
          </Col>

          <Link to="/admissionportal" className="heronav">
            <Button
              style={{
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="btn-block"
              type="button"
            >
              Register With Us
            </Button>
          </Link>
        </div>
        <div
          className="first-img"
          style={{
            width: "50%",
          }}
        >
          <Slide right>
            <Image
              src="https://static9.depositphotos.com/1037987/1188/i/600/depositphotos_11880463-stock-photo-portrait-of-group-of-teenage.jpg"
              alt="hero"
              fluid
              thumbnail
            />
          </Slide>
        </div>
      </div>
      <div
        className="space-div"
        style={{
          display: "flex",
          justifyContent: "space around",

          margin: "auto",
        }}
      >
        <div
          className="bit"
          style={{
            width: "50%",
            height: "auto",
            padding: "50px",
          }}
        >
          <Col>
            {" "}
            <h1 className="feed-h2">Apply for Admission</h1>
          </Col>

          <Col className="text-center py-3">
            {" "}
            As one of the Leading International Schools in Nigeria and Africa,
            we produce a total child through a holistic educational programme
            that benchmarks best practices while being socially responsible.
            Admission into 2021/2022 Academic Session is Ongoing.
          </Col>

          <Link to="/admissionportal" className="heronav">
            <Button
              style={{
                display: "flex",
                marginLeft: "auto",
                marginRight: "auto",
              }}
              className="btn-block"
              type="button"
            >
              Apply
            </Button>
          </Link>
        </div>
        <div
          className="first-img"
          style={{
            width: "50%",
          }}
        >
          <Slide right>
            <Image
              src="https://static9.depositphotos.com/1037987/1188/i/600/depositphotos_11880463-stock-photo-portrait-of-group-of-teenage.jpg"
              alt="hero"
              fluid
              thumbnail
            />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Welcome2;
