import { useEffect, useState } from "react"
import ItemDetail from "../ItemDetail/ItemDetail"
import { useParams } from "react-router-dom";
import { doc, getDoc} from "firebase/firestore";
import db from "../../db/Db"


const ItemDetailContainer = () => {
    const [moto, setMoto] = useState({})
    const { idMoto } = useParams()
    useEffect (()=>{
        let productosRef = doc(db,"productos", idMoto)
        
        getDoc(productosRef)
        .then((respuesta)=>{
          const productoDb = { id : respuesta.id , ...respuesta.data() }
          setMoto(productoDb  )
        })


    },[idMoto])
  return (
    
    <div className="item-detail-container">
        <ItemDetail moto={moto}/> 

    </div>
  )
}

export default ItemDetailContainer