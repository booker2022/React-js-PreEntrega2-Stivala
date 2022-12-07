import React from "react";

const ItemDetail = ({item}) => {
    return(
      <div className="row">
        <div className="col-md 4 offset-md-2 m-5">
            <img src={item.imagen} alt={item.nombre} className="img-center m-5 rounded mx-auto d-block" width={200} />
        </div>
        <div className="col-md 4 m-5">
            <h1 className="text-primary">{item.nombre}</h1>
            <h4 className="m-4">$ {item.importe}</h4>
            <p>{item.descripcion}</p>
        </div>
      </div>  
  )
}

export default ItemDetail;
