import Item from "../Item/Item"
import "./Itemlist.css"


const ItemList = ({motos}) => {
  return (
    <div className="item-list">
        {
            motos.map( (moto)=> (
                <Item moto={moto} key={moto.id} />
            ))
        }

    </div>
  )
}

export default ItemList