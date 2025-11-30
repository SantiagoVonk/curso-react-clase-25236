import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const DetalleProducto = () => {
    const { id } = useParams();
    const [producto, setProducto] = useState(null);

    const url = `https://692c893ac829d464006fd8cc.mockapi.io/productos/${id}`;

    useEffect(() => {
        fetch(url)
            .then((respuesta) => respuesta.json())
            .then((datos) => setProducto(datos))
            .catch((error) => console.log(error));
    }, [id]);

    // Spinner de carga
    if (!producto) {
        return (
            <div className="container text-center py-5">
                <div className="spinner-border" role="status"></div>
                <p className="mt-3">Cargando producto...</p>
            </div>
        );
    }

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card shadow p-4 text-center">

                        <h2 className="mb-3">{producto.nombre}</h2>

                        <img
                            src={producto.imagen}
                            alt={producto.nombre}
                            className="img-fluid rounded mb-3"
                            style={{ maxHeight: "250px", objectFit: "cover" }}
                        />

                        <p className="fs-5">{producto.descripcion}</p>

                        <p className="fw-bold text-primary fs-4">
                            ${producto.precio}
                        </p>

                        <Link to="/" className="btn btn-secondary mt-3">
                            Volver al inicio
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetalleProducto;