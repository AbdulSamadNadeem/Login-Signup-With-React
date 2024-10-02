import React from 'react'
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import { Route, Routes } from 'react-router'
import ProductPage from './Pages/ProductPage'

const App = () => {
  return (
    <>
   <Routes>
      
      <Route path='/' element={<Login/>}></Route>
      <Route path='/signin'element={<Login/>}></Route>
      <Route path='/signup' element={<Signup/>}></Route>
      <Route path='/productpage' element={<ProductPage/>}></Route>
      <Route path='*' element={'Error 404 Page Not Found '}></Route>


   </Routes>
    </>
  )
}

export default App