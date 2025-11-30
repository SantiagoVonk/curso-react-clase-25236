
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { CarritoContext } from "../context/CarritoContext";

const ProductosAPI = () => {

    const [productos, setProductos] = useState([])
    const [cargando, setCargando] = useState(true)
    const [error, setError] = useState(null)
    const url = "https://692c893ac829d464006fd8cc.mockapi.io/productos"

    const { agregarCarrito } = useContext(CarritoContext)

    useEffect(() => {
        fetch(url)
            .then(respuesta => respuesta.json())
            .then(datos => {
                setProductos(datos)
                setCargando(false)
            })
            .catch(() => {
                setError("Hubo un problema al cargar los productos")
                setCargando(false)
            })
    }, [])

    if (cargando)
        return <div className="text-center py-5"><div className="spinner-border" role="status"></div></div>

    if (error)
        return <div className="alert alert-danger text-center">{error}</div>

    return (
        <div className="container mt-4">
            <h2 className="text-center mb-4">Productos</h2>

            <div className="row g-4">
                {productos.map(producto => (
                    <div className="col-md-4 col-lg-3" key={producto.id}>
                        <div className="card h-100 shadow-sm">

                            <img
    src={producto.imagen}
    alt={producto.nombre}
    className="card-img-top"
    style={{ height: "180px", objectFit: "contain", backgroundColor: "#f8f9fa" }}
/>


                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{producto.nombre}</h5>
                                

                                <p className="fw-bold mt-auto">
                                    ${producto.precio}
                                </p>

                                <button
                                    className="btn btn-primary w-100 mb-2"
                                    onClick={() => agregarCarrito(producto)}
                                >
                                    Agregar al Carrito
                                </button>

                                <Link
                                    to={`/productos/${producto.id}`}
                                    className="btn btn-outline-secondary w-100"
                                >
                                    Ver Detalles
                                </Link>
                            </div>

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductosAPI;