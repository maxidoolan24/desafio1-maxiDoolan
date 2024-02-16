import { useState } from "react";
import "./Item.css"
import { Link } from "react-router-dom";


const Item = ({moto}) => {

  const [agrandar,setAgrandar]= useState(false)

  const handleMouseOver = () =>{
    
    setAgrandar(true)
  };
  const handleMouseLeave = () =>{
   
    setAgrandar(false)
  };

  const estiloTarjeta = {
    transform: agrandar ? `scale(1.1)`: `scale(1)`,
    transition : `transform 0.3s ease-in-out`
  }
  return (
    <div className="item"
    style={estiloTarjeta}
    onMouseOver={handleMouseOver}
    onMouseLeave={handleMouseLeave}
    >
        <img  src={moto.imagen}  alt={moto.nombre} />
        <p className="titulo">{moto.nombre}</p>
        <p className="precio">$ {moto.precio} usd</p>
        <button className="boton"><Link to={`/detalle/${moto.id}`} className="link">ver mas</Link> </button>
        

    </div>
  )
}

export default Item