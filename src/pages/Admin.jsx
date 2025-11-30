import FormProductos from "../components/FormProductos"
import GestionProducto from "../components/GestionProducto"


const Admin = () => {

    const API = "https://692c893ac829d464006fd8cc.mockapi.io/productos"

     

    return (
        <>
        <h1>GESTION DE PRODUCTOS</h1>
        <GestionProducto />
        
        </>
    )
} 

export default Admin