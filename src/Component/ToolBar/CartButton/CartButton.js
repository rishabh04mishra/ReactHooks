import { useContext } from "react";
import React from "react";
import CartIcon from "../../FoodCart/CartIcon";
import classes from "./CartButton.module.css";
import CartContext from "../../../store/context/cartContext";

const CartButton = (props) => {
  const cartCtx = useContext(CartContext);
  const numberOfCartItems = cartCtx.items.reduce((current,item) => {
      return current + item.amount;
  },0);
  return (
    <button className={classes.button} onClick={props.click}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Cart</span>
      <span className={classes.badge}>{numberOfCartItems}</span>
    </button>
  );
};

export default CartButton;
