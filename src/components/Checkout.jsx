import React, { useContext, useState } from "react"
import { collection, addDoc, getFirestore} from "firebase/firestore";
import { CartContext } from "./context/CartContext"
import { Navigate } from "react-router-dom";

const Checkout = () => {

    const {cart, clear, sumaTotal} = useContext(CartContext)
    const[nombre, setNombre] = useState("")
    const[telefono, setTelefono] = useState("")
    const[email, setEmail] = useState("")
    const[orderId, setOrderId] = useState("")
    
    const generaOrden = () => {
        
        const fecha = new Date();
        const order = {
            buyer: {name:nombre, phone:telefono, email:email},
            items: cart.map(item => ({id:item.id, title:item.nombre, price:item.importe})),
            total: sumaTotal(),
            fechaOrden: fecha
           // '${fecha.getFullYear()}-{fecha.getMonth()+1}-${fecha.getDate()} ${fecha.getHour()}:${fecha.getMinute()}:${fecha.getSeconds()}'
        };

            const db = getFirestore();
            const orderCollection = collection(db, "Orders");
            addDoc(orderCollection, order).then((snapshot) => {
                setOrderId(snapshot.id)
                clear()
            })
          }
        
        
        return (
            <div className="container">
                <div className="row m-5">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <label for="nombre" className="form-label">Nombre:</label>
                                <input type="text" className="form-control" id="nombre" placeholder="Ingrese su Nombre" onInput={(e) => {setNombre(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label for="telefono" className="form-label">Telefono:</label>
                                <input type="text" className="form-control" id="telefono" placeholder="Ingrese su Telefono" onInput={(e) => {setTelefono(e.target.value)}}/>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email:</label>
                                <input type="text" className="form-control" id="email" placeholder="Ingrese su Email" onInput={(e) => {setEmail(e.target.value)}}/>
                            </div>
                            <button type="button" className="btn btn-warning" onClick={generaOrden}>Generar Orden</button>
                        </form>

                    </div>
                    <div className="col-md-6">
                        <table className="table">
                            <tbody>
                                {cart.map(item => (
                                    <tr key={item.id}>
                                        <td className="align-middle"><img src={item.imagen} alt={item.nombre} width={48} /></td>
                                        <td className="align-middle"> {item.nombre}</td>
                                        <td className="align-middle">{item.cantidad}</td>
                                        <td className="align-middle">${item.cantidad * item.importe}</td>
                                    </tr>
                                    ))
                                }
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                    <td><b>Total a pagar</b></td>
                                    <td><b>${sumaTotal()}</b></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="row">
                    <div className="col text-center">
                    
                        {orderId ? <Navigate to={"/fincompra/" + orderId}/> : ""} 
                    
                    </div>
                </div>
            </div>
        )
    }
    
   

export default Checkout;
