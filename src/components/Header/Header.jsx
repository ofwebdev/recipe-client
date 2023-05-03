import { useState, useContext } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

import "./Header.scss";

function Header() {
  const [success, setSuccess] = useState(false);
  const location = useLocation();

  const { user, logOut } = useContext(AuthContext);
  const logoutHandler = () => {
    logOut()
      .then(() => {
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 1000);
      })
      .catch((error) => console.log(error));
  };
  return (
    <>
      {["sm"].map((expand) => (
        <Navbar key={expand} bg="light" expand={expand} className="mb-3 header">
          <Container>
            <h3>FreshZone</h3>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Offcanvas
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link>
                    <Link
                      to={"/"}
                      className={location.pathname === "/home" ? "active" : ""}
                    >
                      Home
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      to={"/about"}
                      className={location.pathname === "/about" ? "active" : ""}
                    >
                      About
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    <Link
                      to={"/blog"}
                      className={location.pathname === "/blog" ? "active" : ""}
                    >
                      Blog
                    </Link>
                  </Nav.Link>
                  <Nav.Link>
                    {user ? (
                      <Link onClick={logoutHandler}>Logout</Link>
                    ) : (
                      <Link
                        to="/login"
                        className={
                          location.pathname === "/login" ? "active" : ""
                        }
                      >
                        Login
                      </Link>
                    )}
                  </Nav.Link>
                </Nav>
                <Form className="d-flex">
                  <Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
                </Form>
                {user ? (
                  <div
                    className="profile d-flex align-items-center"
                    style={{
                      padding: "5px 6px",
                      background: "#e8e8e7",
                      borderRadius: "50px",
                      marginLeft: "10px",
                    }}
                  >
                    {user.photoURL && (
                      <img
                        width="30"
                        height="30"
                        style={{ borderRadius: "50%" }}
                        src={user.photoURL}
                        alt=""
                      />
                    )}
                    {user.displayName && (
                      <p className="mb-0 ms-1">{user.displayName}</p>
                    )}
                  </div>
                ) : null}
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Header;
