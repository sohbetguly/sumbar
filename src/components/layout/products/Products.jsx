import React, { useState } from "react";
import { Fade, Nav, Row } from "react-bootstrap";
import { AiFillCaretRight } from "react-icons/ai";
import products from "../../../utils/productsData";
import ProductCard from "./ProductCard";
import styles from "./Products.module.css";

function Products() {
  const [active, setActive] = useState("#reccommendedTab");
  return (
    <div>
      <Nav
        className="text-uppercase justify-content-center fw-bold py-1"
        onSelect={(selectedKey) => setActive(selectedKey)}
      >
        <Nav.Item>
          <Nav.Link
            className={`${
              active === "#reccommendedTab" && styles.activeLink
            } text-dark fs-5`}
            eventKey="#reccommendedTab"
          >
            Maslahat berilýänler
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={`${
              active === "#newsTab" && styles.activeLink
            } text-dark fs-5`}
            eventKey="#newsTab"
          >
            Täzeler
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link
            className={`${
              active === "#popularTab" && styles.activeLink
            } text-dark fs-5`}
            eventKey="#popularTab"
          >
            Meşhurlar
          </Nav.Link>
        </Nav.Item>
      </Nav>
      <div
        id="#hemmesi"
        className="d-flex justify-content-end align-items-center py-1 text-muted "
      >
        <AiFillCaretRight />
        <a
          className={"text-decoration-none text-dark " + styles.hoverRed}
          href="#hemmesi"
        >
          Hemmesi
        </a>
      </div>
      <Fade
        in={active === "#reccommendedTab"}
        className={active !== "#reccommendedTab" ? "d-none" : ""}
      >
        <Row className={`g-0`} xl="4" lg="3" md="2" sm="3" xs="2">
          {products.recommended.map(({ img, title, price, isNew }) => (
            <ProductCard
              key={img}
              image={img}
              caption={title}
              price={price}
              isNew={isNew}
            />
          ))}
        </Row>
      </Fade>
      <Fade
        in={active === "#newsTab"}
        className={active !== "#newsTab" ? "d-none" : ""}
      >
        <Row className={`g-0`} xl="4" lg="3" md="2" sm="3" xs="2">
          {products.new.map(({ img, title, price, isNew }) => (
            <ProductCard
              key={img}
              image={img}
              caption={title}
              price={price}
              isNew={isNew}
            />
          ))}
        </Row>
      </Fade>
      <Fade
        in={active === "#popularTab"}
        className={active !== "#popularTab" ? "d-none" : ""}
      >
        <Row className={`g-0`} xl="4" lg="3" md="2" sm="3" xs="2">
          {products.popular.map(({ img, title, price, isNew }) => (
            <ProductCard
              key={img}
              image={img}
              caption={title}
              price={price}
              isNew={isNew}
            />
          ))}
        </Row>
      </Fade>

      <div
        id="#notebooks"
        className="d-flex justify-content-center align-items-center my-4 py-1 h5 "
      >
        <AiFillCaretRight className="text-muted" />
        <a
          className={
            "text-uppercase fw-bold text-decoration-none text-dark " +
            styles.hoverRed
          }
          href="#hemmesi"
        >
          Noutbuklar
        </a>
      </div>
      <Row className={`g-0`} xl="4" lg="3" md="2" sm="3" xs="2">
        {products.laptops.map(({ img, title, price, isNew }) => (
          <ProductCard
            key={img}
            image={img}
            caption={title}
            price={price}
            isNew={isNew}
          />
        ))}
      </Row>
      <div
        id="#notebooks"
        className="d-flex justify-content-center align-items-center my-4 py-1 h5 "
      >
        <AiFillCaretRight className="text-muted" />
        <a
          className={
            "text-uppercase fw-bold text-decoration-none text-dark " +
            styles.hoverRed
          }
          href="#hemmesi"
        >
          PK DÜZÜJILERI
        </a>
      </div>
      <Row className={`g-0`} xl="4" lg="3" md="2" sm="3" xs="2">
        {products.pcAccessories.map(({ img, title, price }) => (
          <ProductCard key={img} image={img} caption={title} price={price} />
        ))}
      </Row>
      <div
        id="#notebooks"
        className="d-flex justify-content-center align-items-center my-4 py-1 h5 "
      >
        <AiFillCaretRight className="text-muted" />
        <a
          className={
            "text-uppercase fw-bold text-decoration-none text-dark " +
            styles.hoverRed
          }
          href="#hemmesi"
        >
          PERIFERIÝALAR
        </a>
      </div>
      <Row className={`g-0`} xl="4" lg="3" md="2" sm="3" xs="2">
        {products.peripherias.map(({ img, title, price }) => (
          <ProductCard key={img} image={img} caption={title} price={price} />
        ))}
      </Row>
      <div
        id="#notebooks"
        className="d-flex justify-content-center align-items-center my-4 py-1 h5 "
      >
        <AiFillCaretRight className="text-muted" />
        <a
          className={
            "text-uppercase fw-bold text-decoration-none text-dark " +
            styles.hoverRed
          }
          href="#hemmesi"
        >
          DURLI MOBIL PEREFERIÝALARY
        </a>
      </div>
      <Row className={`g-0`} xl="4" lg="3" md="2" sm="3" xs="2">
        {products.differentMobilePeripherias.map(({ img, title, price }) => (
          <ProductCard key={img} image={img} caption={title} price={price} />
        ))}
      </Row>
      <div
        id="#notebooks"
        className="d-flex justify-content-center align-items-center my-4 py-1 h5 "
      >
        <AiFillCaretRight className="text-muted" />
        <a
          className={
            "text-uppercase fw-bold text-decoration-none text-dark " +
            styles.hoverRed
          }
          href="#hemmesi"
        >
          MEBELLER
        </a>
      </div>
      <Row className={`g-0`} xl="4" lg="3" md="2" sm="3" xs="2">
        {products.furniture.map(({ img, title, price }) => (
          <ProductCard key={img} image={img} caption={title} price={price} />
        ))}
      </Row>
      <div
        id="#notebooks"
        className="d-flex justify-content-center align-items-center my-4 py-1 h5 "
      >
        <AiFillCaretRight className="text-muted" />
        <a
          className={
            "text-uppercase fw-bold text-decoration-none text-dark " +
            styles.hoverRed
          }
          href="#hemmesi"
        >
          HOJALYK HARYTLARY
        </a>
      </div>
      <Row className={`g-0`} xl="4" lg="3" md="2" sm="3" xs="2">
        {products.appliances.map(({ img, title, price }) => (
          <ProductCard key={img} image={img} caption={title} price={price} />
        ))}
      </Row>
    </div>
  );
}

export default Products;
