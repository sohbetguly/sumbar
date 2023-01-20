import React from "react";
import { Pagination } from "react-bootstrap";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import brands from "../utils/brands";
import { Splide, SplideSlide } from "@splidejs/react-splide";
// Default theme
import "@splidejs/react-splide/css";

// or other themes
import "@splidejs/react-splide/css/skyblue";
import "@splidejs/react-splide/css/sea-green";

// or only core styles
import "@splidejs/react-splide/css/core";

function Brands() {
  return (
    <Splide
      aria-label="My Favorite Images"
      className="cursor-pointer px-0 py-1"
      options={{
        rewind: true,
        perPage: 10,
        gap: "1rem",
        type: "loop",
        pagination: false,
        autoplay: true,
        drag: "free",
        perMove: 5,
        arrows: false,
        speed: 10,
        flickPower: 60,
        breakpoints: {
          1200: { perPage: 6, gap: ".5rem" },
          800: { perPage: 4 },
          640: { perPage: 3 },
        },
      }}
    >
      {brands.map(({ id, image }) => (
        <SplideSlide key={id}>
          <a href="#">
            <img className="img-fluid" src={image} alt="Image 1" />
          </a>
        </SplideSlide>
      ))}
    </Splide>
  );
}

export default Brands;
