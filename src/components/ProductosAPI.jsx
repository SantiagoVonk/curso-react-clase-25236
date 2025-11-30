import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

const ProductosAPI = ({detalleProducto}) => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    const url = "https://692c893ac829d464006fd8cc.mockapi.io/productos"


    const {agregarCarrito} = useContext(CarritoContext)


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
                        {producto.nombre}
                        <img src={producto.imagen} alt={producto.descripcion} width={40} />
                        {producto.precio} $ 
                        <button onClick={() => agregarCarrito(producto)}>Agregar al Carrito</button>
                        <Link to={`/productos/${producto.id}`}>Detalles productos</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductosAPI;