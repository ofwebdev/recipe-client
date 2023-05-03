import React from "react";

function Blog() {
  return (
    <div className="col-md-4">
      <img
        className="w-100"
        height={200}
        style={{ objectFit: "cover" }}
        src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg"
        alt=""
      />
      <h4 className="mt-3">
        The Ultimate Guide to Building a Graphic Design Portfolio Website
      </h4>
      <p>
        A portfolio is an important business asset for every freelance graphic
        designer. A graphic designer web portfolio showcases…
      </p>

      <div className="author-info d-flex">
        <img
          height={40}
          width={40}
          className="rounded"
          src="https://secure.gravatar.com/avatar/c692cc3679757c325e033e4e38513bd3?s=192&d=mm&r=g"
          alt=""
        />

        <div className="name-date ms-3">
          <h6 className="mb-0">Joly</h6>
          <p className="mb-0"> March 10, 2023 . 10 Mins</p>
        </div>
      </div>
    </div>
  );
}

export default Blog;
