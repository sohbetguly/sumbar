import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image from "../../images/service/service-1.jpg";
import classes from "./About.module.css";

function Service() {
  return (
    <React.Fragment>
      <h4 className="fw-bold mt-1 mb-4">TEHNIKI HYZMAT</h4>
      <Container>
        <Row>
          <Col className={classes.mySize + " text-start "} md="6" lg="7" xl="8">
            <div className="text-start">
              <b className="text-danger">Service Sumbar Computer </b>– Aşgabadyň
              merkezinde ýerleşýän professional kompýuter hyzmat merkezidir. 10
              ýyldan gowrak wagt bäri hyzmatlarymyzy şahsyýetlere we iri
              guramalara hödürleýäris.{" "}
            </div>
            <br />

            <div>
              <h6 className="fw-bold mb-1">Bizin hyzmatlarymyz şular:</h6>
              <ul>
                <li>
                  Kompýuter enjamlarynyň doly hyzmaty (abatlamak, proşiwka,
                  programma üpjünçiligi);
                </li>
                <li>
                  Dürli kompýuterleriň we noutbuklaryň diagnostikasy, gözlemek
                  we näsazlyklaryny düzetmek;
                </li>
                <li>Components and accessories for gamers;</li>
                <li>Uninterruptible power supply systems and units;</li>
                <li>
                  Ofis enjamlaryny (printerler, fakslar we ş.m.) abatlamak we
                  profilaktika etmek;
                </li>
                <li>Struýnyý we lazer printerleri zaprawka etmek.</li>
              </ul>
            </div>
            <div>Telefon: +993 (62) 23-37-59</div>
            <br />
          </Col>
          <Col className="" md="6" lg="5" xl="4">
            <img className="img-fluid  mt-2 " src={image} alt="" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default Service;
