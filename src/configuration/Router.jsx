import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomeView from '../components/views/HomeView';
import AddFormView from '../components/views/AddFormView';
import ProductDetail from '../components/views/ProductDetail';


const RouterComponent = () => {
  return (
    <Router>
    <Routes>
    <Route path='/' element={<HomeView/>}></Route>
    <Route path="/products/:id" element={<ProductDetail />} />
    <Route path='/form' element={<AddFormView/>}></Route>
    </Routes>
   </Router>
  );
}

export default RouterComponent;