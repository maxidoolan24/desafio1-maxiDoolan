import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import { Link } from "react-router-dom";
import "./Carrito.css"

const Carrito = () => {

  const {Carrito , precioTotal , borrarProducto , borrarTodo} = useContext(CartContext)

  if (Carrito.length === 0) {
    return(
      <div className="tituloCarrito">
        <h2>
          no hay ningun producto en el carrito
          <Link to="/">Volver al inicio </Link>
        </h2>
        
        
      </div>
    )
  }

 
  return (
    <div className="vista">
      
        {
          Carrito.map((moto)=>(
            <li className="producto"  key={moto.id}>
              <img 
               className="imagen"
               src = {moto.imagen}
               alt = {moto.nombre} 
              
              />
              <p className="nombre">{moto.nombre}</p>
              <p className="texto">cantidad: {moto.cantidad}</p>
              <p className ="texto">precio c/u ${moto.precio}</p>
              <button onClick={ () => borrarProducto(moto.id)}>eliminar</button>

            </li>
            
          ))
        }
      
      <div className="informacion">
        <p className="total">precio total:{precioTotal()}</p>
        <button  className="botonCarrito"   onClick={borrarTodo}>Eliminar carrito</button>
        <Link to="/checkout">Continuar compra</Link>

      </div>
    </div>
    
  );
};

export default Carrito