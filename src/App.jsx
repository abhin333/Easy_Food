import React, { useEffect, useState } from "react";
import "./App.css";
import Item from "./Component/Items/Item";
import View from "./Component/ViewItem/View";
import Home from "./Component/Pages/Home/Home";
import LoginPage from "./Component/Pages/LoginPage/LoginPage";
import SignupPage from "./Component/Pages/SignupPage/SignupPage";
import { Routes, Route } from "react-router-dom";
import Purchase from "./Component/Pages/PurchasePage/Purchase";
import Cart from "./Component/Pages/cartPage/Cart";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import  ViewCart from "./Component/Pages/cartPage/viewCart";
import CartView from "./Component/cart_view/CartView";
import Payment from "./Component/payment/Payment";
import PaymentPage from "./Component/Pages/Payment/PaymentPage";
const App = () => {
  
  const navigate = useNavigate();
  const [users, setUsers] = useState(false);
  const [loading, setLoading] = useState(true);
  const auth = getAuth();
  const unsubscribe = onAuthStateChanged(auth, (user) => {
    setUsers(user);
    setLoading(false);
  });
  unsubscribe();
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/items" element={<Purchase />} />
        <Route path="/view" element={<Cart />} />
        <Route path="/cart" element={<ViewCart/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
      </Routes>
      {/* <Home/> */}
      {/* <LoginPage/> */}
      {/* <SignupPage/> */}

      {/* <Login/> */}
      {/* <Signup/> */}
      {/* <Item/> */}
      {/* <View/> */}
    </div>
  );
};

export default App;
