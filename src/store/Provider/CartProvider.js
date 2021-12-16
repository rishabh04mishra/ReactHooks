import { useReducer } from "react";
import CartContext from "../context/cartContext";

const defaultState = {
    items:[],
    totalAmount: 0.0,
};

const cartReducer = (state,action)=>{
    if(action.type === "ADD_ITEM"){
        const updatedItems= state.items.concat(action.item);
        return ({items:updatedItems,totalAmount:state.totalAmount+action.item.price * action.item.amount});
    }
        return defaultState;
};
const CartProvider = (props) => {

    const [cartState,dispatchCartAction] = useReducer(cartReducer,defaultState);

  const addItemHandler = (item) => {
      dispatchCartAction({type:"ADD_ITEM",item:item});
  };

  const removeItemHandler = (id) => {
      dispatchCartAction({type:"REMOVE_ITEMS",id:id});
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemHandler,
    removeItem: removeItemHandler,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
