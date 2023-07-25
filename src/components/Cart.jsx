import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../slices/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const removeFromCartHandler = (id) => {
    console.log("Item to remove", id);
    dispatch(removeFromCart(id));
  };
  return (
    <div className="container mt-4">
      <h1>Cart Items</h1>
      <ul className="list-group">
        {cartItems &&
          cartItems.map((product) => (
            <li key={product.id} className="list-group-item">
              <h1>{product.id}</h1>
              <img
                src={product.image}
                style={{ height: "40px", paddingInline: "5px" }}
              />
              {product.title}
              <button onClick={() => removeFromCartHandler(product.id)}>
                Remove
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Cart;
