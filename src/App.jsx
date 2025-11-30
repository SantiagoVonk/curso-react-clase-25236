
import './App.css'
import Header from './components/Header'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Footer from './components/Footer'
import Contacto from './components/Contacto'
import Moda from './components/Moda'
import AcercaDe from './components/AcercaDe'
import DetalleProducto from './components/DetalleProducto'
import Admin from './pages/Admin'
import RutaProtegida from './pages/RutaProtegida'
import { Routes, Route } from 'react-router-dom'
import CarritoAPI from './pages/CarritoAPI'
import Login from './pages/Login'


function App() {

  return (
    <div>

      <Header />
      <Navbar />

      <Routes>

        <Route path='/' element={<Main />} />
        <Route path='/moda' element={<Moda />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/acercaDe' element={<AcercaDe />} />
        <Route path='/carrito' element={<CarritoAPI />} />
        <Route path='/login' element={<Login />} />

        <Route path='/admin' element={
          <RutaProtegida>
            <Admin />
          </RutaProtegida>
        } />

        <Route path='/productos/:id' element={<DetalleProducto />} />

      </Routes>

      <Footer />

    </div>



  )
}

export default App
