import { useEffect, useState } from "react"
import ItemList from "../Itemlist/Itemlist";
import "./ItelListContainer.css"
import { useParams } from "react-router-dom";
import {collection , getDocs , query , where} from "firebase/firestore"
import db from "../../db/Db"

const ItemListContainer = () => {
  const [motos ,setMotos] = useState ([]);
  const { categoria } = useParams()

  console.log(categoria);
  useEffect(() =>{
   let consulta
   let productosRef = collection(db,"productos")


   if (categoria) {
    consulta = query(productosRef, where("categoria" , "==" , categoria))
   } else {
    consulta = productosRef
   }

   getDocs(consulta)
    .then((respuesta)=>{
      let productosDb = respuesta.docs.map((producto) =>{
        return {id: producto.id , ...producto.data()}


      })
      setMotos(productosDb)

    })
  },[categoria]);
  return (
    <div className="item-list-container">
      <ItemList motos={motos}/>

    </div>
  )
}

export default ItemListContainer