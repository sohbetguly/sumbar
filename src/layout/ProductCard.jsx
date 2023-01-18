import React from "react";
import { Form } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import classes from "./ProductCard.module.css";

function ProductCard({ image, price, caption }) {
  return (
    <div className="border p-2">
      <div>
        <div className="d-inline-block position-relative top-0 end-100">
          <div className="d-inline-block page-link popover-arrow py-1 px-2 border rounded ">
            <Form.Check type="checkbox" id={image}>
              <Form.Check.Input type="checkbox" isInvalid className="" />
              <Form.Check.Label
                style={{ cursor: "pointer" }}
                className="cursor-pointer text-dark"
                htmlFor={image}
              >
                Deňeşdirmek
              </Form.Check.Label>
            </Form.Check>
          </div>
        </div>
        <AiOutlineZoomIn style={{ cursor: "pointer" }} className="mx-1 fs-5" />
        <AiOutlineHeart className="text-danger fs-5" />

        <a href="#">
          <img src={image} className="img-fluid " />
        </a>
      </div>
      <div className="d-flex justify-content-center align-items-center flex-column ">
        <a className={classes.myLink} href="#">
          {caption}
        </a>
        <div className="mt-auto">
          <hr className="text-danger w-50 my-2 " />

          <div className="h6">
            {price} <small>TMT</small>
          </div>
          <button
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
