import React from "react";
import cartItem from "./cartItem";
import { useSelector } from "react-redux";

const CartContainer = () => {
  const { cartItems, amount, total } = useSelector((store) => store.cart);
  return <div>cartContainer</div>;
};

export default CartContainer;
