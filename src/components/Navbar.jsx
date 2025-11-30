import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext"
const Navbar = () => {

    const {user} = useAuthContext()
    const esAdmin = user === "admin"


    return (
        <nav style={{ backgroundColor: "#333", color: "white", padding: "10px" }}>
            <ul style={{ listStyle: "none", display: "flex", justifyContent: "space-around", margin: "0" }}>
                
                <li> <Link to={"/"}>Inicio</Link> </li>
                <li> <Link to={"/carrito"}>Carrito</Link> </li>

                { esAdmin && <li> <Link to={"/admin"}>Admin</Link> </li>}

                <li> <Link to={"/moda"}>Moda</Link> </li>
                <li> <Link to={"/acercaDe"}>Acerca De</Link> </li>
                <li> <Link to={"/login"}>Login</Link> </li>

            </ul>
        </nav>

    )
}

export default Navbar;