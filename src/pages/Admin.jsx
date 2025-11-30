import GestionProducto from "../components/GestionProducto";

const Admin = () => {
  return (
    <div className="container py-5">
      <div className="text-center mb-4">
        <h1 className="display-5 fw-bold">Gestión de Productos</h1>
        <p className="text-muted">Administra tus productos fácilmente desde aquí</p>
      </div>

      <div className="card shadow p-4">
        <GestionProducto />
      </div>
    </div>
  );
};

export default Admin;