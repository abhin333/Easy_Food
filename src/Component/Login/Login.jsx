import { TextField } from "@mui/material";
import React, { useState } from "react";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import "./Login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoginBar from "./Loginbar/LoginBar";
import Button from "../Button/Button";
import SocialMedia from "../SocialMedias/SocialMedia";
import { emailRegex } from "../regex/Regex";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate=useNavigate()
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const [error,setError]=useState({
    email:false,
    password:false,
  })
  const handleChange = (e) => {
    const { name, value } = e.target;
    
    setLoginData({ ...loginData, [name]: value });
    setError({ ...error, [name]: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  loginData.email && loginData.password?
  navigate('/items')
  :
  alert("please enter email and password")
  }
  return (
    <div>
      <div className="main">
        <div className="burggerimg">
          <img src="/src/assets/image/burggerpices.png" alt="" />
        </div>
        <div className="loginbox">
          <LoginBar />
          <div className="input-filed">
          <form >
            <div className="email">
              <TextField
                id="standard-basic"
                label="Email"
                name="email"
                onChange={handleChange}
                value={loginData.email}
                variant="standard"
                required={true}
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
                label="Password"
                onChange={handleChange}
                name="password"
                type='password'
                value={loginData.password}
                variant="standard"
                required={true}

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
              <VisibilityIcon sx={{ fontSize: 14 }} />
            </div>
            <span className="forgot" onClick={""}>
              Forgot Password.?
            </span>
            <div className="loginbutton"  >
              <Button Login="Login" onClick={handleSubmit}/>
            </div>
            <h4>or</h4>
            <div className="social">
              <SocialMedia/>
            </div>
          </form>
          </div>
        </div>
        <div className="right-cornner">
          <img src="/src/assets/image/tomatto.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Login;
