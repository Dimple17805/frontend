import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Product from './components/Product'
import Display from './components/Display'
import Order from './components/Order'
import UserLog from './components/UserLog'
import LoginSignup from './components/UserLog'
function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Product/>}/>
        <Route path="/product/:id" element={<Display />} />
        <Route path='/order' element={<Order/>}/>
        <Route path='/userlog' element={<UserLog/>}/>
        <Route path="/login" element={<LoginSignup isLogin={true} />} />
        <Route path="/signup" element={<LoginSignup isLogin={false} />} />
        <Route path="/order/:id" element={<Order />} />
      </Routes>
    </div> 
  )
}

export default App
