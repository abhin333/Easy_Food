import React from 'react'
// import Login from '../Login/Login'
import './Signup.css'
import { TextField } from "@mui/material";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoginBar from '../Login/Loginbar/LoginBar';  
import Button from "../Button/Button";
import SocialMedia from "../SocialMedias/SocialMedia";

const Signup = () => {
  return (
    <div>
      <div className="main">
        <div className="burggerimg">
          <img src="/src/assets/image/burggerpices.png" alt="" />
        </div>
        <div className="loginbox">
          <LoginBar/>
          <div className="input-filed">
            <div className="name">
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
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
            </div>
            <div className="email">
              <TextField
                id="standard-basic"
                label="Email"
                variant="standard"
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
            <div className="loginbutton">
              <Button Login="Signup"/>
            </div>
            <h4>or</h4>
            <div className="social">
              <SocialMedia/>
            </div>
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