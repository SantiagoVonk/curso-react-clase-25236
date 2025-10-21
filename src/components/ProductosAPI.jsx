import { useState, useEffect, use } from "react";
import { Link } from "react-router-dom";

const ProductosAPI = ({agregarCarrito, detalleProducto}) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    const url = "https://fakestoreapi.com/products"


    useEffect(() => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProductos(datos)
                setCargando(false)
            })
            .catch(error => {
                setError("Hubo un problema al cargar los datos")
                setCargando(false)
            })
    }, [])

    if (cargando) return <p>Cargando productos...Espere</p>
    if (error) return <p>{error}</p>

    return (
        <div>
            <h2>Productos</h2>
            <ul>
                {productos.map(producto => (
                    <li style={{ listStyleType: "none" }} key={producto.id}>
                        {producto.title}
                        <img src={producto.image} alt={producto.description} width={40} />
                        {producto.price} $ 
                        <button onClick={() => agregarCarrito(producto)}>Agregar al Carrito</button>
                        <Link to={`/productos/${producto.id}`}>Detalles productos</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductosAPI;