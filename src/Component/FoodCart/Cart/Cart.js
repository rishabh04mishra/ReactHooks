import { useContext } from "react";
import CartContext from "../../../store/context/cartContext";
import Modal from "../../UI/Modal/Modal";
import classes from "./Cart.module.css";
const Cart = (props) => {
  const cartCtx=useContext(CartContext)
  const cartItem = (
    <ul className={classes["cart-items"]}>
      {cartCtx.items.map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );
  return (
    <Modal close={props.close}>
      {cartItem}
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{cartCtx.totalAmount}</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]} onClick={props.close}>
          Close
        </button>
        {cartCtx.items.length>0 && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
