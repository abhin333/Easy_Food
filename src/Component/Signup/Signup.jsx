import React, { useState } from "react";
// import Login from '../Login/Login'
import "./Signup.css";
import { TextField } from "@mui/material";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoginBar from "../Login/Loginbar/LoginBar";
import Button from "../Button/Button";
import SocialMedia from "../SocialMedias/SocialMedia";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../Firebase/Config/Config";
import { collection, addDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    mobileno: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [show, setShow] = useState(false);
  const [shows,setShows]=useState(false)


  //password
const passwordShows=()=>{
  setShow(true)
}
const passwordUnShows=()=>{
  setShow(false)
}
// confirm passworde
  const passwordView = () => {
    setShows(true);
  };
  const passwordUnview = () => {
    setShows(false);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log("name", name, value);
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Password and Confirm Password do not match.");
      return;
    }

    try {
      const userAdded = await addUserToFirestore();
      if (userAdded) {
        const userCreated = await createUserWithFirebase();
        if (userCreated) {
          alert("User created successfully.");
          navigate("/login");
        } else {
          alert("This email is already used, or wrong email.");
        }
      } else {
        console.error("Failed to add user to Firestore.");
      }
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const addUserToFirestore = async () => {
    try {
      const docRef = await addDoc(collection(db, "user"), {
        name: formData.name,
        mobileno: formData.mobileno,
        confirmPassword: formData.confirmPassword,
      });
      console.log("User added to Firestore:", docRef);
      return true;
    } catch (error) {
      console.error("Error adding user to Firestore:", error.message);
      return false;
    }
  };

  const createUserWithFirebase = async () => {
    try {
      const auth = getAuth();
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        formData.email,
        formData.password,
        formData.name
      );
      console.log("usersssssss", userCredential);
      return true;
    } catch (error) {
      console.error("Error creating user with Firebase:", error.message);
      return false;
    }
  };
  return (
    <div>
      <motion.div
        className="main"
        initial={{ y: "-100" }}
        animate={{ y: 0 }}
        transition={{ duration: 2 }}
      >
        <div className="burggerimg">
          <img src="/src/assets/image/burggerpices.png" alt="" />
        </div>
        <motion.div
          className="loginbox"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 2 }}
        >
          <LoginBar />
          <div className="input-filed">
            <form>
              <div className="password">
                <TextField
                  id="standard-basic"
                  label="Name"
                  name="name"
                  variant="standard"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#EBD1D1", // Change 'red' to the color you want
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "12px",
                      fontFamily: "inherit",
                    },
                  }}
                />
              </div>
              <div className="mobile-number">
                <TextField
                  id="standard-basic"
                  label="mobileno"
                  name="mobileno"
                  type={"number"}
                  variant="standard"
                  onChange={handleChange}
                  value={formData.mobileno}
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#EBD1D1",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "12px",
                      fontFamily: "inherit",
                    },
                  }}
                />
              </div>
              <div className="email">
                <TextField
                  id="standard-basic"
                  label="Email"
                  name="email"
                  type={"email"}
                  onChange={handleChange}
                  variant="standard"
                  value={formData.email}
                  required
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#EBD1D1", // Change 'red' to the color you want
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "12px",
                      fontFamily: "inherit",
                    },
                  }}
                />
                <MarkEmailUnreadIcon sx={{ fontSize: 14 }} />
              </div>
              <div className="password">
                <TextField
                  id="standard-basic"
                  label="password"
                  name="password"
                  type={show ? "text" : "password"}
                  onChange={handleChange}
                  value={formData.password}
                  required
                  variant="standard"
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#EBD1D1",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "12px",
                      fontFamily: "inherit",
                    },
                  }}
                />
                {show?
                <div onClick={passwordUnShows}>
                <VisibilityIcon sx={{ fontSize: 14 }} />
                </div>:
                <div onClick={passwordShows}>
                    <VisibilityOffIcon sx={{ fontSize: 14 }} />
                  </div>}
              </div>
              <div className="password">
                <TextField
                  id="standard-basic"
                  label="confirm password"
                  type={shows ? "text" : "password"}
                  name="confirmPassword"
                  variant="standard"
                  onChange={handleChange}
                  value={formData.confirmPassword}
                  required
                  sx={{
                    "& .MuiInput-underline:before": {
                      borderBottomColor: "#EBD1D1",
                    },
                    "& .MuiInputLabel-root": {
                      fontSize: "12px",
                      fontFamily: "inherit",
                    },
                  }}
                />
                {shows ? (
                  <div onClick={passwordUnview}>
                     <VisibilityIcon sx={{ fontSize: 14 }} />
                  </div>
                ) : (
                  <div onClick={passwordView}>
                    <VisibilityOffIcon sx={{ fontSize: 14 }} />
                  </div>
                )}
              </div>
              <div className="loginbutton" onClick={handleSubmit}>
                <Button Login="Signup" />
              </div>
              <h4>or</h4>
              <div className="social">
                <SocialMedia />
              </div>
            </form>
          </div>
        </motion.div>
        <div className="right-cornner">
          <img src="/src/assets/image/tomatto.png" alt="" />
        </div>
      </motion.div>
    </div>
  );
};

export default Signup;
