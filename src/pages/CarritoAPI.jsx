
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

const CarritoAPI = () => {
    const { carrito, eliminarProducto } = useContext(CarritoContext);

    return (
        <div className="container py-4">

            <h2 className="mb-4 text-center">
                Carrito de Compras{" "}
                <img
                    src="https://pngimg.com/d/shopping_cart_PNG38.png"
                    alt="Carrito"
                    width={30}
                />
            </h2>

            {/* Carrito vacío */}
            {carrito.length === 0 ? (
                <div className="alert alert-info text-center">
                    El carrito está vacío
                </div>
            ) : (
                <ul className="list-group">
                    {carrito.map((item, index) => (
                        <li
                            key={index}
                            className="list-group-item d-flex justify-content-between align-items-center"
                        >
                            {/* Info del producto */}
                            <div className="d-flex align-items-center">
                                <img
                                    src={item.imagen}
                                    alt={item.nombre}
                                    width={50}
                                    className="rounded me-3"
                                    style={{ objectFit: "cover", height: "50px" }}
                                />
                                <div>
                                    <h6 className="mb-1">{item.nombre}</h6>
                                    <span className="fw-bold text-success">
                                        ${item.precio}
                                    </span>
                                </div>
                            </div>

                            {/* Botón eliminar */}
                            <button
                                className="btn btn-danger btn-sm"
                                onClick={() => eliminarProducto(index)}
                            >
                                Eliminar
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default CarritoAPI;