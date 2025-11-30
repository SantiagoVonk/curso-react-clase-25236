import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Header = () => {


    const {user, logout} = useAuthContext()
    const estaLogeado = !!user

    return (
        <header style={{backgroundColor: "gray", padding: "10px", textAlign: "center", color:"whitesmoke"}} >
            <h1>Bienvenidos a mi APP</h1>

            {estaLogeado ? <button onClick={logout}>Cerrar sesion</button> : <Link to="/login"> <button>Ingresa</button> </Link>}
        </header>
    )
}

export default Header;