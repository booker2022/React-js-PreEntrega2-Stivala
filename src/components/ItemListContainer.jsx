import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {productos} from "../assets/productos"

import ItemCount from "./ItemCount"
import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [listarProductos, setListarProductos] = useState([])
    const {id} = useParams()
  
    useEffect (() => {
        const promesa = new Promise((res, rej) =>  {
            setTimeout ( () => {
               res(id ? productos.filter(item => item.categoria === id) : productos)
            }, 2000)
        })
        
        promesa.then(data => {                              
            setListarProductos(data)
        })
    },[id])

    return (

        <div className="container" >
            <ItemList prod = {listarProductos} />
            <ItemCount inicial = {1} stock = {10} />
        </div>

    )
} 

export default ItemListContainer;