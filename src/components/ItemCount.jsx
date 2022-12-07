import React from "react";
import { useState } from "react";


const ItemCount = ({inicial , stock}) => {

    //declaro el Hock state
    const [contador, setContador] = useState(inicial)

    //funcion parar sumar 1 al carrito
    const sumarCarrito = () => contador < stock && setContador(contador + 1)

    //funcion parar restar 1 al carrito
    const restarCarrito = () => contador > inicial && setContador(contador - 1) 

    //funcion onAdd
    const onAdd = () => stock !== 0 && console.log("Agregaste: " + contador + " productos al carrito")


    return (
        <div>
            <div className="btn-group" role="group" aria-label="Basic outlined example">
                <button type="button" className="btn btn-outline-primary" onClick={restarCarrito}> - </button>
                <button type="button" className="btn btn-outline-primary">{contador}</button>
                <button type="button" className="btn btn-outline-primary" onClick={sumarCarrito}> + </button>
            </div>

            <button type="button" className="btn btn-outline-primary m-4 " onClick={onAdd}>Agregar al Carrito</button>


        </div>
    )
} 

export default ItemCount;
