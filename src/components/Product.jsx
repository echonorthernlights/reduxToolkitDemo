import React from "react";
import { Link } from "react-router-dom";
import { UseSelector, useDispatch } from "react-redux/";
import { addToCart } from "../slices/cartSlice";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const addToCartHandler = (product) => {
    dispatch(addToCart({ ...product }));
    console.log(product);
  };
  return (
    <div className="col-4">
      <div key={product.id} className="card p-2 m-2">
        <div className="text-center">
          {" "}
          <img
            style={{ height: "130px", width: "100px" }}
            className="card-img-top fluid"
            src={product.image}
            alt={product.name}
          />
        </div>

        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          <small>
            <u>{product.category}</u>
          </small>
          <p className="card-text">{`${product.description.substring(
            0,
            70
          )}...`}</p>

          <div className="card-footer text-center">
            <Link
              to={`/products/${product.id}`}
              className="btn btn-primary mx-2"
            >
              Details
            </Link>
            <button
              type="submit"
              className="btn btn-primary mx-2"
              onClick={() => addToCartHandler(product)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
