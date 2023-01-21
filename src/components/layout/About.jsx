import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import image1 from "../../images/about/about-us-1.jpg";
import image2 from "../../images/about/about-us-2.jpg";
import image3 from "../../images/about/about-us-3.jpg";
import classes from "./About.module.css";

function About() {
  return (
    <React.Fragment>
      <h4 className="fw-bold mt-1 mb-4">ABOUT US</h4>
      <Container>
        <Row>
          <Col className={classes.mySize + " text-start "} md="6" lg="7" xl="8">
            <div className="text-start">
              <b className="text-danger">Sumbar Computer </b>
              store was founded in 2010 and is a reliable supplier of the entire
              range of IT equipment for the corporate sector and private
              clients. Our retail and wholesale store of computer equipment.
            </div>
            <br />
            <div className="text-start">
              <b className="text-danger">Sumbar Computer </b> offers a wide
              range of personal computers, individual components, laptops,
              peripheral devices, computer accessories, printers, office
              equipment, mobile accessories and much more from the world’s
              leading{" "}
              <Link to="/brands" className="main-link">
                manufacturers
              </Link>
              .
            </div>
            <br />
            <div>
              <h6 className="fw-bold mb-3">The main competencies of SC:</h6>
              <ul>
                <li>Personal computers, all-in-one blocks;</li>
                <li>Office and gaming laptops;</li>
                <li>Components and accessories for gamers;</li>
                <li>Uninterruptible power supply systems and units;</li>
                <li>Office equipment;</li>
                <li>Network hardware;</li>
                <li>Various types of peripherals, consumables, etc.</li>
              </ul>
            </div>
            <div>
              <h6 className="fw-bold mb-3">
                For corporate clients, a full range of services for the supply
                of equipment and implementation of projects is provided:
              </h6>
              For small, medium and large businesses, special prices are
              provided for planned purchases of business equipment; <br /> We
              actively supply goods to the public sector, providing special
              discounts for projects agreed or developed for the tasks of the
              public customer together with manufacturers;
            </div>
            <br />
            <div>
              <h6 className="fw-bold mb-3">For retail clients:</h6>
              <ul>
                <li>The lowest possible prices;</li>
                <li>Qualified and friendly managers;</li>
                <li>
                  <Link className="main-link" to="/delivery-and-payment">
                    Delivery of goods “to the door”
                  </Link>{" "}
                  throughout Turkmenistan.
                </li>
                <li>
                  Online store (the site is not a marketplace or secondary
                  market).
                </li>
                <li>
                  Periodic{" "}
                  <Link className="main-link" to="/discount">
                    discounts
                  </Link>{" "}
                  on the site.
                </li>
                <li>
                  Payment by card (online and through the payment terminal)
                </li>
                <li>
                  <Link className="main-link" to="/discount">
                    Warranty conditions
                  </Link>{" "}
                  based on the law of Turkmenistan on the protection of consumer
                  rights.
                </li>
              </ul>
            </div>
            <br />
            <div>
              <h6 className="fw-bold mb-3">For retail clients:</h6>
              <ul>
                <li>
                  We guarantee the constant availability of goods on the site.
                </li>
                <li>
                  Discounts are provided for regular customers; for large
                  orders, prices are discussed additionally;
                </li>
                <li>
                  We will deliver your order to any city in Turkmenistan as soon
                  as possible.
                </li>
                <li>
                  <Link className="main-link" to="/service">
                    Service center
                  </Link>{" "}
                  of our store (repair and maintenance of equipment)
                </li>
                <li>
                  We are ready to discuss and solve all the questions and wishes
                  that have arisen.
                </li>
              </ul>
            </div>
            <br />
            <div>
              <h6 className="fw-bold mb-3">Opening hours:</h6>
              <ul>
                <li>On weekdays: from 9:00 to 19:00</li>
                <li>Sunday: from 11:00 to 19:00</li>
                <li>On holidays, the store and delivery does not work.</li>
              </ul>
            </div>
            <br />
            <div>
              <h6 className="fw-bold mb-3">Contact details:</h6>
              <ul className="list-unstyled">
                <li>
                  Tel: +993(12) 49-23-43, +993(12) 26-13-69, +993(62) 70-80-45
                </li>
                <li>e-mail: sumbar.computer@gmail.com</li>
                <li>
                  Instagram:{" "}
                  <a
                    className="fw-bold main-link text-decoration-none"
                    target="blank"
                    href="https://www.instagram.com/sumbarcomputer_official/"
                  >
                    sumbarcomputer_official
                  </a>
                </li>
                <li>
                  Our store is well located in the center of Ashgabat at the
                  address:{" "}
                  <a
                    href="https://g.page/sumbar-computer?share"
                    target="_blank"
                    className="main-link fw-bold"
                  >
                    A. Niyazov (Hudayberdiyev) st., 99
                  </a>{" "}
                  (crossroad of Hudayberdiyev St. and Bomako St. opposite AŞTU)
                </li>
              </ul>
            </div>
          </Col>
          <Col className="" md="6" lg="5" xl="4">
            <img className="img-fluid  mt-4" src={image3} alt="" />
            <img className="img-fluid  mt-2 " src={image2} alt="" />
            <img className="img-fluid  mt-4" src={image1} alt="" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default About;
