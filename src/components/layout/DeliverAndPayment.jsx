import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import image1 from "../../images/delivery-and-report/delivery-and-payment-2.jpg";
import image2 from "../../images/delivery-and-report/delivery-and-payment-3.jpg";
import image3 from "../../images/delivery-and-report/delivery-and-payment-4.jpg";

function DeliverAndPayment() {
  return (
    <React.Fragment>
      <h4 className="fw-bold mt-1 mb-4">ELTIP BERMEK WE TÖLEG</h4>
      <div className="container">
        <p className="text-danger fw-bold text-start">
          Eltip bermegiň usullary:
        </p>
      </div>
      <div className="text-start fs-6 container">
        <p className="fw-bold ">Kepilligiň şertleri:</p>
        Aşakda görkezilen kepillikli şertler sarp edijä we şol bir wagtda ýerine
        ýetirijä hem degişlidir. Bu şertler Türkmenistanyň döwlet syýasatynyň
        guramaçylyk-hukuk, durmuş-ykdysady esaslaryny we sarp edijileri goramak
        babatyndaky kanunyň esaslaryny düzýär.
      </div>
      <br />
      <Container>
        <Row>
          <Col className={" text-start"} md="6" lg="7" xl="8">
            <div className="text-start">
              <b className="text-danger">ÜNS BERIŇ: </b>
              Sarp ediji harydy kabul edende, gaplamada daşky zeperleriň
              bolmagyny we önümiň degişli daş görnüşini hökman barlamalydyr.
              Gaplamanyň daşky görnüşiniň abatlygyna ynamyňyz ýok bolsa, satyja
              ýa-da çapara bu barada wagt ýitirmän habar bermelidir. Sargyt
              kabul edilenden soň, harydyň daşky kemçilikleriniň bolmagy, olaryň
              hili, toplumy we harydyň daşky görnüşi baradaky şikaýatlar kabul
              edilmeýär.
            </div>

            <div className="text-start">
              <b className="text-danger">ÜNS BERIŇ: </b>
              Sarp ediji harydy kabul edende, gaplamada daşky zeperleriň
              bolmagyny we önümiň degişli daş görnüşini hökman barlamalydyr.
              Gaplamanyň daşky görnüşiniň abatlygyna ynamyňyz ýok bolsa, satyja
              ýa-da çapara bu barada wagt ýitirmän habar bermelidir. Sargyt
              kabul edilenden soň, harydyň daşky kemçilikleriniň bolmagy, olaryň
              hili, toplumy we harydyň daşky görnüşi baradaky şikaýatlar kabul
              edilmeýär.
            </div>
            <br />
            <div className="text-start">
              Yzyna almak we kepillikli hyzmat meseleleri boýunça +993 (62)
              23-37-59 telefon belgisi arkaly <b>Sumbar Computer</b> hyzmat
              merkezine ýüz tutmagyňyzy haýyş edýäris.
            </div>
            <br />
          </Col>
          <Col className="mt-0 p-0" md="6" lg="5" xl="4">
            <img className="img-fluid  mt-0" src={image1} alt="" />
            <img className="img-fluid  mt-4" src={image2} alt="" />
            <img className="img-fluid  mt-4" src={image3} alt="" />
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default DeliverAndPayment;
