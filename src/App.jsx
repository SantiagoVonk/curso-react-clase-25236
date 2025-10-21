
import './App.css'
import Header from './components/Header'
import Nav from './components/Nav'
import Main from './components/Main'
import Footer from './components/Footer'
import Contacto from './components/Contacto'
import Moda from './components/Moda'
import AcercaDe from './components/AcercaDe'
import DetalleProducto from './components/DetalleProducto'



import { Routes, Route } from 'react-router-dom'

function App() {


  return (
    <div>

      <Header />
      <Nav />
      <Routes>

        <Route path='/' element={<Main />} />
        <Route path='/moda' element={<Moda />} />
        <Route path='/contacto' element={<Contacto />} />
        <Route path='/acercaDe' element={<AcercaDe />} />

        <Route path='/productos/:id' element={<DetalleProducto />} />

      </Routes>




      <Footer />

    </div>



  )
}

export default App
