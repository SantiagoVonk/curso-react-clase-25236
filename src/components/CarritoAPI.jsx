
const CarritoAPI = ({productosEnCarrito, productoAEliminar}) => {

    /*
    const vaciarCarrito = () => {
        setCarrito([])
    }

    {productosEnCarrito.length === 0 ? (<></>) : (<button onClick={() => vaciarCarrito()}>Vaciar Carrito</button>)}
    */

    return (
        <div>
            
            <h2>Carrito <img src="https://pngimg.com/d/shopping_cart_PNG38.png" alt="" width={20}  /></h2>

            {productosEnCarrito.length === 0 ? (<p>El carrito esta vacio</p>) :
                productosEnCarrito.map((item, index) =>
                    <li key={index} style={{ listStyleType: "none" }}>
                        {item.title} <img src={item.image} alt={item.description} width={40} /> {item.price}$
                        <button onClick={() => productoAEliminar(index)}>Eliminar</button>
                    </li>
                )}

        </div>
    )
}

export default CarritoAPI;