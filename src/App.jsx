import React, { useEffect, useState } from "react";
import "./App.css";
import Item from "./Component/Items/Item";
import View from "./Component/ViewItem/View";
import Home from "./Component/Pages/Home/Home";
import LoginPage from "./Component/Pages/LoginPage/LoginPage";
import SignupPage from "./Component/Pages/SignupPage/SignupPage";
import { Routes, Route, Navigate, json } from "react-router-dom";
import Purchase from "./Component/Pages/PurchasePage/Purchase";
import Cart from "./Component/Pages/cartPage/Cart";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import  ViewCart from "./Component/Pages/cartPage/viewCart";
import CartView from "./Component/cart_view/CartView";
import Payment from "./Component/payment/Payment";
import PaymentPage from "./Component/Pages/Payment/PaymentPage";
import PageNot from "./Component/Pages/404/PageNot";
const App = () => {
  
  const navigate = useNavigate();
  const [users, setUsers] = useState(false);
  const auth = getAuth();
  const user = localStorage.getItem('user');
  useEffect(() => {
    if(user!=null){
      setUsers(user);
    }else{
      console.log("flase");
      setUsers(false);
    }
  }, [user]);
  
  console.log("userrsss",users);
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={users? <Navigate to="/items" />: <LoginPage />} />
        <Route path="/signup" element={users? <Navigate to="/items" />:<SignupPage />} />
        <Route path="/items" element={users?<Purchase />: <Navigate to="/login" />} />
        <Route path="/view" element={<Cart />} />
        <Route path="/cart" element={users?<ViewCart/>:<Navigate to="/login" />}/>
        <Route path="/payment" element={users ?<PaymentPage/>:<Navigate to="/login" />}/>
        <Route path="*" element={<PageNot/>}/>

      </Routes>
      
    </div>
  );
};

export default App;
