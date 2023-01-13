import { collection, getFirestore, getDocs, query, where } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import CargandoDatos from "./CargandoDatos";

import ItemList from "./ItemList";

const ItemListContainer = () => {

    const [listarProductos, setListarProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const {id} = useParams()

    useEffect(() => {
            const db = getFirestore()
            const itemCollection = collection(db, "Productos")

            const q = id ? query(itemCollection, where("categoria", "==", id)) : itemCollection

            getDocs(q).then((snapshot) => { 
                setListarProductos(snapshot.docs.map((doc) => ({ id:doc.id, ...doc.data()})
                ))
                setCargando(false)
             })


        }, [id])

        return (

        <div className="container" >
            {cargando ? <CargandoDatos /> : <ItemList prod = {listarProductos} />}
            
        </div>
    )
} 

export default ItemListContainer;