import { useEffect, useState } from "react"
import obtenerMotos from "../../utilidades/data";
import ItemList from "../Itemlist/ItemList";
import "./ItelListContainer.css"
import { useParams } from "react-router-dom";


const ItemListContainer = () => {
  const [motos ,setMotos] = useState ([]);
  const { categoria } = useParams()

  console.log(categoria);
  useEffect(() =>{
    obtenerMotos
    .then((respuesta) =>{
      if (categoria) {
        const motosFiltradas = respuesta.filter((moto)=>moto.categoria === categoria)
        setMotos(motosFiltradas)
      } else {
        setMotos(respuesta)
      }
    })
    .catch((error)=>{
      console.log(error);
    })
    .finally(()=>{
      console.log("finalizo la promesa");
    })
  },[categoria]);
  return (
    <div className="item-list-container">
      <ItemList motos={motos}/>

    </div>
  )
}

export default ItemListContainer