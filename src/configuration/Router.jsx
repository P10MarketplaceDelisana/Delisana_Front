import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomeView from '../components/views/HomeView'
import AddFormView from '../components/views/AddFormView'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<HomeView/>}></Route>
    <Route path='/form' element={<AddFormView/>}></Route>
    </Routes>
   </BrowserRouter>
  )
}

export default Router