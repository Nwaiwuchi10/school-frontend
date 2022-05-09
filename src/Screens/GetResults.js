import React, { useEffect, useState } from "react";
import { LinkContainer } from "react-router-bootstrap";
import { Table, Button, Row, Col, Container } from "react-bootstrap";
import Message from "../Components/Message";
import CircularIndeterminate from "../Components/Progress";
// import Paginate from "../Components/Paginate";

import { FaEdit, FaPlus, FaTrash } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const GetResults = () => {
  const navigate = useNavigate();
  // const { id } = useParams();
  const id = localStorage.getItem("id");
  const [vendors, setVendors] = useState([]);
  const [loading, setLoading] = useState(true);

  const [error, setError] = useState(true);

  useEffect(() => {
    axios.get("/api/jss1results").then((response) => {
      if (!response.data.hasError) {
        setVendors(response.data.jss1results);
        setLoading(false);
        setError(false);
      }
    });
    // if (!userInfo.isAdmin) {
    //   history.push("/login");
    // }
    // if (successCreate) {
    //   history.push(`/admin/product/${createdProduct._id}/edit`);
    // } else {
    //   dispatch(listProducts("", pageNumber));
    // }
  }, []);

  const deleteHandler = (id) => {
    if (window.confirm("Are you sure")) {
      //Delete Products
    }
  };
  const createProductHandler = () => {
    // CREATE PRODUCT
    navigate(`/admin/jss1results/${id}/edit`);
  };

  return (
    <>
      <Container>
        <Row className="align-items-center">
          <Col>
            <h1>School Results</h1>
          </Col>
          <Col className="text-right">
            <Button className="my-3" onClick={createProductHandler}>
              <FaPlus /> Upload Result
            </Button>
          </Col>
        </Row>

        <>
          <Table striped bordered hover responsive className="table-sm">
            <thead>
              <tr>
                <th>NAME</th>
                <th>Registration Number</th>
                <th>Class</th>
                <th>Term</th>
                <th>Year</th>
                <th>CRK</th>
                <th>English</th>
                <th>Health Science</th>
                <th>Igbo igboLanguage</th>
                <th>Mathematics</th>
                <th>Basic Science</th>
                <th>Grade</th>
                <th>Comment</th>
              </tr>
            </thead>
            {loading ? (
              <CircularIndeterminate />
            ) : error ? (
              <Message variant="danger">Failed</Message>
            ) : (
              <tbody>
                {vendors.map((product) => (
                  <tr key={product._id}>
                    <Link to={`/jss1results/${product._id}`}>
                      <td>{product.name}</td>
                    </Link>
                    <td> {product.registrationNumber}</td>
                    <td> {product.classes}</td>
                    <td>{product.term}</td>
                    <td>{product.year}</td>
                    <td>{product.CRK}</td>
                    <td>{product.english}</td>
                    <td>{product.healthScience}</td>
                    <td>{product.igboLanguage}</td>
                    <td>{product.mathematics}</td>
                    <td>{product.basicScience}</td>
                    <td>{product.grade}</td>
                    <td>{product.comment}</td>

                    <td>
                      <LinkContainer
                        to={`/admin/jss1results/${product._id}/edit`}
                      >
                        <Button variant="light" className="btn-sm">
                          <FaEdit />
                        </Button>
                      </LinkContainer>
                      <Button
                        variant="danger"
                        className="btn-sm"
                        onClick={() => deleteHandler()}
                      >
                        <FaTrash />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </Table>
          {/* <Paginate pages={pages} page={page} isAdmin={true} /> */}
        </>
      </Container>
    </>
  );
};

export default GetResults;
