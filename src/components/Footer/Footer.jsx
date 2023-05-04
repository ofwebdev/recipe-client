import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="text-center text-lg-start bg-white text-muted mt-5">
      <section className="border-top pt-4">
        <div className="container text-center text-md-start mt-5">
          <div className="row mt-3">
            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
              <h4 className="fw-bold mb-4">FreshZone</h4>
              <iframe
                class="shadow-1-strong rounded"
                src="https://www.youtube.com/embed/_yWvWjhWK_w"
                title="YouTube video"
                allowfullscreen
              ></iframe>
            </div>

            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Products</h6>
              <p>
                <Link to="/about" className="text-reset">
                  About
                </Link>
              </p>
              <p>
                <Link to="/service" className="text-reset">
                  Service
                </Link>
              </p>
              <p>
                <Link to="/contact" className="text-reset">
                  Contact
                </Link>
              </p>
              <p>
                <Link to="/creator" className="text-reset">
                  Your Studio
                </Link>
              </p>
            </div>

            <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Useful links</h6>
              <p>
                <Link to="/price" className="text-reset">
                  Pricing
                </Link>
              </p>
              <p>
                <Link to="/setting" className="text-reset">
                  Settings
                </Link>
              </p>
              <p>
                <Link to="/policy" className="text-reset">
                  Policy
                </Link>
              </p>
              <p>
                <Link to="/about" className="text-reset">
                  Help
                </Link>
              </p>
            </div>

            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
              <p>New York, NY 10012, US</p>
              <p>omorfaruk.dev@gmail.com</p>
              <p>+ 01 234 567 88</p>
              <p>+ 01 234 567 89</p>
            </div>
          </div>
        </div>
      </section>
      <div
        className="text-center p-4"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
      >
        © 2023 Copyright:
        <Link className="text-reset fw-bold" to="https://omor.vercel.app">
          omorfaruk.com
        </Link>
      </div>
    </footer>
  );
}

export default Footer;
