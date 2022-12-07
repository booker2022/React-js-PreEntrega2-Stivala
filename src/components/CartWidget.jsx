import React from "react";

const CartWidget = ({initial, stock, onadd}) => {

    return (
        <div>
            <button type="button" class="btn btn-ligth position-relative">
                <img src="./imagenes/carrito.png" alt="Carrito" width="50"/> 
                <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">1
                    <span class="visually-hidden">mensage</span>
                </span>
            </button>
            <span className="pl-4 h5">Mi Carrito</span>
        </div>
    )
}

export default CartWidget;
