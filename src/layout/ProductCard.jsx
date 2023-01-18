import React from "react";
import { Form } from "react-bootstrap";
import classes from "./ProductCard.module.css";

function ProductCard({ image, price, caption }) {
  return (
    <div className="border p-2">
      <div>
        <div className="d-inline-block page-link popover-arrow px-2 border rounded">
          <Form.Check type="checkbox" id={image}>
            <Form.Check.Input type="checkbox" isInvalid />
            <Form.Check.Label
              style={{ cursor: "pointer" }}
              className="cursor-pointer text-dark"
              htmlFor={image}
            >
              Deňeşdirmek
            </Form.Check.Label>
          </Form.Check>
        </div>
        <a href="#">
          <img src={image} className="img-fluid " />
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column ">
        <a className={classes.myLink} href="#">
          {caption}
        </a>
        <div className="mt-auto">
          <hr className="text-danger w-50 my-2" />

          <div className="h6">
            {price} <small>TMT</small>
          </div>
          <button
            style={{ cursor: "pointer" }}
            className={
              classes["xs-text"] +
              " btn btn-danger rounded-pill text-uppercase text-xs fw-bold add-to-cart "
            }
          >
            Sebete goş
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
