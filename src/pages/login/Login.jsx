import { useContext, useState } from "react";
import { Container, Form, Button } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || emailError || !password || passwordError) {
      setError("Please fill out all required fields correctly.");
    } else {
      signIn(email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setSuccess(true); // set success message
          navigate(from, { replace: true });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if (errorCode === "auth/user-not-found") {
            alert(
              "Invalid email address. Please try again or register for an account."
            );
          } else {
            alert("An error occurred. Please try again later.");
          }
        });
    }
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (!e.target.value) {
      setEmailError("Email is required");
    } else if (!/\S+@\S+\.\S+/.test(e.target.value)) {
      setEmailError("Email is invalid");
    } else {
      setEmailError("");
    }
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
    if (!e.target.value) {
      setPasswordError("Password is required");
    } else if (e.target.value.length < 8) {
      setPasswordError("Password must be at least 8 characters");
    } else {
      setPasswordError("");
    }
  };

  // Recover password
  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <img
        src={logo}
        alt="Logo"
        style={{ maxWidth: "50%", marginBottom: "2rem" }}
      />
      <Form
        onSubmit={handleSubmit}
        className="w-100 mx-auto"
        style={{ maxWidth: "30rem" }}
      >
        {success && <p>Login successful!</p>}
        {error && <p>{error}</p>}
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={handleEmail}
          />
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePassword}
          />
        </Form.Group>

        <Button
          variant="primary"
          type="submit"
          className="mt-4"
          style={{ width: "100%" }}
        >
          Sign In
        </Button>

        <p className="mt-3 mb-0 text-center">
          Don't have an account?{" "}
          <Link to="/register">
            <u>Register</u>
          </Link>
        </p>
      </Form>

      <Link to={"/forgot"} onClick={toggleForgotPassword}>
        Forgot Password?
      </Link>
      {showForgotPassword && <ForgotPassword />}
    </Container>
  );
}

export default Login;
