import CarritoAPI from "./CarritoAPI";
import ProductosAPI from "./ProductosAPI";
import { useState } from "react";

const Main = () => {

    const [carrito, setCarrito] = useState([])

    const agregarCarrito = (producto) => {
        setCarrito([...carrito, producto])
    }

    const eliminarProducto = (indexAEliminar) => {
        setCarrito(prevProductos =>
            prevProductos.filter((_, index) => index !== indexAEliminar)
        )
    }

    return (
        <main style={{ padding: "20px" }}>

            <ProductosAPI agregarCarrito= {agregarCarrito} />

           {carrito.length === 0 ? <></> : <CarritoAPI productosEnCarrito= {carrito} productoAEliminar= {eliminarProducto} /> } 

        </main>
    )
}

export default Main;
