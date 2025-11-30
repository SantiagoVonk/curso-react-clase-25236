import { createContext, useState } from "react"

export const CarritoContext = createContext();

export const CarritoProvider = ({ children }) => {

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

        <CarritoContext.Provider value={{ carrito, agregarCarrito, eliminarProducto }}>
            {children}
        </CarritoContext.Provider>
    )
}