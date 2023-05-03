import { useState, useContext } from "react";
import {
  Container,
  Form,
  Button,
  FormGroup,
  FormLabel,
  FormControl,
  FormCheck,
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const { register, signInWithGitHub, signInWithGmail } =
    useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const action = e.target;

    // perform custom password checks
    if (password.length < 8) {
      setError("Password must be at least 8 characters long.");
      return;
    }
    if (!/\d/.test(password)) {
      setError("Password must contain at least one number.");
      return;
    }

    const data = {
      name,
      email,
      password,
      photoUrl,
    };
    console.log(data.name);

    if (!name) {
      setError("Please enter your name.");
      return;
    }

    if (!photoUrl) {
      setError("Please enter your profile photo url");
      return;
    }

    if (!email || !password) {
      setError("Please fill all the fields.");
      return;
    }
    register(email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        setEmail("");
        setPassword("");
        setError("");
        setSuccess(true);
        action.reset();
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          setError("The email address you entered is already in use.");
          setSuccess(false);
        } else {
          setError("An error occurred. Please try again later.");
        }
      });
  };

  const handleSignInWithGitHub = async () => {
    try {
      await signInWithGitHub();

      setSuccess(true);
      // Do something after successful sign-in
    } catch (error) {
      console.log(error);
    }
  };

  const handleSignInWithGmail = async () => {
    try {
      await signInWithGmail();

      setSuccess(true);
      // Do something after successful sign-in
    } catch (error) {
      console.log(error);
    }
  };

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked); // update state when checkbox is checked/unchecked
  };

  return (
    <Container className="d-flex flex-column align-items-center my-5">
      <h1 className="mb-4">Register</h1>
      <Form
        onSubmit={handleSubmit}
        className="w-100 mx-auto"
        style={{ maxWidth: "30rem" }}
      >
        {error && <p className="text-danger">{error}</p>}
        {success && <p className="text-success">Registration successful!</p>}
        <FormGroup controlId="formName">
          <FormLabel>Name</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="formEmail">
          <FormLabel>Email address</FormLabel>
          <FormControl
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="formPassword">
          <FormLabel>Password</FormLabel>
          <FormControl
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </FormGroup>

        <FormGroup controlId="formPhotoUrl">
          <FormLabel>Photo URL</FormLabel>
          <FormControl
            type="text"
            placeholder="Enter photo URL"
            value={photoUrl}
            className="mb-4"
            onChange={(e) => setPhotoUrl(e.target.value)}
          />
        </FormGroup>

        <FormCheck
          className="mb-3"
          label="I accept the terms and conditions"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        <Button
          disabled={!isChecked}
          variant="primary"
          type="submit"
          style={{ width: "100%" }}
        >
          Register
        </Button>

        <Button
          variant="primary"
          type="submit"
          className="mt-3"
          style={{ width: "100%" }}
          onClick={handleSignInWithGitHub}
        >
          Sign in with GitHub
        </Button>

        <Button
          variant="primary"
          type="submit"
          className="mt-3"
          style={{ width: "100%" }}
          onClick={handleSignInWithGmail}
        >
          Sign in with Gmail
        </Button>

        <p className="mt-3 mb-0 text-center">
          Already have an account?{" "}
          <Link to="/login">
            <u>Login</u>
          </Link>
        </p>
      </Form>
    </Container>
  );
}

export default Register;
