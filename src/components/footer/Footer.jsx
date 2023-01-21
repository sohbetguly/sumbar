import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  AiOutlineInstagram,
  AiOutlineWhatsApp,
  AiOutlineYoutube,
} from "react-icons/ai";
import Brands from "./Brands";
import { FaTiktok } from "react-icons/fa";
import { SiIcq } from "react-icons/si";
import { MdMail, MdOutlineLocationOn, MdOutlinePhone } from "react-icons/md";
import classes from "./Footer.module.css";
import image from "../../images/sumbar-computer-light.svg";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="bg-dark mt-5">
      <div className="container-xl ">
        <Brands />
      </div>
      <hr className="text-white" />
      <div className="container-xl text-white text-white fs-6 text-start">
        <Row>
          <Col xs="5" className="p-1 ">
            <Row className="p-2 img-fluid w-75">
              <img src={image} alt="" />
            </Row>
            <Row className="  p-2 px-0 text-white ">
              <a
                target="_blank"
                href="https://g.page/sumbar-computer?share"
                className={classes.myLinkStyle + "  text-decoration-none"}
              >
                <MdOutlineLocationOn className="me-0  fs-5" /> Türkmenistan,
                Aşgabat, köç. A.Niýazow (Hudayberdýew), 99
              </a>
            </Row>

            <Row className="px-0 p-2  ">
              <a
                href="mailto:sumbar.computer@gmail.com"
                className={classes.myLinkStyle + " text-decoration-none"}
              >
                <MdMail className="me-2" />
                sumbar.computer@gmail.com
              </a>
            </Row>
            <Row className=" px-0 p-2 ">
              <a
                className={classes.myLinkStyle + " text-decoration-none"}
                href="tel:+99312492343"
              >
                <MdOutlinePhone className="me-2" />
                +993 (12) 49-23-43
              </a>
            </Row>
            <Row className="d-inline-block p-1 ps-0 ">
              <a
                target="_blank"
                href="https://wa.me/99312492343"
                className={
                  classes.myLinkStyle + " pe-1 text-decoration-none fs-5"
                }
              >
                <AiOutlineWhatsApp />
              </a>
              <a
                target="_blank"
                href="https://www.instagram.com/sumbarcomputer_official"
                className={
                  classes.myLinkStyle + " px-1 text-decoration-none fs-5"
                }
              >
                <AiOutlineInstagram />
              </a>
              <a
                target="_blank"
                href="https://icq.im/AoLHq9tLLVXjWOa4CXI"
                className={
                  classes.myLinkStyle + " px-1 text-decoration-none fs-5"
                }
              >
                <SiIcq />
              </a>

              <a
                target="_blank"
                href="https://www.tiktok.com/@sumbarcomputer?_t=8VI3SHeMO1p&_r=1"
                className={
                  classes.myLinkStyle + " px-1 text-decoration-none fs-5"
                }
              >
                <FaTiktok />
              </a>

              <a
                target="_blank"
                href="https://www.youtube.com/channel/UCai0LBRI-81a-wvlzufw8Tw"
                className={
                  classes.myLinkStyle + " px-1 text-decoration-none fs-5"
                }
              >
                <AiOutlineYoutube />
              </a>
            </Row>
          </Col>
          <Col xs="7" className=" p-2 ">
            <div className="fs-5 p-2 text-light ">
              Sumbar Computer - Türkmenistanda kompýuter we periferiýa enjamlary
              dükany
            </div>
            <Row>
              <Col xs>
                {[
                  { link: "/about-us", title: "Biz barada" },
                  { link: "/guarantee", title: "Kepillik" },
                  { link: "/privacy-policy", title: "Gizlinlik syýasaty" },
                ].map(({ link, title }) => (
                  <Col className="p-2" key={title}>
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to={link}
                      className={classes.myLinkStyle + "  text-decoration-none"}
                    >
                      {title}
                    </Link>
                  </Col>
                ))}
              </Col>
              <Col>
                {[
                  { link: "/service", title: "Tehniki hyzmat" },
                  {
                    link: "/delivery-and-payment",
                    title: "Eltip bermek we töleg",
                  },
                  { link: "/brands", title: "Brendler" },
                ].map(({ link, title }) => (
                  <Col className="p-2" key={title}>
                    <Link
                      onClick={() => window.scrollTo(0, 0)}
                      to={link}
                      className={classes.myLinkStyle + "  text-decoration-none"}
                    >
                      {title}
                    </Link>
                  </Col>
                ))}
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Footer;
