import React, { useEffect, useState } from "react";
import { Table, Row, Col, Container, Image } from "react-bootstrap";
// import SignaturePad from "react-signature-canvas";

// import { useReactToPrint } from "react-to-print";
// import Paginate from "../Components/Paginate";

import axios from "axios";
import { useParams } from "react-router-dom";

export const ComponentToPrint = React.forwardRef((props, ref) => {
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
      .get(`/api/jss1results/${id}`, {
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
  return (
    <div ref={ref}>
      {" "}
      <Container
        style={{
          width: "100%",
          height: "140vh",
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
            <Image
              src="data:image/png;base64,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"
              style={{ width: "135px" }}
            />
            {/* <SignaturePad ref={sigPad} penColor="black" /> */}
          </Row>
          <Row>
            {" "}
            <Image
              src="data:image/png;base64,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"
              style={{ width: "145px" }}
            />
          </Row>
          <Row>
            {" "}
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbSKAuu4eadpoXnDJRwVa7Keoe_jtLI8IuCw&usqp=CAU"
              style={{ width: "145px" }}
            />
          </Row>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            marginTop: "5px",
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

        {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
      </Container>
    </div>
  );
});
