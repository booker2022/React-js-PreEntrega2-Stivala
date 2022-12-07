import React from "react";
import Item from "./Item";

const ItemList = ({prod}) => {
    return(
        <div className="row m-3">
            {
                prod.map(producto => <Item key={producto.id} ItemProdu={producto} />)
            }
        </div>
    )
}

export default ItemList;
