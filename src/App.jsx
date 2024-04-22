import React from 'react'
import '../src/App.css'
import Phone1 from './assets/images/phone1.avif'
import Navbar from './components/Navbar'
import ProductCard from './components/ProductCard'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import CartPage from './components/CartPage'




const App = () => {
  return (

    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route exact path='/' element = {<ProductCard/>}/>
      <Route path='/cart' element={ <CartPage/> }/>
    </Routes>
    </BrowserRouter>
 
  )
}

export default App
