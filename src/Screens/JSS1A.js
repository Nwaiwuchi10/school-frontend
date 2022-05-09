import React, { useEffect, useState } from "react";

import { Table, Row, Col, Container } from "react-bootstrap";

// import Paginate from "../Components/Paginate";

import axios from "axios";

const JSS1A = () => {
  // const { id } = useParams();
  const [dj, setDj] = useState([]);

  useEffect(() => {
    axios.get("/api/students/classes/JSS1A").then((response) => {
      if (!response.data.hasError) {
        setDj(response.data.students);
      }
    });
  }, []);

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>JSS1A ClassList</h1>
          </Col>
        </Row>

        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>NAME</th>
                <th>Registration NUMBER</th>

                {/* <th></th> */}
              </tr>
            </thead>

            <tbody>
              {dj.map((products) => (
                <tr key={products._id}>
                  <td>{products.name}</td>
                  <td> {products.registrationNumber}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
        </>
      </Container>
    </>
  );
};

export default JSS1A;
