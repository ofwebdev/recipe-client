import React from "react";

function NewsletterSignUp() {
  return (
    <section className="newsletter py-5">
      <div className="container">
        <div className="row">
          <div className="col-md-6 offset-md-3">
            <div className="content text-center py-5">
              <form>
                <h2>SUBSCRIBE TO OUR NEWSLETTER</h2>
                <div className="input-group">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Enter your email"
                  />
                  <span className="input-group-btn">
                    <button className="btn btn-primary" type="submit">
                      Subscribe Now
                    </button>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsletterSignUp;
