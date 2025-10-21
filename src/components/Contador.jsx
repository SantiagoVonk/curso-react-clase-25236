import { useState } from "react";

const Contador = () => {

    const [contador, setContador] = useState(0);

    const ManejarClick = () => {
        alert("Boton cliqueado!")
    }

    return (
        <>
        <p>Valor del contador {contador}</p>
        <button style={{backgroundColor:"green", padding:"10px"}} onClick={() => setContador(contador + 1)}>Incrementar</button>
        <button style={{backgroundColor:"red", padding:"10px"}} onClick={() => setContador(contador - 1)}>Decrementar</button>
        <button onClick={ManejarClick}>Hacer Click</button>
        </>
    )
}

export default Contador;