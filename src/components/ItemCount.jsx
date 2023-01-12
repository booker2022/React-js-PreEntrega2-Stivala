import React, { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";


const ItemCount = ({inicial , stock, onAdd}) => {

    //declaro la variable state contador que va a ir mostrando la cantidad de productos seleccionados
    const [contador, setContador] = useState(inicial)
    //declaro la variable state itemStock la cual va a contener el stock actualizado
    const [itemStock, setItemStock] = useState(stock)
    //declaro la variable state vendido (como flag) para saber si presione el boton de agregar al carrito para cambiar la leyenda
    const [vendido, setVendido] = useState(false)

    //funcion parar sumar 1 al carrito
    const sumarCarrito = () => contador < itemStock && setContador(contador + 1)

    //funcion parar restar 1 al carrito
    const restarCarrito = () => contador > inicial && setContador(contador - 1) 


    const addToCart = (cantidad) => {
        if (contador <= itemStock) {
            setContador(inicial)
            setItemStock(itemStock - cantidad)
            setVendido(true)
            onAdd(cantidad)
        }
    } 

    useEffect(() => {
        setItemStock(stock)
    },[stock])

    return (
        <div>
            <div className="row mb-3">
                <div className="col-md-5 text-center">
                    <div className="btn-group" role="group" aria-label="Basic outlined example">
                        <button type="button" className="btn btn-outline-primary" onClick={restarCarrito}> - </button>
                        <button type="button" className="btn btn-outline-primary">{contador}</button>
                        <button type="button" className="btn btn-outline-primary" onClick={sumarCarrito}> + </button>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 text-center">
                    {vendido ? <Link to={"/Cart"} className="btn btn-outline-primary m-4">Termnar Mi Compra</Link> :
                    <button type="button" className="btn btn-outline-primary m-4 " onClick={() => {addToCart(contador)}} >Agregar al Carrito</button>
                    }
                </div>
            </div>


        </div>
    )
} 

export default ItemCount;
