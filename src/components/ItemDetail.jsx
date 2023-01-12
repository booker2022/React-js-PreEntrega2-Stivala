import React from "react";
import { useContext, useEffect, useState} from "react";
import { CartContext } from "./context/CartContext";
import ItemCount from "./ItemCount";

const ItemDetail = ({item}) => {

  const {addItem} = useContext(CartContext)

  //state donde voy trabajando el stock
  const [itemStock, setItemStok] = useState(0)
 
  //Funcion que le voy a transferir via props al componente ItemCount donde actualizo el stock
  const onAdd =(cantidad) =>{
    setItemStok(itemStock - cantidad )
    addItem(item, cantidad)
  }

  //Al inicializar el componente traigo del producto (item) el stock y lo actualizo con setItemStock
  //y la dependecia es con respecto al objeto (item)
  useEffect(()=> {
    setItemStok(item.stock)
  },[item])

  return(
    <div className="row">
      <div className="col-md 4 offset-md-2 m-5">
            <img src={item.imagen} alt={item.nombre} className="img-center m-5 rounded mx-auto d-block" width={200} />
      </div>
      <div className="col-md 4 m-5">
          <h1 className="text-primary">{item.nombre}</h1>
          <h4 className="m-4">$ {item.importe}</h4>
          <p>{item.descripcion}</p>
          <ItemCount inicial = {1} stock={item.stock} onAdd={onAdd}/>
      </div>
    </div>  
  )
}

export default ItemDetail;

