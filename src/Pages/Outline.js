import React from "react";
import "./Outline.css";
import {
  FaCheck,
  FaBookReader,
  FaUserGraduate,
  FaCashRegister,
} from "react-icons/fa";
import { Button, Row } from "react-bootstrap";

import { useNavigate } from "react-router-dom";

const Outline = () => {
  const navigate = useNavigate();

  const checkout = () => {
    navigate("/registernumber");
  };
  const check = () => {
    navigate("/login");
  };
  return (
    <div className="skiller-div">
      <Row>
        <h1 className="text-center py-3" style={{ fontSize: "25px" }}>
          Welcome to our e-portal
        </h1>
      </Row>
      <div className="skiller-col">
        <div className="skill-fever1">
          <div className="skiller-fa-div">
            <FaBookReader />{" "}
          </div>
          <div className="skiller-forum">Result Announcements</div>
          <div className="skiller-fun">
            Dear Parents, Please Note that 2021/2022 second term results have
            been released. You can check click on check result.
          </div>
          <Button className="btn-block-for" type="button">
            More Info
          </Button>
        </div>
        <div className="skill-fever2">
          <div className="skiller-fa-div">
            <FaCheck />{" "}
          </div>
          <div className="skiller-forum"> Check Results</div>
          <div className="skiller-fun">
            Login to check your result, ensure to confirm your registration to
            avoid any issues.. Thanks
          </div>
          <br />
          <Button className="btn-block-fo" type="button" onClick={check}>
            Click Here To LOgin
          </Button>
        </div>
        <div className="skill-fever3">
          <div className="skiller-fa-div">
            <FaUserGraduate />{" "}
          </div>
          <div className="skiller-forum">Don't Know Your RegNumber?</div>
          <div className="skiller-fun">
            Students can confirm their registration number here, Click the
            button below
          </div>
          <br />
          <Button className="btn-block-fo" type="button" onClick={checkout}>
            Click Here For More Enquiry
          </Button>
        </div>
        <div className="skill-fever4">
          <div className="skiller-fa-div">
            <FaCashRegister style={{ color: "#1e2a34" }} />{" "}
          </div>
          <div className="skiller-forum">Payment Of School Fees</div>
          <div className="skiller-fun">
            Information on Junior Secondary & Senior Secondary School fees
          </div>
          <br />
          <Button className="btn-block-for" type="button">
            Click Here For More Enquiry
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Outline;
