import React, { useState } from "react";
import ShortTextIcon from "@mui/icons-material/ShortText";
import { Avatar, Radio, TextareaAutosize, TextField } from "@mui/material";
import { doc, updateDoc } from "firebase/firestore";
import "./Payment.css";
import { motion } from "framer-motion";
import { Email } from "@mui/icons-material";
import { useLocation, useNavigate } from "react-router-dom";
import { db } from "../../Firebase/Config/Config";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { collection, getDocs } from "firebase/firestore";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const Payment = ({ children }) => {

  const navigate = useNavigate();
  const location = useLocation();
  const objectToPass = location.state.data;
  const price=location.state.price

    const [data, setData] = useState(
      {
        email: "",
        address: "",
        mobile: "",
        paymentMethod: "Cash On Delivery",
        items: objectToPass,
      }
      
    );
  const dataHandler = (e) => {
    const { name, value } = e.target;
    setData({ ...data,[name]: value });
  };
const displayRazorpay =()=>{
  const options = {
      key: "rzp_test_t5X4q81qTu1P6e", // Enter the Key ID generated from the Dashboard
      key_secret:"kgI42J6PsK9qH6v1KZeFWvba",
      amount: price*100,
      currency: "INR",
      name: "Fast FOOD.",
      description: "Test Transaction",
      // order_id: '55125',
      image:'https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png',
      handler:function (response) {
          // alert(response.razorpay_payment_id);
          alert("Order placed! Your item will be delivered within 1 hour.");
            navigate('/items')
        },
      prefill: {
          name: "abhin",
          email: "abhinpradeepan123@gmail.com",
          contact: "7902314666",
      },
      notes: {
          address: "Soumya Dey Corporate Office",
      },
      theme: {
          color: "#61dafb",
      },
      
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
  localStorage.clear();
}



  
 
  const clickHandler = (data) => {
    if (data.email !== "" && data.address !== "" && data.mobile !== "") {
      const auth = getAuth();
      onAuthStateChanged(auth, async (user) => {
        if (user) {
          const uid = user.uid;
          try {
            const washingtonRef = doc(db, "user", uid);
            await updateDoc(washingtonRef, { data });
            if(data.paymentMethod !=="Cash On Delivery")
            {
              displayRazorpay()
            }
            else{
              toast.success("Your order is placed");
              localStorage.clear();
              setTimeout(() => {
                  navigate("/items");
                }, 1000);
            }
          } catch (error) {
            toast.error(error);
          }
        }
      });
    } else {
      alert("Enter data");
    }
  };
  return (
    <div>
      <form>
        <motion.div
          className="main5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
        >
          <div className="header5">
            <div className="icons5">
              <ShortTextIcon />
            </div>
            <div className="avathar5">
              <Avatar
                sizes="12px"
                alt="Remy Sharp"
                // src="/static/images/avatar/1.jpg"
              />
            </div>
          </div>
          <div className="box">
            <div className="inputfiled">
              <TextField
                id="standard-basic"
                type={"email"}
                label="Email:"
                name="email"
                value={data.email}
                onChange={dataHandler}
                variant="standard"
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#EBD1D1", // Change 'red' to the color you want
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "12px",
                    fontFamily: "inherit",
                    color: "black",
                  },
                }}
              />
              <TextField
                id="standard-basic"
                type={"text"}
                label="Address:"
                name="address"
                value={data.address}
                onChange={dataHandler}
                variant="standard"
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#EBD1D1", // Change 'red' to the color you want
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "12px",
                    fontFamily: "inherit",
                    color: "black",
                  },
                }}
              />
              <TextField
                id="standard-basic"
                type={"number"}
                label="MobileNo:"
                name="mobile"
                onChange={dataHandler}
                value={data.mobile}
                variant="standard"
                sx={{
                  "& .MuiInput-underline:before": {
                    borderBottomColor: "#EBD1D1", // Change 'red' to the color you want
                  },
                  "& .MuiInputLabel-root": {
                    fontSize: "12px",
                    fontFamily: "inherit",
                    color: "black",
                  },
                }}
              />
              <div className="payment">
                <span className="pay">Choose Payment System</span>

                <div className="radio-btn">
                  <label>
                    COD
                    <Radio
                      checked={data.paymentMethod === "Cash On Delivery"}
                      onChange={dataHandler}
                      name="paymentMethod"
                      value="Cash On Delivery"
                      inputProps={{ "aria-label": "Cash On Delivery" }}
                    />
                  </label>
                  <label>
                    Gpay
                    <Radio
                      checked={data.paymentMethod === "Gpay"}
                      onChange={dataHandler}
                      name="paymentMethod"
                      value="Gpay"
                      inputProps={{ "aria-label": "Gpay" }}
                    />
                  </label>
                </div>
              </div>
              <div className="button" onClick={() => clickHandler(data)}>
                <span className="btn5">CONTINUE</span>
                <Toaster />
              </div>
            </div>
          </div>
        </motion.div>
      </form>
    </div>
  );
};

export default Payment;
