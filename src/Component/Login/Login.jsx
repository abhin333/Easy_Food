import { TextField } from "@mui/material";
import React from "react";
import MarkEmailUnreadIcon from "@mui/icons-material/MarkEmailUnread";
import "./Login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import LoginBar from "./Loginbar/LoginBar";
import Button from "../Button/Button";
import SocialMedia from "../SocialMedias/SocialMedia";
const Login = () => {
  return (
    <div>
      <div className="main">
        <div className="burggerimg">
          <img src="/src/assets/image/burggerpices.png" alt="" />
        </div>
        <div className="loginbox">
          <LoginBar />
          <div className="input-filed">
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
                label="Password"
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
            <span className="forgot" onClick={""}>
              Forgot Password.?
            </span>
            <div className="loginbutton">
              <Button Login="Login"/>
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
  );
};

export default Login;
