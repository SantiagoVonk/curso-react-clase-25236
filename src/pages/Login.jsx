import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../context/AuthContext"

const Login = () => {
    const [user, setUser] = useState("")
    const [password, setPassword] = useState("")

    const { login } = useAuthContext()
    const navigate = useNavigate()

    const manejarSubmit = (evento) => {

        evento.preventDefault()

        if (user == "admin" && password == "admin") {
            login(user)
            navigate("/admin")
        } else {
            alert("Usuario o contraseña incorrectos")
        }
    }

    return (
        <>
            <form onSubmit={manejarSubmit}>
                <h3>Iniciar sesion</h3>
                <label htmlFor="">Usuario</label>
                <input type="text" value={user} onChange={(evento) => setUser(evento.target.value)}></input>
                <br />
                <label htmlFor="">Contraseña</label>
                <input type="password" value={password} onChange={(evento) => setPassword(evento.target.value)}></input>
                <br />
                <button type="submit">Iniciar sesion</button>

            </form>

        </>

    )
}

export default Login