import { useEffect, useState } from "react"

const EditarProducto = ({ productoSeleccionado }) => {

    const [producto, setProducto] = useState(productoSeleccionado || {
        nombre: "",
        precio: "",
        imagen: "",
        descripcion: ""
    })

    const API = "https://692c893ac829d464006fd8cc.mockapi.io/productos"

    useEffect(() => {
        if (productoSeleccionado)
            setProducto(productoSeleccionado)

    }, [productoSeleccionado])

    const manejarChange = (evento) => {
        const { name, value } = evento.target
        setProducto({ ...producto, [name]: value })
    }

    const manejarSubmit = async (evento) => {
        evento.preventDefault()
        try {
            const respuesta = await fetch(`${API}/${producto.id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(producto)
            })
            if (!respuesta.ok) throw new Error("Error al actualizar el producto");

            const datos = await respuesta.json()
            
            alert("Producto actualizado correctamente")
        } catch (error) {
            console.log(error.message)
            alert("Hubo un error al actualizar el producto")
        }
    }

    return (

        <>
            <form onSubmit={manejarSubmit}>
                <h2>EDITAR PRODUCTO</h2>
                <div>
                    <label>Nombre:</label>
                    <br />
                    <input type="text" name="nombre" value={producto.nombre || ""} required onChange={manejarChange} />
                </div>

                <div>
                    <label>Precio:</label>
                    <br />
                    <input type="number" name="precio" value={producto.precio || ""} min={0} step="any" required onChange={manejarChange} />
                </div>

                <div>
                    <label>URL de imagen</label>
                    <br />
                    <input type="text" name="imagen" value={producto.imagen || ""} required onChange={manejarChange} />
                </div>

                <div>
                    <label>Descripcion:</label>
                    <br />
                    <textarea name="descripcion" value={producto.descripcion || ""} required onChange={manejarChange} />
                </div>
                <button type="submit">Actualizar producto</button>
            </form>
        </>
    )
}

export default EditarProducto