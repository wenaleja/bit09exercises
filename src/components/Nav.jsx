import React from 'react'
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Inicio } from './Inicio';
import { Ejercicios } from './Ejercicios';


export const Nav = () => {
  return (
    <BrowserRouter>
    <nav className='py-4 text-center bg-primary'>
      <Link className='mx-3 text-light' to="/Inicio">Inicio</Link>
      <Link className='mx-3 text-light' to="/Ejercicios">Ejercicios</Link>
    </nav>
    <Routes>
      <Route path='/Inicio' element={<Inicio/>}></Route>
      <Route path='/Ejercicios' element={<Ejercicios/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}
