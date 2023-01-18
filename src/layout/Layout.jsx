import { Swiper, SwiperSlide } from "swiper/react";
import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import { Pagination, Autoplay } from "swiper";
import { slideImages, mainImages } from "../utils/imageData";

// Import Swiper styles
import "swiper/css";
// import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
// import "swiper/css/scrollbar";
import "./Layout.scss";
import Menu from "./Menu";
import Ratings from "./Ratings";
import { Nav } from "react-bootstrap";
import Products from "./Products";

function Layout() {
  return (
    <div className="container-xl">
      <div className="row mt-2">
        <div className="col-md-4 col-lg-3 ">
          <Menu />
          <Ratings />
        </div>
        <div className="col-md-8 col-lg-9 ">
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
        </div>
      </div>
    </div>
  );
}

export default Layout;
