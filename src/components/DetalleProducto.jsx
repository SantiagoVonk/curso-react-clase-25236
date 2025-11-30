import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const DetalleProducto = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState(null)
    const url = `https://692c893ac829d464006fd8cc.mockapi.io/productos/${id}`

    

    useEffect( () => {
        fetch(url)
        .then(respuesta => respuesta.json())
        .then(datos => setProducto(datos))
        .catch(error => console.log(error))
    }, [id] )

    if (!producto) {
        return <p>Cargando producto...</p>
    }

    return (
        <div>
            <h2>DETALLE: {producto.nombre}</h2>
            <img src={producto.imagen} alt={producto.nombre} width={150} />
            <p>{producto.descripcion}</p>
            <Link to={"/"}>INICIO</Link>
        </div>
    )
}

export default DetalleProducto