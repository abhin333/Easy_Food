import React, { useContext, useState } from "react";
import "./Cart.css";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useLocation, useNavigate } from "react-router-dom";
import { MyContext } from "../Pages/cartPage/Cart";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/Config/Config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
const Cart = () => {
  const context = useContext(MyContext);
  const [item, setItem] = useState([]);
  const { name, url, price } = context.objectToPass;
  const navigate = useNavigate();
  useEffect(() => {
   
    if (item.length > 0) {
      updatefirestore(item)
      
    }
  }, [item]);
  if(item.length==0){
  const storedItems = localStorage.getItem("cartItems");
  if (storedItems) {
    setItem(JSON.parse(storedItems));
  }
}
const pageChange=(item)=>{
  item.length>0?localStorage.setItem("cartItems", JSON.stringify(item)):''
  navigate("/cart", { state: { name, url, price } });


}

  const clickHandler = () => {
    const newItem = {
      Cart: {
        item: {
          name: name,
          price: price,
          url: url,
        },
      },
    };
   setItem((prev) => [...prev, newItem]);
  };
  pageChange(item)

  const updatefirestore = (item) => {
    const auth = getAuth();
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const uid = user.uid;
        const washingtonRef = doc(db, "user", uid);
        await updateDoc(washingtonRef,{item});
        
      }
    });
  };
  return (
    <div>
      <div className="cart" onClick={clickHandler}>
        <ShoppingCartIcon />
      </div>
    </div>
  );
};

export default Cart;
