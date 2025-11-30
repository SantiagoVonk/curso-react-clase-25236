
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Header = () => {

    const { user, logout } = useAuthContext();
    const estaLogeado = !!user;

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container">

                {/* Logo / Título */}
                <Link className="navbar-brand fw-bold" to="/">
                    APP-STORE GAME
                </Link>

                {/* Botón colapsable mobile */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarContent"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarContent">

                    <ul className="navbar-nav ms-auto">

                        {/* Si está logeado muestra botón logout */}
                        {estaLogeado ? (
                            <li className="nav-item">
                                <button
                                    className="btn btn-outline-light ms-3"
                                    onClick={logout}
                                >
                                    Cerrar sesión
                                </button>
                            </li>
                        ) : (
                            <li className="nav-item">
                                <Link to="/login" className="btn btn-primary ms-3">
                                    Ingresar
                                </Link>
                            </li>
                        )}

                    </ul>

                </div>

            </div>
        </nav>
    );
};

export default Header;


/*
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

*/