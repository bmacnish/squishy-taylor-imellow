import React, { useState } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Login({ handleSubmit }) {
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState(false);

  const handleChange = (event) => {
    const input = event.target.value;
    const lowercasedInput = input.toLowerCase();
    setPassword({ value: lowercasedInput });
  };

  const onSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();
    setErrors(true);

    handleSubmit(password);
  };

  function Errors() {
    if (errors) {
      return <div className="errorMessage">Wrong password, try again.</div>;
    } else {
      return <></>;
    }
  }

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
        integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
        crossorigin="anonymous"
      />
      <Container
        fluid
        className="loginWrapper"
        style={{
          width: "100vw",
        }}
      >
        <Row className="text-center passwordWrapper">
          <Col />
          <Col xs={12} sm={true}>
            <p>
              The meaning of the ZHEWXG PTMMEX is a puzzle, solve it to discover
              our password.
            </p>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
              </Form.Group>
              <Errors />
              <Button variant="secondary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col />
        </Row>
      </Container>
    </>
  );
}
