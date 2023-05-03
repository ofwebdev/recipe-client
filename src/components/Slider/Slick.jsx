import React from "react";
import Slider from "react-slick";

function Slick() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Slider {...settings} className="mb-5">
      <div>
        <img
          width={"100%"}
          height={400}
          style={{
            objectFit: "cover",
          }}
          src="https://www.allchickenrecipes.com/wp-content/uploads/2018/09/Easy-Chicken-Tikka-Masala-Recipe.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          width={"100%"}
          height={400}
          style={{
            objectFit: "cover",
          }}
          src="https://www.foodandwine.com/thmb/cf176bZ4Pe9bG3tDNJ-gjMs3NZU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/saag-paneer-FT-RECIPE0520-9d049e7557564c818ddd0d6391069d2a.jpg"
          alt=""
        />
      </div>
      <div>
        <img
          width={"100%"}
          height={400}
          style={{
            objectFit: "cover",
          }}
          src="https://food-images.files.bbci.co.uk/food/recipes/chicken_korma_09900_16x9.jpg"
          alt=""
        />
      </div>
    </Slider>
  );
}

export default Slick;
