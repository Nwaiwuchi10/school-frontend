import axios from "axios";

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormContainer from "../Components/FormContainer";
import CircularIndeterminate from "../Components/Progress";
import { useNavigate } from "react-router-dom";
import Message from "../Components/Message";

toast.configure();
const Createresult2ndterm = () => {
  // const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");

  const [image, setImage] = useState("");
  const [classes, setClasses] = useState("");
  const [term, setTerm] = useState("");
  const [year, setYear] = useState("");
  const [cRK, setCRK] = useState("");
  const [basicScience, setBasicScience] = useState("");
  const [english, setEnglish] = useState("");
  const [totalScore, setTotalScore] = useState("");
  const [totalAverage, setTotalAverage] = useState("");
  const [position, setPosition] = useState("");
  const [healthScience, setHealthScience] = useState("");
  const [igboLanguage, setIgboLanguage] = useState("");
  const [uploading, setUploading] = useState(false);
  const [loading, setLoading] = useState(false);

  const [message, setMessage] = useState(false);

  useEffect(() => {}, []);
  const uploadFileHandler = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("image", file);
    setUploading(true);

    try {
      const config = {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      };

      const { data } = await axios.post(
        "http://localhost:3000/api/upload",
        formData,
        config
      );

      setImage(data);
      setUploading(false);
    } catch (error) {
      console.error(error);
      setUploading(false);
    }
  };
  const submitHandler = (e) => {
    e.preventDefault();
    // UPDATE PRODUCT
    setLoading(true);
    setMessage(true);
    const data = {
      registrationNumber: registrationNumber,
      cRK: cRK,
      basicScience: basicScience,
      english: english,
      healthScience: healthScience,
      igboLanguage: igboLanguage,
      image: image,
      name: name,
      classes: classes,
      term: term,
      year: year,
      TotalAverage: totalAverage,
      TotalScore: totalScore,
      Position: position,
    };

    const headers = {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
    };

    axios
      .post("/api/jss1results2ndterm", data, {
        headers: headers,
      })
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setMessage(false);
        if (res.data.hasError === false) {
          setRegistrationNumber("");

          setCRK("");
          setBasicScience("");
          setIgboLanguage("");
          setEnglish("");
          setHealthScience("");
          setName("");
          setClasses("");
          setTerm("");
          setYear("");
          setTotalAverage("");
          setTotalScore("");
          setPosition("");

          //   const items = data;
          //   localStorage.setItem("User-Info", JSON.stringify(items));

          //   localStorage.setItem("token", res.data.token);
          //   localStorage.setItem("name", res.data.name);
          //   localStorage.setItem("id", res.data._id);
          //   localStorage.setItem(
          //     "registrationNumber",
          //     res.data.registrationNumber
          //   );

          console.log(res.data);
          toast.success("Uploading successful");
          navigate("/");
        } else {
          toast.error(res.data.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        toast.error("Uploading failed");
      });
  };

  return (
    <>
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>

      <FormContainer>
        <h1>Createjss1results</h1>
        {loading && <CircularIndeterminate />}
        {message && <Message variant="danger">Error</Message>}

        {loading ? (
          <CircularIndeterminate />
        ) : message ? (
          <Message variant="danger">Error</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>registrationNumber</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Student registrationNumber
                "
                value={registrationNumber}
                onChange={(e) => setRegistrationNumber(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image url"
                value={image}
                onChange={(e) => setImage(e.target.value)}
              ></Form.Control>
              <input
                type="file"
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
              ></input>
              {uploading && <CircularIndeterminate />}
            </Form.Group>

            <Form.Group controlId="classes">
              <Form.Label>Class</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter student class"
                value={classes}
                onChange={(e) => setClasses(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="term">
              <Form.Label>Term</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter term"
                value={term}
                onChange={(e) => setTerm(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="year">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter Academic Year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group
              controlId="CRK
"
            >
              <Form.Label>CRK</Form.Label>
              <Form.Control
                type="text"
                placeholder="CRK
                "
                value={cRK}
                onChange={(e) => setCRK(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group
              controlId="basicScience
"
            >
              <Form.Label>BasicScience</Form.Label>
              <Form.Control
                type="text"
                placeholder="basicScience
                "
                value={basicScience}
                onChange={(e) => setBasicScience(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group
              controlId="english

"
            >
              <Form.Label>English</Form.Label>
              <Form.Control
                type="text"
                placeholder="english

                "
                value={english}
                onChange={(e) => setEnglish(e.target.value)}
              ></Form.Control>
            </Form.Group>
            <Form.Group
              controlId="healthScience
"
            >
              <Form.Label>healthScience</Form.Label>
              <Form.Control
                type="text"
                placeholder="healthScience
                "
                value={healthScience}
                onChange={(e) => setHealthScience(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group
              controlId="igboLanguage
"
            >
              <Form.Label>igboLanguage</Form.Label>
              <Form.Control
                type="text"
                placeholder="igboLanguage
                "
                value={igboLanguage}
                onChange={(e) => setIgboLanguage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group
              controlId="totalScore
"
            >
              <Form.Label>Total Score</Form.Label>
              <Form.Control
                type="text"
                placeholder="Total Score
                "
                value={totalScore}
                onChange={(e) => setTotalScore(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group
              controlId="totalAverage
"
            >
              <Form.Label>Total Average</Form.Label>
              <Form.Control
                type="text"
                placeholder="Total Average
                "
                value={totalAverage}
                onChange={(e) => setTotalAverage(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group
              controlId="position
"
            >
              <Form.Label>Position</Form.Label>
              <Form.Control
                type="text"
                placeholder="Position
                "
                value={position}
                onChange={(e) => setPosition(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit" variant="primary">
              Update
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  );
};

export default Createresult2ndterm;
