import {
  faCartShopping,
  faCircleUser,
  faGlobe,
  faPhone,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import logo from "../../images/sumbar-computer-light.svg";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.css";
import { Link } from "react-router-dom";

function Nav() {
  const navLinks = [
    { link: "/about-us", title: "Biz barada" },
    { link: "/service", title: "Tehniki hyzmat" },
    { link: "/guarantee", title: "Kepillik" },
    { link: "/delivery-and-payment", title: "Eltip bermek we tölemek" },
    { link: "#", title: "Nägilelik bildirmek" },
  ];

  return (
    <React.Fragment>
      <div className="bg-dark text-white">
        <div className="container-xxl">
          <div className="d-flex justify-content-between align-items-center p-2">
            <div className="text-left">
              <a
                className="text-light text-decoration-none"
                href="tel:+99361610316"
              >
                <FontAwesomeIcon icon={faPhone} />
                +99361610316
              </a>
            </div>
            <div className="d-flex">
              {navLinks.map(({ link, title }) => {
                return (
                  <ul key={link} className="m-0">
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      className="text-light text-decoration-none"
                      to={link}
                    >
                      {title}
                    </Link>
                  </ul>
                );
              })}
            </div>
            <div>
              <FontAwesomeIcon icon={faGlobe} className="me-1" />
              Türkmen
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="bg-dark text-light">
          <div className="container-xl">
            <div className="row py-2 justify-content-between">
              <div className="col-lg-3">
                <Link to={"/"}>
                  <img className="me-4" src={logo} alt="" />
                </Link>
              </div>
              <div className="col-lg-5 align-self-center d-lg-block d-none">
                <form action="">
                  <div className="d-flex justify-content-center">
                    <div className="input-group">
                      <input
                        type="text"
                        id="search"
                        name="q"
                        maxLength={40}
                        className="form-control rounded-lg-left text-danger bg-light"
                        placeholder="Gözleg"
                        aria-label="Gözleg"
                        autoComplete="off"
                      />

                      <button
                        className="btn btn-danger rounded-lg-right"
                        type="submit"
                      >
                        <FontAwesomeIcon
                          className="text-white"
                          icon={faSearch}
                        />
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              <div
                style={{ fontSize: "25px" }}
                className="col col-md-auto me-4"
              >
                <FontAwesomeIcon className="me-2" icon={faCircleUser} />
                <FontAwesomeIcon icon={faCartShopping} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default Nav;
