import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
//import { productos } from "../assets/productos";
import {doc, getDoc,getFirestore} from "firebase/firestore";


const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const {id} = useParams()
    
//    useEffect(() => {
//    const promesa = new Promise((res, rej) =>  {

//        setTimeout (() => {
//            res(productos.find(item => item.id === parseInt(id)))
//        }, 2000)

//        })
  
//        promesa.then(data => {                              
//            setItem(data)
//        })
//    },[id])


    useEffect(() => {
        const db = getFirestore();
        
        const item = doc(db, "Productos", "bwM7tZJQJDbaZPqMQ6AM1");
        getDoc(item).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({id:snapshot.id, ...snapshot.data()})
            } else {
                console.log("Producto inexistente");
            }
            });
        }, [id]);
   

    return(
        <div className="container">
            <ItemDetail item = {item} />
        </div>
    )
}

export default ItemDetailContainer;
