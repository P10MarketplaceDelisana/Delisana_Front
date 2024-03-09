import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from '../components/views/HomeView'
import AddFormView from '../components/views/AddFormView'
import ProductDetail from '../components/views/ProductDetail'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomeView/>}></Route>
    <Route path='/details' element={<ProductDetail/>}></Route>
    <Route path='/form' element={<AddFormView/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default Router