import { useEffect, useState } from "react"
import FormProductos from "./FormProductos"
import EditarProducto from "./EditarProducto"

const GestionProducto = () => {
    const [productos, setProductos] = useState([])
    const [productoSeleccionado, setProductoSeleccionado] = useState(null)
    const [cargando, setCargando] = useState(true)
    const API = "https://692c893ac829d464006fd8cc.mockapi.io/productos"

    //trae los productos de la api
    useEffect(() => {
        cargarProductos()
    }, [])

    const cargarProductos = async () => {
        try {
            setCargando(true)
            const respuesta = await fetch(API)
            const datos = await respuesta.json()
            setProductos(datos)
        } catch (error) {
            console.log("Error al cargar los productos", error)
            alert("Error al cargar los productos")
        } finally {
            setCargando(false)
        }
    }

    const seleccionarProducto = (producto) => {
        setProductoSeleccionado(producto)
    }

    if (cargando)
        return <p>CARGANDO PRODUCTOS...</p>


    //FUNCION PARA AGREGAR PRODUCTOS A LA API
    const agregarProducto = async (producto) => {

        try {
            const respuesta = await fetch(API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(producto)
            })

            if (!respuesta.ok) throw new Error("Error al cargar el producto")

            const dato = await respuesta.json()
            console.log("Producto agregado ", dato)
            alert("Producto agregado correctamente")

            setProductos([...productos, dato])

        } catch (error) {
            console.log(error.message)
            alert("Hubo un problema al cargar el producto")

        }
    }

    //FUNCION PARA ELIMINAR PRODUCTOS
    const eliminarProductos = async (id) => {
        const confirmar = window.confirm("¿Estas seguro de querer eliminar el producto?")

        if (confirmar) {
            try {
                const respuesta = await fetch(`${API}/${id}`, {
                    method: "DELETE",
                })

                if (!respuesta.ok) {
                    throw new Error("Error al eliminar producto")
                    //FILTRA Y CREA NUEVO ARRAY SIN EL PRODUCTO ELIMINADO
                    setProductos(productos.filter(producto => producto.id != id))
                }
            } catch (error) {
                console.error(error.message)
                alert("Error al eliminar producto")
            }

        }

    }


    return (
        <>
            <div>
                {productos.map((producto) => (
                    <div key={producto.id} onClick={() => seleccionarProducto(producto)}>
                        <img src={producto.imagen} alt={producto.nombre} width={100} />
                        <h3>{producto.nombre}</h3>
                        <p>Precio: $ {producto.precio}</p>
                        <button onClick={() => eliminarProductos(producto.id)}>ELIMINAR</button>
                    </div>
                ))}

            </div>

            <FormProductos onAgregar={agregarProducto} />
            <EditarProducto productoSeleccionado={productoSeleccionado}/>
        </>

    )
}

export default GestionProducto