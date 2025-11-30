import { useEffect, useState } from "react";
import FormProductos from "./FormProductos";
import EditarProducto from "./EditarProducto";

const GestionProducto = () => {
    const [productos, setProductos] = useState([]);
    const [productoSeleccionado, setProductoSeleccionado] = useState(null);
    const [cargando, setCargando] = useState(true);

    const API = "https://692c893ac829d464006fd8cc.mockapi.io/productos";

    // Cargar productos al iniciar
    useEffect(() => {
        cargarProductos();
    }, []);

    const cargarProductos = async () => {
        try {
            setCargando(true);
            const respuesta = await fetch(API);
            const datos = await respuesta.json();
            setProductos(datos);
        } catch (error) {
            console.error("Error al cargar los productos", error);
            alert("Error al cargar los productos");
        } finally {
            setCargando(false);
        }
    };

    const seleccionarProducto = (producto) => {
        setProductoSeleccionado(producto);
    };

    if (cargando)
        return (
            <div className="text-center py-5">
                <div className="spinner-border" role="status"></div>
                <p className="mt-3">Cargando productos...</p>
            </div>
        );

    // AGREGAR PRODUCTO
    const agregarProducto = async (producto) => {
        try {
            const respuesta = await fetch(API, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(producto),
            });

            if (!respuesta.ok) throw new Error("Error al agregar el producto");

            const dato = await respuesta.json();
            alert("Producto agregado correctamente");
            setProductos([...productos, dato]);

        } catch (error) {
            console.log(error.message);
            alert("Hubo un problema al agregar el producto");
        }
    };

    // ELIMINAR PRODUCTO
    const eliminarProductos = async (id) => {
        const confirmar = window.confirm(
            "¿Estás seguro de querer eliminar este producto?"
        );

        if (confirmar) {
            try {
                const respuesta = await fetch(`${API}/${id}`, {
                    method: "DELETE",
                });

                if (!respuesta.ok) throw new Error("Error al eliminar producto");

                setProductos(productos.filter((producto) => producto.id !== id));

                alert("Producto eliminado");
            } catch (error) {
                console.error(error.message);
                alert("Error al eliminar producto");
            }
        }
    };

    return (
        <div className="container py-4">

            {/* Título */}
            <h2 className="text-center mb-4">Gestión de Productos</h2>

            {/* Grid de productos */}
            <div className="row g-4 mb-5">
                {productos.map((producto) => (
                    <div className="col-md-4 col-lg-3" key={producto.id}>
                        <div className="card h-100 shadow-sm">

                            <img
                                src={producto.imagen}
                                className="card-img-top"
                                alt={producto.nombre}
                                style={{ height: "180px", objectFit: "cover" }}
                            />

                            <div className="card-body d-flex flex-column">
                                <h5 className="card-title">{producto.nombre}</h5>

                                <p className="card-text fw-bold text-primary">
                                    ${producto.precio}
                                </p>

                                <button
                                    className="btn btn-outline-primary mb-2"
                                    onClick={() => seleccionarProducto(producto)}
                                >
                                    Editar
                                </button>

                                <button
                                    className="btn btn-danger"
                                    onClick={() => eliminarProductos(producto.id)}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Formularios */}
            <div className="row">
                <div className="col-md-6 mb-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="mb-3">Agregar Producto</h4>
                            <FormProductos onAgregar={agregarProducto} />
                        </div>
                    </div>
                </div>

                <div className="col-md-6 mb-4">
                    <div className="card shadow">
                        <div className="card-body">
                            <h4 className="mb-3">Editar Producto</h4>
                            {productoSeleccionado ? (
                                <EditarProducto productoSeleccionado={productoSeleccionado} />
                            ) : (
                                <p className="text-muted">Seleccione un producto para editarlo.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default GestionProducto;