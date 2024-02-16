import { useContext } from "react";
import { TbShoppingCartPlus } from "react-icons/tb";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";
const CartWidget = () => {
    const {cantidadTotal} = useContext(CartContext)
  return (
    <>
    <Link to="/carrito" id="cartWidget">
    <TbShoppingCartPlus />
    <p> {cantidadTotal() != 0 ? cantidadTotal() : ""} </p>
    
    </Link>
    </>
  )
}

export default CartWidget