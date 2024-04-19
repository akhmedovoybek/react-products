import { useState } from "react";
import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import data from "./../../data"
const Cart = () => {
  const [cart, setCart] = useState(data);

  const products = cart.map((product)=>{
    return <Product product={product} key={product.id} />
  })

  return (
    <section className="cart">
      <CartHeader />

      {products}

      <CartFooter />
    </section>
  );
};

export default Cart;
