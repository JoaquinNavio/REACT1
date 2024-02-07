import Catalogo from './components/Catalogo'
import './App.css'
import { DataContext, DataProvider } from './components/DataContext'
import Carrito from './components/Carrito'
import AgregarProducto from './components/AgregarProducto'
import { BrowserRouter, Route, Routes, Link, NavLink } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <nav className='navbar navbar-expand navbar-light bg-light'>
        <ul className='navbar-nav'>
          <li className='nav-item'>
            <NavLink to='/' >HOME</NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to='/agregarProducto' > - - - AGREGAR</NavLink>
          </li>
        </ul>   
      </nav>



      <div style={{ display: "flex" }}>
        <Routes>

          <Route path='/' element={
              <DataProvider>
                <Catalogo />
                <div style={{ width: '2px', backgroundColor: 'white' }}></div>
                <Carrito />
              </DataProvider>
          } />
        <Route path='/agregarProducto' element={<AgregarProducto />} />
        
      </Routes>

      </div>
      


    </BrowserRouter>
  )
}

export default App

