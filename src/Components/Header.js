import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

import { LinkContainer } from "react-router-bootstrap";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const logout2 = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("name", "");
    localStorage.setItem("id", "");
    localStorage.setItem("email", "");
    localStorage.setItem("pic", "");
    localStorage.setItem("admin", "");

    navigate("/teacherslogin");
  };
  const logout = () => {
    localStorage.setItem("token", "");
    localStorage.setItem("name", "");
    localStorage.setItem("id", "");
    localStorage.setItem("email", "");
    localStorage.setItem("pic", "");

    navigate("/login");
  };
  // const id = localStorage.getItem("id");
  const teacher = localStorage.getItem("name1");
  // const teacher = JSON.parse(localStorage.getItem("Staff-Info"));
  const userInfo = localStorage.getItem("name");
  const ref = () => {
    window.location.href = "https://www.youtube.com/watch?v=5fm8bUWS9oU";
  };
  return (
    <div>
      <Navbar
        variant="dark"
        expand="lg"
        collapseOnSelect
        style={{ background: "#1e2a34" }}
      >
        <Container>
          <Link to="/" style={{ textDecoration: "none" }}>
            <Navbar.Brand href="#home">Home</Navbar.Brand>{" "}
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Link to="/admissionportal" style={{ textDecoration: "none" }}>
                {" "}
                <Nav.Link href="#link">Admission Portal</Nav.Link>
              </Link>
              {teacher ? (
                <NavDropdown
                  style={{ color: "white" }}
                  title={localStorage.getItem("name1")}
                  id="basic-nav-dropdown"
                >
                  <NavDropdown.Item href="#action/3.3">
                    Online Teaching
                  </NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout2}>Log Out</NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/teacherslogin">
                  <Nav.Link>Teacher</Nav.Link>
                </LinkContainer>
              )}
              {localStorage.getItem("isAdmin") === "true" && (
                <NavDropdown title="isAdmin" id="adminmenu">
                  <Link to="/getclasslist" style={{ textDecoration: "none" }}>
                    {" "}
                    <NavDropdown.Item href="#action/3.2">
                      Get Results
                    </NavDropdown.Item>
                  </Link>
                  <Link to="/upload" style={{ textDecoration: "none" }}>
                    {" "}
                    <NavDropdown.Item href="#action/3.2">
                      Upload Result
                    </NavDropdown.Item>
                  </Link>
                  <Link to="/signresult" style={{ textDecoration: "none" }}>
                    {" "}
                    <NavDropdown.Item href="#action/3.2">
                      Sign Result
                    </NavDropdown.Item>
                  </Link>
                </NavDropdown>
              )}
              {userInfo ? (
                <NavDropdown
                  style={{ color: "white" }}
                  title={localStorage.getItem("name")}
                  id="basic-nav-dropdown"
                >
                  <Link to="/outline" style={{ textDecoration: "none" }}>
                    {" "}
                    <NavDropdown.Item href="#action/3.1">
                      School Information
                    </NavDropdown.Item>
                  </Link>
                  <Link to="/checkresult" style={{ textDecoration: "none" }}>
                    {" "}
                    <NavDropdown.Item href="#action/3.2">
                      CheckResult
                    </NavDropdown.Item>
                  </Link>

                  <NavDropdown.Item
                    href="#action/3.3"
                    className="text-center py-3"
                    style={{ cursor: "pointer", width: "auto" }}
                    onClick={ref}
                  >
                    Online Learning
                  </NavDropdown.Item>

                  <NavDropdown.Divider />
                  <NavDropdown.Item onClick={logout} href="#action/3.4">
                    Log Out
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>Student</Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
