import React, { useEffect, useState } from "react";

import { Table, Row, Col, Container, Image } from "react-bootstrap";
// import SignaturePad from "react-signature-canvas";
import "../Jss1result.css";
// import { useReactToPrint } from "react-to-print";
// import Paginate from "../Components/Paginate";
// import ReactToPrint from "react-to-print";

import axios from "axios";
import { useParams } from "react-router-dom";

// import Signature from "../Components/Signature";

const Resultdetails2022 = () => {
  // const navigate = useNavigate();
  // const componentRef = useRef();
  // let sigPad = useRef({});
  // let data = "";

  const { id } = useParams();
  const [data, setData] = useState([]);

  // function clear() {
  //   sigPad.current.clear();
  // }

  // function save() {
  //   data = sigPad.current.toDataURL();
  // }

  // function show() {
  //   sigPad.current.fromDataURL(data);
  // }

  // const puyol = JSON.parse(localStorage.getItem("Jss1resultdetails"));

  useEffect(() => {
    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };
    axios
      .get(`/api/jss1results2ndterm/${id}`, {
        headers: headers,
      })
      .then((response) => {
        if (response.data) {
          setData(response.data);
          console.log(response.data);

          localStorage.setItem(
            "ss1resultdetails",
            JSON.stringify(response.data)
          );
        }
      });
  }, [id]);

  let items = JSON.parse(localStorage.getItem("cart"));
  if (!items) {
    const item = {
      id: data.id,
      image: data.image,
      name: data.name,
      classes: data.prices,
      registrationNumber: data.registrationNumber,
      CRK: data.CRK,
      english: data.english,
      healthScience: data.healthScience,
      basicScience: data.basicScience,
      igboLanguage: data.igboLanguage,

      mathematics: data.mathematics,
      comment: data.comment,
      grade: data.grade,
      year: data.year,
      term: data.term,
    };
    localStorage.setItem("cart", JSON.stringify([item]));
  } else {
    let items = JSON.parse(localStorage.getItem("cart"));
    for (let i = 0; i < items.length; i++) {
      if (items[i].id === data.id) {
        console.log("item exists");
      }
    }
    const item = {
      id: data.id,
      image: data.image,
      name: data.name,
      classes: data.prices,
      registrationNumber: data.registrationNumber,
      CRK: data.CRK,
      english: data.english,
      healthScience: data.healthScience,
      basicScience: data.basicScience,
      igboLanguage: data.igboLanguage,

      mathematics: data.mathematics,
      comment: data.comment,
      grade: data.grade,
      year: data.year,
      term: data.term,
    };
    const all = [...items, item];
    localStorage.setItem("cart", JSON.stringify(all));
    console.log(items);
  }

  // const handlePrint = useReactToPrint({
  //   content: () => componentRef.current,
  // });

  return (
    <Container
      style={{
        width: "100%",
        height: "120vh",
        border: "3px solid whitesmoke",
        borderRadius: "10px",
      }}
    >
      <div>
        <Row className="align-items-center">
          <Col>
            <h1 style={{ fontSize: "30px", textAlign: "center" }}>
              PRAISE-EL SCHOOLS
            </h1>
          </Col>
        </Row>

        <Row className="align-items-center">
          <Col>
            <h1
              style={{
                fontSize: "16px",
                textAlign: "center",
                color: "black",
              }}
            >
              Affilated To:<strong>CBSE Board/Affilation No:23456Y23</strong>
            </h1>
          </Col>
        </Row>
        <Row className="align-items-center">
          <Col>
            <h1
              style={{
                fontSize: "15px",
                textAlign: "center",
                color: "#1e2a34",
              }}
            >
              Call:<strong>+2348136757488</strong>
            </h1>
          </Col>
        </Row>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <Row>
            <Col>
              <Image
                style={{ display: "flex" }}
                src="data:image/png;base64,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"
                alt="bt"
              />
            </Col>
          </Row>
          <Row
            style={
              {
                //   display: "inline",
                //   float: "right",
              }
            }
          >
            <Col>
              <Image
                style={{
                  width: "25mm",
                  height: "35mm",
                  marginRight: "10px",
                }}
                src={data.image}
                alt="bt"
              />
            </Col>
          </Row>
        </div>
        <span style={{ display: "inline", float: "right" }}>
          <strong> Student Passport</strong>
        </span>

        <Row>
          <Col style={{ position: "relative", left: "-13px" }}>
            Name: <strong>{data.name}</strong>
          </Col>
        </Row>
        <Row>
          <Col>
            Class:
            <strong>{data.classes}</strong>{" "}
          </Col>
        </Row>
        <Row>
          <Col>
            Student Registration Number:
            <strong>{data.registrationNumber}</strong>{" "}
          </Col>
        </Row>
        <div className="flex">
          <Row>
            <Col>
              Exam Year:
              <strong>{data.year}</strong>{" "}
            </Col>
          </Row>
          <Row>
            <Col>
              Term:
              <strong>{data.term}</strong>{" "}
            </Col>
          </Row>
        </div>
      </div>

      <br />

      <Table striped bordered hover responsive className="table-sm">
        <thead>
          <tr>
            <th>Mathematics</th>
            <th>English</th>
            <th>Health Science</th>
            <th>C.R.K</th>
            <th>igboLanguage</th>
            <th>Basic Science</th>
            <th>Total Score</th>
            <th>Total Average</th>
            <th>Position</th>

            {/* <th></th> */}
          </tr>
        </thead>

        <tbody>
          <tr key={data._id}>
            <td> {data.mathematics}</td>
            <td> {data.english}</td>
            <td> {data.healthScience}</td>
            <td> {data.CRK}</td>
            <td> {data.igboLanguage}</td>
            <td> {data.basicScience}</td>
            <td> {data.TotalScore}</td>
            <td> {data.TotalAverage}</td>
            <td> {data.Position}</td>
            <td>
              {/* {data
                .reduce(
                  (acc, data) =>
                    acc +
                    data.mathematics +
                    data.english +
                    data.healthScience +
                    data.CRK +
                    data.igboLanguage +
                    data.basicScience,
                  0
                )
                .toFixed(2)} */}
            </td>
            <td>
              {/* {data
                .reduce(
                  (acc, product) =>
                    acc +
                    product.mathematics +
                    product.english +
                    product.healthScience +
                    product.CRK +
                    product.igboLanguage +
                    product.basicScience / 6,
                  0
                )
                .toFixed(2)} */}
            </td>
          </tr>
        </tbody>
      </Table>
      <br />

      <div key={data._id}>
        <Row>
          <Col>
            Grade: <strong>{data.grade}</strong>
          </Col>
        </Row>
        <Row>
          <Col>
            Comment:
            <strong>{data.comment}</strong>{" "}
          </Col>
        </Row>
      </div>

      <br />
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "35px",
        }}
      >
        <Row>
          {/* <SignaturePad ref={sigPad} penColor="black" /> */}
          <Col
            style={{
              width: "150px",
              height: "1px",
              background: "black",
            }}
          ></Col>
        </Row>
        <Row>
          <Col
            style={{
              width: "150px",
              height: "1px",
              background: "black",
            }}
          ></Col>
        </Row>
        <Row>
          <Col
            style={{
              width: "120px",
              height: "1px",
              background: "black",
            }}
          ></Col>
        </Row>
      </div>
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        <Row>
          <Col>Form Teacher</Col>
        </Row>

        <Row>
          <Col>Director</Col>
        </Row>

        <Row>
          <Col>HOD</Col>
        </Row>
      </div>
      <Row className="align-items-center">
        {/* <SignaturePad ref={sigPad} penColor="black" /> */}
        <Col>
          <h1
            style={{
              fontSize: "16px",
              textAlign: "center",
              color: "black",
              marginTop: "40px",
            }}
          >
            Address:<strong>No:23 W.B.H.E New Owerri, Imo State</strong>
          </h1>
        </Col>
      </Row>
      <Row className="align-items-center">
        {/* <SignaturePad ref={sigPad} penColor="black" /> */}
        <Col>
          <h1
            style={{
              fontSize: "15px",
              textAlign: "center",
              color: "#1e2a34",
            }}
          >
            email:
            <strong style={{ color: "blue" }}>
              www.praiseelschols@gmail.com
            </strong>
          </h1>
        </Col>
      </Row>
      {/* <div>
        <ReactToPrint
          trigger={() => <button>Print this out!</button>}
          content={() => componentRef.current}
        />
        <div ref={componentRef} />
      </div> */}
      {/* <Row>
              <Col>
                <Button onClick={handlePrint}>Print </Button>
                <div ref={componentRef}></div>
              </Col>
            </Row> */}
      {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
    </Container>
  );
};

export default Resultdetails2022;
