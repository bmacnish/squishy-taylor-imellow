import React, { useState } from "react";
import "./Login.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const ENCODED_FAKE_PASSWORD = 'DHYHAHO BUCLPSLK'

export default function Login({ handleSubmit }) {
  const [password, setPassword] = useState();
  const [errors, setErrors] = useState(false);
  const [attempt, setAttempt] = useState(0)

  const handleChange = (event) => {
    const input = event.target.value;
    const lowercasedInput = input.toLowerCase();
    setPassword({ value: lowercasedInput });
  };

  const onSubmit = (event) => {
    setAttempt(attempt + 1)
    event.preventDefault();
    event.stopPropagation();
    setErrors(true);

    handleSubmit(password);
  };

  function clearErrors() {
    setErrors(false)
  }

  function Errors() {
    let errorMessage = ''

    if (errors) {
      if (password.value === ENCODED_FAKE_PASSWORD.toLowerCase()) {
        errorMessage = "You'll need to crack the code to find our our secrets.";

        return <div className="errorMessage">{errorMessage}</div>;
      }

      switch (true) {
        case (attempt < 3):
           errorMessage = "Wrong password, try again.";
        break
        case (attempt ===3):
          errorMessage = "Only card-carrying members have the key to crack our code.";
          break
        case (attempt === 4):
          errorMessage = "H is equal to A and S is equal to L";
          break
        default:
          errorMessage = "Don't forget the clues in the back of the scrapbook!";
          break
      }

      return <div className="errorMessage">{errorMessage}</div>;
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
              The password is {ENCODED_FAKE_PASSWORD}
            </p>
            <Form onSubmit={onSubmit}>
              <Form.Group controlId="formBasicPassword">
                <Form.Control
                  type="password"
                  placeholder="Password"
                  onChange={handleChange}
                  onFocus={clearErrors}
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
