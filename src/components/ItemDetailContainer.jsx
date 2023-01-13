import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "./ItemDetail";
import {doc, getDoc,getFirestore} from "firebase/firestore";
import CargandoDatos from "./CargandoDatos";

const ItemDetailContainer = () => {

    const [item, setItem] = useState([])
    const [cargando, setCargando] = useState(true)
    const {id} = useParams()
    
    useEffect(() => {
        const db = getFirestore();
        
        const item = doc(db, "Productos", id);
        getDoc(item).then((snapshot) => {
            if (snapshot.exists()) {
                setItem({id:snapshot.id, ...snapshot.data()})
                setCargando(false)
            } else {
                console.log("Producto inexistente");
            }
            });
        }, []);
   

    return(
        <div className="container">
            {cargando ? <CargandoDatos /> : <ItemDetail item = {item} /> }
        </div>
    )
}

export default ItemDetailContainer;
