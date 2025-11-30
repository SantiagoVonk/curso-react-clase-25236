import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const CarritoAPI = () => {

    /*
    const vaciarCarrito = () => {
        setCarrito([])
    }

    {productosEnCarrito.length === 0 ? (<></>) : (<button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>)}
    */

    const {carrito, eliminarProducto } = useContext(CarritoContext)


    return (
        <div>
            
            <h2>Carrito <img src="https://pngimg.com/d/shopping_cart_PNG38.png" alt="" width={20}  /></h2>

            {carrito.length === 0 ? (<p>El carrito esta vacio</p>) :
                carrito.map((item, index) =>
                    <li key={index} style={{ listStyleType: "none" }}>
                        {item.nombre} <img src={item.imagen} alt={item.descripcion} width={40} /> {item.precio}$
                        <button onClick={() => eliminarProducto(index)}>Eliminar</button>
                    </li>
                )}

        </div>
    )
}

export default CarritoAPI;