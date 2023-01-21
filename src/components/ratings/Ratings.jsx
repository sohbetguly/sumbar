import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { AiTwotoneStar } from "react-icons/ai";
import { MdAccountCircle, MdVerified } from "react-icons/md";
import classes from "./Ratings.module.css";

function Ratings() {
  const ratingComment = [
    {
      user: "Serdar",
      comment: "Gowy haryt gownume yarady sagbolun kop kop",
      stars: 5,
    },
    {
      user: "Sohbet",
      comment:
        "Mishga zakaz etdim bir ay garantiya berdi hem baha amanly hem garatniya SUPER!!!",
      stars: 5,
    },
    {
      user: "Bagtyyar",
      comment:
        "Menem senden sowda etmek islardim yone men ozum Hytaydan getiryan. Isleseniz sizede zawotdan getirip bereyin dowuk bahadan",
      stars: 5,
    },
  ];

  return (
    <div className="d-none d-md-block">
      <div
        id={classes.ratingTitle}
        className="text-uppercase h5 text-center py-3 mt-3"
      >
        <a href="/ratings">Teswirler</a>
      </div>
      <div className="border px-2">
        <Row className="justify-content-center align-items-center py-3">
          <Col xs={6} className="border-end">
            <div>
              <div className="h1 text-danger fw-bold">4.88</div>
              <div>
                <AiTwotoneStar className="text-warning h5" />
                <AiTwotoneStar className="text-warning h5" />
                <AiTwotoneStar className="text-warning h5" />
                <AiTwotoneStar className="text-warning h5" />
                <AiTwotoneStar className="text-warning h5" />
                <div>(68)</div>
              </div>
            </div>
          </Col>
          <Col className="">
            <Button variant="outline-secondary rounded border fs-5">
              Baha beriň
            </Button>
          </Col>
        </Row>
        {/* <hr /> */}
        {ratingComment.map(({ user, comment, stars }) => {
          const starArray = [...Array(stars).keys()].map((i) => i + 1);

          return (
            <div key={comment} className="m-2 border-top">
              <Row>
                <div className="d-flex align-items-center mt-3 mb-1">
                  {starArray.map(() => (
                    <AiTwotoneStar
                      key={Math.random()}
                      className="text-warning h5 p-0 m-0"
                    />
                  ))}

                  <p className="m-0 p-0 ms-3 text-center fst-italic">
                    Örän gowy
                  </p>
                </div>
              </Row>
              <Row>
                <div className="fw-bold text-start my-1">
                  <MdAccountCircle className="fs-4 me-2" />
                  {user}
                  <MdVerified className="text-success fs-4 mx-2" />
                  <span className="fst-italic fw-normal text-muted ">
                    Hakyky müşderi
                  </span>
                </div>
                <div className="text-start mb-3">{comment}</div>
              </Row>
            </div>
          );
        })}

        <div className="border-top">
          <button className="btn btn-danger my-4 w-100">Ähli teswirler</button>
        </div>
      </div>
    </div>
  );
}

export default Ratings;
