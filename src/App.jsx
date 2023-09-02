import React from 'react'
import './App.css'
import Item from './Component/Items/Item'
import View from './Component/ViewItem/View'
import Home from './Component/Pages/Home/Home'
import LoginPage from './Component/Pages/LoginPage/LoginPage'
import SignupPage from './Component/Pages/SignupPage/SignupPage'
import { Routes,Route } from 'react-router-dom'
import Purchase from './Component/Pages/PurchasePage/Purchase'
import Cart from './Component/Pages/cartPage/Cart'
const App = () => {
  return (
    <div>
      

<Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<LoginPage/>}/>
  <Route path='/signup' element={<SignupPage/>}/>
  <Route path='/items' element={<Purchase/>}/>
  <Route path='/view' element={<Cart/>}/>
</Routes>

      {/* <Home/> */}
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}


      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Item/> */}
      {/* <View/> */}
      
    </div>
  )
}

export default App