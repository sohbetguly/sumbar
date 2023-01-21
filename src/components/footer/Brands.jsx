import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import React from "react";
import brands from "../../utils/brands";
import "@splidejs/react-splide/css/sea-green";
import "@splidejs/react-splide/css/skyblue";
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
        drag: "free",
        autoplay: true,
        resetProgress: false,
        cover: false,
        arrows: false,
        flickPower: 60,
        perMove: 1,
        interval: 2500,
        snap: true,
        autoScroll: {
          speed: 1,
        },
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
