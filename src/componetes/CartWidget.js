import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {

  const { getItemQty } = useContext(CartContext)

  return (
      <Link to="/cart">
          <span className="material-symbols-outlined">shopping_cart</span>
          {getItemQty()}
      </Link>
  )
}

export default CartWidget