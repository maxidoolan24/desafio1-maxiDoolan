import { useState } from "react";
import { TbShoppingCartPlus } from "react-icons/tb";

const CartWidget = () => {
    const[cantidadItems,setCantidadItems] = useState(0);
  return (
    <>
    <div>
    <TbShoppingCartPlus />
    {cantidadItems}


    </div>
    </>
  )
}

export default CartWidget