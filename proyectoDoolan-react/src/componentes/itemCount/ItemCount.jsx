import { useState } from "react"
import "./itemCount.css"


const ItemCount = ({stock,añadirProducto}) => {
    const [contador, setContador] = useState(1)

    const sumar = ()=>{
        if(contador < stock){
            setContador(contador + 1)
        }
    }

    const restar = () =>{
        if (contador > 1) {
            setContador(contador - 1)
        }
    }
  return (
    <div>
        
        <p>{contador}</p>
        <button onClick={sumar}>+</button>
        <button onClick={restar}>-</button>
        <button onClick={()=>añadirProducto(contador)}>añadir al carrito </button>

    </div>
  )
}

export default ItemCount