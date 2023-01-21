import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper";
import { slideImages, mainImages } from "../../../utils/imageData";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Products from "../products/Products";
// import Products from "./Products";

function Home() {
  return (
    <React.Fragment>
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={5}
        slidesPerView={1}
        autoplay
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        loop={true}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        style={{ height: "480px" }}
        className="zoom-container"
      >
        {mainImages.map(({ image }) => (
          <SwiperSlide key={image}>
            <a href="#">
              <img src={image} alt="" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        // install Swiper modules
        modules={[Pagination, Autoplay]}
        spaceBetween={4}
        slidesPerView={4}
        autoplay={{
          reverseDirection: true,
        }}
        navigation
        scrollbar={{ draggable: true }}
        loop={true}
        // onSwiper={(swiper) => console.log(swiper)}
        // onSlideChange={() => console.log("slide change")}
        style={{ height: "260px" }}
        className="mt-1"
      >
        {slideImages.map(({ image }) => (
          <SwiperSlide key={image}>
            <a href="#">
              <img src={image} alt="" className="img-fluid" />
            </a>
          </SwiperSlide>
        ))}
      </Swiper>
      <Products />
    </React.Fragment>
  );
}

export default Home;
