import React,{ useContext } from "react";
import { CartContext } from "./context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {

    const {cart, cartTotal, clear, removeItem, sumaTotal} = useContext(CartContext)

    if (cartTotal() === 0 ) {
        return (
            <div className="container">
                <div className="row m-5">
                    <div className="col-md-12 text-center">

                        <div className="alert alert-danger" role="alert">
                            <h3>No se encontraron productos en el carrito!</h3>
                        </div>
                        <Link to={"/"} className="btn btn-warning">Volver al Inicio</Link>c

                    </div>
                </div>
            </div>
        )
    } 

    return(
        <div className="container">
           <div className="row m-5">
                <div className="col-md-12 text-center">

                    <table className="table">
                        <thead>
                            <tr>
                                <th scope="col" colSpan={5} className="text-end">
                                    <Link onClick={clear} className="btn btn-warning" title={"Vaciar carrito"}>Vaciar carrito</Link>
                                </th>
                            </tr>
                            <tr>
                                <th scope="col">&nbsp;</th>
                                <th scope="col">Producto</th>
                                <th scope="col">Cantidad</th>
                                <th scope="col">Precio</th>
                                <th>&nbsp</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                <tr key={item.id}>
                                    <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={48} /></td>
                                    <td className="align-middle"> {item.nombre}</td>
                                    <td className="align-middle">{item.cantidad}</td>
                                    <td className="align-middle">${item.cantidad * item.importe}</td>

                                    <td className="align-middle"> <Link onClick={() => {removeItem(item.id)}}> 
                                        <img src={"/imagenes/trash3.svg"} alt={"Eliminar Producto"} title={"Eliminar Producto"} width={32} /></Link>
                                    </td>
                                </tr>
                                ))
                            }
                            <tr>
                                <td colSpan={2}>&nbsp;</td>
                                <td><b>Total a pagar</b></td>
                                <td><b>${sumaTotal()}</b></td>
                                <td className="text-end"><Link to={"/Checkout"} className="btn btn-warning" title={"Finalizar compra"}>Finalizar compra</Link></td>

                            </tr>

                                
                        </tbody>
                    </table>

                </div>
            </div>
        </div>
    )
}

export default Cart

