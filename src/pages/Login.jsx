import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";

const Login = () => {
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const { login } = useAuthContext();
    const navigate = useNavigate();

    const manejarSubmit = (evento) => {
        evento.preventDefault();

        if (user === "admin" && password === "admin") {
            login(user);
            navigate("/admin");
        } else {
            alert("Usuario o contraseña incorrectos");
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card shadow p-4" style={{ maxWidth: "400px", width: "100%" }}>
                <h3 className="text-center mb-4">Iniciar sesión</h3>

                <form onSubmit={manejarSubmit}>

                    <div className="mb-3">
                        <label className="form-label">
                            Usuario <span className="text-muted">(admin)</span>
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            value={user}
                            onChange={(e) => setUser(e.target.value)}
                            required
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">
                            Contraseña <span className="text-muted">(admin)</span>
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary w-100">
                        Iniciar sesión
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;