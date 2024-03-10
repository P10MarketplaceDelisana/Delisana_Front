import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomeView from '../components/views/HomeView'
import AddFormView from '../components/views/AddFormView'
import ProductDetail from '../components/views/ProductDetail'
import AllProductsView from '../components/views/AllProductsView'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomeView/>}></Route>
    <Route path="/products/:id" element={<ProductDetail />} />
    <Route path='/form' element={<AddFormView/>}></Route>
    <Route path='/nuestrosproductos' element={<AllProductsView/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default Router