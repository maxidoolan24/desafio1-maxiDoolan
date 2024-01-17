import "./ItemDetail.css"

const ItemDetail = ({moto}) => {
  return (
    <div className="item-detail">
        <img src={moto.imagen} alt={moto.nombre} />
        <p>{moto.nombre}</p>
        <p>precio: ${moto.precio}usd</p>
        <p>stock: {moto.stock}</p>
        <p>descripcion:{moto.descripcion}</p>
        <button>agregar al carrito</button>
        
    </div>
  )
}

export default ItemDetail