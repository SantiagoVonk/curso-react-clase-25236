import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

const DetalleProducto = () => {

    const { id } = useParams()
    const [producto, setProducto] = useState(null)
    const url = `https://fakestoreapi.com/products/${id}`

    

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
            <h2>DETALLE: {producto.title}</h2>
            <img src={producto.image} alt={producto.name} width={150} />
            <p>{producto.description}</p>
            <Link to={"/"}>INICIO</Link>
        </div>
    )
}

export default DetalleProducto