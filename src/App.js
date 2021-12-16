import { useState } from "react";
import Cart from "./Component/FoodCart/Cart/Cart";
import Meals from "./Component/MealsItems/Meals";
import Header from "./Component/ToolBar/Header/Header";
import CartProvider from "./store/Provider/CartProvider";

function App() {

  const[cartOpen,setCartOpen]= useState(false);

  const cartOpenHandler = () => {
    setCartOpen(true);
  }

  const cartCloseHandler = () => {
    setCartOpen(false);
  }

  return (
    <CartProvider>
     {cartOpen && <Cart close={cartCloseHandler}/>} 
      <Header open={cartOpenHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
