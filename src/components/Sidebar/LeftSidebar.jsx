import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./LeftSidebar.scss";

function LeftSidebar() {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/country")
      .then((res) => res.json())
      .then((data) => setCategory(data))
      .catch((err) => console.log(err));
  });
  return (
    <div className="category">
      <h4 className="border-bottom pb-3">Country list</h4>

      {category.map((catalog) => (
        <div key={catalog.id} className="list">
          <Link
            to={`/country/${catalog.id}`}
            className="text-decoration-none table-hover table"
          >
            {catalog.name}
          </Link>
        </div>
      ))}
    </div>
  );
}

export default LeftSidebar;
