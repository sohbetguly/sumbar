import React from "react";
import { Form } from "react-bootstrap";
import { AiFillHeart, AiOutlineHeart, AiOutlineZoomIn } from "react-icons/ai";
import classes from "./ProductCard.module.css";

function ProductCard({ image, price, caption, isNew }) {
  return (
    <div className="border p-2 position-relative overflow-hidden">
      {isNew && (
        <div className="stack-top left text-bg-danger bg-gradient">Taze</div>
      )}
      <div className="position-relative ">
        <div className="d-flex align-items-center justify-content-end flex-nowrap top-0 end-0 ">
          <div className="p-sm-0 p-lg-1 px-lg-2  py-1 px-2 border rounded bg-white check-diff h7 ">
            <Form.Check type="checkbox" id={image}>
              <Form.Check.Input
                type="checkbox"
                isInvalid
                className="check-diff "
              />
              <Form.Check.Label
                className="cursor-pointer text-dark"
                htmlFor={image}
              >
                Deňeşdirmek
              </Form.Check.Label>
            </Form.Check>
          </div>
          <AiOutlineZoomIn className="mx-1 fs-5 cursor-pointer " />
          <AiOutlineHeart className="text-danger fs-5 cursor-pointer " />
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
