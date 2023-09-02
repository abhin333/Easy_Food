import React, { useState } from 'react'
// import Login from '../Login/Login'
import './Signup.css'
import { TextField } from "@mui/material";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoginBar from '../Login/Loginbar/LoginBar';  
import Button from "../Button/Button";
import SocialMedia from "../SocialMedias/SocialMedia";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobileno: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange= (e) => {
    const { name, value } = e.target;
    console.log("name",name,value);
    setFormData({ ...formData, [name]: value });
  };
const handleSubmit=(e)=>{
  e.preventDefault();
  if (formData.password !== formData.confirmPassword) {
    alert("Password and Confirm Password do not match.");
    return; // Exit the function early if they don't match
  }
  console.log("Form Data:",formData);

}

  
  return (
    <div>
      <div className="main">
        <div className="burggerimg">
          <img src="/src/assets/image/burggerpices.png" alt="" />
        </div>
        <div className="loginbox">
          <LoginBar/>
          <div className="input-filed">
          <form >
            <div className="password">
              <TextField
                id="standard-basic"
                label="Name"
                name='name'
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
                name='mobileno'
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
                name='email'
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
                name='password'
                type="password"
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
              <VisibilityIcon sx={{ fontSize: 14 }} />
            </div>
            <div className="password">
              <TextField
                id="standard-basic"
                label="confirm password"
                type="password"
                name='confirmPassword'
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
              <VisibilityIcon sx={{ fontSize: 14 }} />
            </div>
            <div className="loginbutton" onClick={handleSubmit}  >
              <Button Login="Signup"   />
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
  )
}

export default Signup