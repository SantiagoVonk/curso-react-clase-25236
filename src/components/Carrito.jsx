import { useState } from "react";

const Carrito = () => {

    const listaProductos = [
        { id: 1, nombre: "Naranja", precio: 1500 },
        { id: 2, nombre: "Manzana", precio: 1800 },
        { id: 3, nombre: "Tomate", precio: 1300 }
    ]

    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto])
    }

    const vaciarCarrito = () => {
        setCarrito([])
    } 
    console.log(carrito)
    if (carrito.length == 0) {
         <p>Carrito vacio</p>
    }

    return (
        <div>
            <h2>Productos</h2>
            <ul>
                {listaProductos.map(producto =>
                    <li style={{ listStyleType: "none" }} key={producto.id}>{producto.nombre}{producto.precio}
                        <button onClick={() => agregarCarrito(producto)}>Agregar al Carrito</button>
                    </li>
                )}
            </ul>

            <h2>Carrito</h2>
                {carrito.length === 0 ? (<p>El carrito esta vacio</p>) : 
                carrito.map((item, index) =>
                    <p key={index}>{item.nombre} {item.precio}$</p>
                )}
                
                {carrito.length === 0 ? (<></>) : (<button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>)}
                
        </div>
    )
}

export default Carrito;