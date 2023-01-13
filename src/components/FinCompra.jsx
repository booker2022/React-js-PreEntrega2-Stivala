import React from "react";
import { useParams, Link } from "react-router-dom";

const FinCompra = () => {
    
    const {id} = useParams()

    return (
   
        <div className="container">
            <div className="row m-5">
                <div className="col text-center">
                    <div className="alert alert-warning" roles="alert">
                        <h1>Gracias por su compra</h1>
                        <h3>Su número de orden es: <b>{id}</b> </h3>
                    </div>
                    <Link to={"/"} className="btn btn-warning">Volver al Inicio</Link>
                </div>
            </div>
        </div>



      
    )
}
export default FinCompra;

