import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import Loading from "../Loading/Loading";

function Blog({ blog }) {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/blog")
      .then((res) => res.json())
      .then((data) => setBlogData(data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {blogData.map((blog) => (
        <div className="col-md-4" key={blog.id}>
          <div className="blog-card rounded p-3 bg-light">
            <img
              className="w-100"
              height={200}
              style={{ objectFit: "contain" }}
              src={blog.image}
              alt=""
            />
            <h4 className="mt-3">
              <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
            </h4>
            <p>{blog.article[0]}..</p>

            <div className="author-info d-flex">
              <img
                height={40}
                width={40}
                className="rounded"
                src={blog.author.avatar}
                alt=""
              />

              <div className="name-date ms-3">
                <h6 className="mb-0">{blog.author.name}</h6>
                <p className="mb-0">
                  {blog.author.date} <strong>{blog.author.readingTime}</strong>{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}

export default Blog;
