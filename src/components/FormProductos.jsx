import { useState } from "react"


const FormProductos = ({onAgregar}) => {

    const [errores, setErrores] = useState({})
    const [producto, setProducto] = useState({
        nombre: "",
        precio: "",
        imagen: "",
        descripcion: ""
    })

    const manejarChange = (evento) => {
        const {name, value} = evento.target
        setProducto({...producto, [name]: value})
    }

    const validarForm = () => {
        const nuevosErrores = {}

        if (!producto.nombre.trim())
            nuevosErrores.nombre = "El nombre es obligatorio!"

        if (!producto.precio || producto.precio < 0)
            nuevosErrores.precio = "El precio debe ser mayor a 0!"

        if (!producto.imagen.trim() || producto.imagen.length < 6)
            nuevosErrores.imagen = "La URL de la imagen debe ser valida!"

        if (!producto.descripcion.trim() || producto.descripcion.length < 10)
            nuevosErrores.descripcion = "La descripcion debe tener al menos 10 caracteres!"

        setErrores(nuevosErrores)
        return Object.keys(nuevosErrores).length === 0
    } 


    const manejarSubmit = (evento) => {
        evento.preventDefault()

        if (!validarForm()) 
            return
    
        const productoAEnviar = {
            ...producto,
            precio: parseFloat(producto.precio)
        }

        onAgregar(productoAEnviar)
        setProducto({nombre: "", precio: "", imagen: "", descripcion: ""})
        setErrores({})
    }



    return (
        <>
            <form onSubmit={manejarSubmit}>
                <h2>Agregar producto</h2>

                <div>
                    <label>Nombre:</label>
                    <br />
                    <input type="text" name="nombre" value={producto.nombre} required onChange={manejarChange} />
                </div>
                {errores.nombre && <p style={{ color: "red" }}>{errores.nombre}</p>}

                <div>
                    <label>Precio:</label>
                    <br />
                    <input type="number" name="precio" value={producto.precio} min={0} step="any" required onChange={manejarChange} />
                </div>
                {errores.precio && <p style={{ color: "red" }}>{errores.precio}</p>}

                <div>
                    <label>URL de imagen</label>
                    <br />
                    <input type="text" name="imagen" value={producto.imagen} required onChange={manejarChange} />
                </div>
                {errores.imagen && <p style={{ color: "red" }}>{errores.imagen}</p>}

                <div>
                    <label>Descripcion:</label>
                    <br />
                    <textarea name="descripcion" value={producto.descripcion} required onChange={manejarChange} />
                </div>
                {errores.descripcion && <p style={{ color: "red" }}>{errores.descripcion}</p>}

                <button type="submit">Agregar productos</button>
            </form>
        </>
    )
}

export default FormProductos