import "./Item.css"
import { Link } from "react-router-dom";


const Item = ({moto}) => {
  return (
    <div className="item">
        <img  src={moto.imagen}  alt={moto.nombre} />
        <p className="titulo">{moto.nombre}</p>
        <p className="precio">$ {moto.precio} usd</p>
        <button className="boton"><Link to={`/detalle/${moto.id}`} className="link">ver mas</Link> </button>
        <button className="boton">agregar a carrito </button>

    </div>
  )
}

export default Item