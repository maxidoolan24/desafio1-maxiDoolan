import { useEffect, useState } from "react"
import obtenerMotos from "../../utilidades/data"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
    const [moto, setMoto] = useState({})
    const { idMoto } = useParams()
    useEffect (()=>{
        obtenerMotos
        .then((respuesta)=>{
            const motoEcontrada = respuesta.find((moto)=>moto.id === idMoto)
            setMoto(motoEcontrada)
        })
        


    },[idMoto])
  return (
    
    <div className="item-detail-container">
        <ItemDetail moto={moto}/> 

    </div>
  )
}

export default ItemDetailContainer