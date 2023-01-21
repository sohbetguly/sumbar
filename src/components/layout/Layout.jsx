import { Route, Routes } from "react-router-dom";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import Menu from "../menu/Menu";
import About from "./About";
import DeliverAndPayment from "./DeliverAndPayment";
import Guarantee from "./Guarantee";
import Home from "./home/Home";
import "./Layout.scss";
import Ratings from "../ratings/Ratings";
import Reviews from "./Reviews";
import Service from "./Service";

function Layout() {
  return (
    <div className="container-xl">
      <div className="row mt-2">
        <div className="col-md-4 col-lg-3 ">
          <Menu />
          <Ratings />
        </div>
        <div className="col-md-8 col-lg-9 ">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/service" element={<Service />} />
            <Route path="/guarantee" element={<Guarantee />} />
            <Route
              path="/delivery-and-payment"
              element={<DeliverAndPayment />}
            />
            <Route path="#" element={<Reviews />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Layout;
