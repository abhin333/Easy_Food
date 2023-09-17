import React, { useEffect, useLayoutEffect, useState } from "react";
import "./CartView.css";
import { motion } from "framer-motion";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { Avatar } from "@mui/material";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../Firebase/Config/Config";
import { useNavigate } from "react-router-dom";

const CartView = (props) => {
const navigate=useNavigate()
  const [data, setData] = useState([]);
  const storedItems = localStorage.getItem("cartItems");
  const dataList = JSON.parse(storedItems);
  useEffect(() => {
    setData(dataList);
  }, []);
  const initialCounts = dataList.map((event) =>event.count?event.count:1 );
  const [count, setCount] = useState(initialCounts);

const increment =(e,index)=>{

  const newCount = [...count];
  newCount[index] += 1;
  setCount(newCount);
}
const decrement=(index)=>{
  const newCount = [...count];
  newCount[index] -= 1;
  setCount(newCount);
}
const updatedData = data.map((item, i) => ({
  ...item,
  count: count[i],
}));
localStorage.setItem("cartItems", JSON.stringify(updatedData));

const buyNow=(event,index,e)=>{
  const list= JSON.parse(event.view.localStorage.cartItems)
  const clickItem=list[index]
  navigate('/payment',{state:{clickItem}})

}

  return (
    <div>
      <motion.div
        className="main4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.1, duration: 2, type: "tween" }}
        // key={index}
      >
        <div className="header3">
          <div className="icons3">
            <ShortTextIcon />
          </div>
          <div className="avathar">
            <Avatar
              sizes="12px"
              sx={{ fontSize: "12px" }}
              alt="Remy Sharp"
              // src="/static/images/avatar/1.jpg"
            ></Avatar>
          </div>
        </div>
              <div className="box3">
        {data.map((event, index) => {
          
          const price1=event.Cart.item.price;
          const Price2=price1.replace("$","");
          const newPrice=parseInt(Price2,10)
          return (
            <>
                <div className="item_view3">
                  <p className="name3" >{event.Cart.item.name}</p>
                  <div className="images3">
                    <img className="image3" src={event.Cart.item.url} alt="img" />
                  </div>
                  
                  <div className="count_icon3">
                    <div className="plus3" onClick={(e) =>increment(e,index)}>
                      +
                    </div>
                    <span className="count3">{count[index]}</span>
                    <div
                      className="minnus3"
                      onClick={(e) =>decrement(index)}
                      >
                      -
                    </div>
                    <div className="buynow3" onClick={(e)=>buyNow(e,index,event)}>BuyNow</div>
                  </div>
                  <span className="price3">price:{newPrice*count[index]}</span>
                </div>
                <hr />
            </>
          );
        })}
        </div>
      </motion.div>
    </div>
  );
};

export default CartView;
