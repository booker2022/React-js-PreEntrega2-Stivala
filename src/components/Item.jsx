import React from "react";
import { Link } from "react-router-dom";

const Item = ({ItemProdu}) => {
    return(
        <div className="col-md-4 p-2 text-center">
            <Link to={"/item/" + ItemProdu.id} className="text-dark test-decoration-none">
                <div className="card">
                    <img src={ItemProdu.imagen} className="img-fluid mx-auto py-3" alt={ItemProdu.nombre} />
                    <div className="card-body">
                        <h5 className="card-title" >{ItemProdu.importe}</h5>
                        <p className="card-text">{ItemProdu.nombre}</p>
                        <a href="#" className="btn btn-primary">Agregar al Carrito</a>
                    </div>
                </div>
            </Link>
        </div>
        )
    }

export default Item;

