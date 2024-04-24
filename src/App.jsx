import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './page/Home';
import ProductDetails from './page/ProductDetails';
import Footer from './components/Footer';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className='overflow-hidden'>
      <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/product/:id' element={<ProductDetails/>} />
        </Routes>
        <Sidebar/>
        <Footer/>
      </BrowserRouter>
    </div>
  )
}

export default App