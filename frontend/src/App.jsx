import React from "react";
import {Routes, Route} from 'react-router-dom'
import Login from './pages/Login'
import Add from './pages/Add'
import Product from './pages/Product'
import Home from './pages/Home'
import List from './pages/List'
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Search from "./components/Search";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const backendUrl=import.meta.env.VITE_BACKEND_URL


const App=()=>{
  return (
    <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Navbar/>
      <Search/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path="/list" element={<List/>}/>
        <Route path='/add' element={<Add/>} />
        <Route path="/product/:productId" element={<Product/>}/>
      </Routes>
      
    </div>
  )
}

export default App