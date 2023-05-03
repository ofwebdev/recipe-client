import React from "react";
import { Link } from "react-router-dom";

function Notfound() {
  return (
    <div>
      <Link to={"/"}>
        <img
          width={"100%"}
          style={{ height: "100vh", borderRadius: 0 }}
          src="https://colibriwp.com/blog/wp-content/uploads/2019/07/2488756.jpg"
          alt=""
        />
      </Link>
    </div>
  );
}

export default Notfound;
