import {  useContext, useState } from "react"
import ItemCount from "../itemCount/ItemCount"
import "./ItemDetail.css"
import { Link } from "react-router-dom"
import { CartContext } from "../../context/CartContext"

const ItemDetail = ({moto}) => {
  const [Toggle,setToggle] = useState(false)
  const {añadirProductoAlCarrito} = useContext(CartContext)


  const añadirProducto = (contador) =>{
    setToggle(true)
    const productoCarrito = {...moto,cantidad:contador}
    añadirProductoAlCarrito(productoCarrito)
  }
  return (
    <div className="item-detail">
        <img src={moto.imagen} alt={moto.nombre} />
        <p>{moto.nombre}</p>
        <p>precio: ${moto.precio}usd</p>
        <p>descripcion:{moto.descripcion}</p>
        {
          Toggle ? (
            <Link to = "/Carrito">ir al carrito</Link>
          ) : (
            <ItemCount stock={moto.stock} añadirProducto={añadirProducto}/>
          )}
          
          
        
        
        
    </div>
  )
}

export default ItemDetail