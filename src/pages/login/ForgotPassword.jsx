import React, { useContext, useState } from "react";
import { AuthContext } from "../../provider/AuthProvider";
import { Button, Container, Form } from "react-bootstrap";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const [emailSent, setEmailSent] = useState(false);
  const [error, setError] = useState("");

  const { recoverPassword } = useContext(AuthContext);

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    recoverPassword(auth, email)
      .then(() => {
        setEmailSent(true);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      {emailSent ? (
        <p>An email has been sent to your email address.</p>
      ) : (
        <Form
          onSubmit={handleSubmit}
          className="w-100 mx-auto"
          style={{ maxWidth: "30rem" }}
        >
          <h4>Forgot Password</h4>
          <span>Give us your email</span>
          <Form.Control
            type="email"
            id="email"
            value={email}
            onChange={handleEmailChange}
          />
          <Button type="submit" className="mt-4">
            Send Email
          </Button>
          {error && <p>{error}</p>}
        </Form>
      )}
    </Container>
  );
};

export default ForgotPassword;
