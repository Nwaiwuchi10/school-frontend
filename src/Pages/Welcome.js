import React from "react";
import { Button, Col, Image } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import { Link } from "react-router-dom";
import "./Welcome.css";

const Welcome = () => {
  return (
    <div className="home-body">
      <div className="first">
        <div>
          <div>
            <h1 className="feed-h2">Welcome To Praise-El Schools</h1>

            <Col className="text-center py-3" style={{ width: "95%" }}>
              Emerald School was established in 1995 starting with Emerald
              Nursery and Primary School, Lagos, Nigeria. Our Aim at Emerald
              School is to be widely acclaimed locally and internationally as a
              school that trains and turns out students who have been adequately
              prepared for tertiary education and life. Our Mission Statement is
              “To produce the total child through a holistic education programme
              that benchmarks best practices while being socially responsible.”
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
        </div>

        <div className="first-img">
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
      <hr />
      <div className="first">
        <div>
          <div>
            <h1 className="feed-h2">Apply for Admission</h1>
            <Col className="text-center py-3" style={{ width: "95%" }}>
              As one of the Leading International Schools in Nigeria and Africa,
              we produce a total child through a holistic educational programme
              that benchmarks best practices while being socially responsible.
              Admission into 2021/2022 Academic Session is Ongoing.
            </Col>
            <Link to="/admissionportal" className="heronav">
              {" "}
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
              </Button>{" "}
            </Link>
          </div>
        </div>
        {/* <div className="homebodysecondimage">
          <div>
            <Slide left>
              <Image
                src="https://i.guim.co.uk/img/static/sys-images/Education/Pix/cartoons/2014/9/19/1411127617824/How-to-choose-a-secondary-011.jpg?width=465&quality=45&auto=format&fit=max&dpr=2&s=d8ab5f82e77a4e93ee21a662f16b6ed8"
                thumbnail
              />
            </Slide>
          </div>
        </div> */}
        <div className="first-img">
          <Slide left>
            <Image
              src="https://static9.depositphotos.com/1037987/1188/i/450/depositphotos_11880191-stock-photo-teenage-student-answering-question-studying.jpg"
              thumbnail
              fluid
            />
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
