import React, { useEffect, useState } from "react";

import { Table, Row, Col, Container } from "react-bootstrap";

// import Paginate from "../Components/Paginate";

// import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";

import { Link } from "react-router-dom";

const Result1stterm2021 = () => {
  // const { id } = useParams();
  const [dj, setDj] = useState([]);

  useEffect(() => {
    axios.get("/api/jss1results/year/2021").then((response) => {
      if (!response.data.hasError) {
        setDj(response.data.jss1results);
        console.log(response.data);
        // localStorage.setItem("id", data._id);
        localStorage.setItem("Jss1result", JSON.stringify(response.data));
      }
    });
  }, []);

  return (
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
              <th>Class</th>
              <th>Term</th>
              <th>Year</th>

              {/* <th></th> */}
            </tr>
          </thead>

          <tbody>
            {dj.map((product) => (
              <tr key={product._id}>
                <Link to={`/jss1results/${product._id}`}>
                  {" "}
                  <td>{product.name}</td>{" "}
                </Link>{" "}
                <td> {product.registrationNumber}</td>
                <td> {product.classes}</td>
                <td> {product.term}</td>
                <td> {product.year}</td>
              </tr>
            ))}
          </tbody>
        </Table>
        {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
      </>
    </Container>
  );
};

export default Result1stterm2021;
