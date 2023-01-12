import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "./context/CartContext";

const CartWidget = ({initial, stock, onadd}) => {

    const {cartTotal}= useContext(CartContext)

    return (
        <div>
            <Link to={"/Cart"} className="btn btn-ligth position-relative">
                <img src="../imagenes/carrito.png" alt="Carrito" width="50"/> 
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                        {cartTotal()}
                    <span className="visually-hidden">mensage</span>
                </span>
            </Link>

            <span className="pl-4 h5">Mi Carrito</span>
        </div>
    )
}

export default CartWidget;
