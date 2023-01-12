import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {productos} from "../assets/productos"

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
        </div>
    )
} 

export default ItemListContainer;