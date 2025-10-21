import { useState } from "react";

const Formulario = () => {

    const [nombre, setNombre] = useState("")
    const ManejarEnvio = (evento) => {
        evento.preventDefault();
        alert(`Formulario enviado por ${nombre}`)
    }
    
    return (
        <form onSubmit={ManejarEnvio}>
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Ingrese su nombre"/>
            <button type="submit">Enviar Formulario</button>
        </form>

    )
}

export default Formulario;