import React from "react";
import './Button.css'
const Button = (props) => {
  const {Login}=props
  return (
    <div>
        <div className="login-child2">
          <span>{Login}</span>
      </div>
    </div>
  );
};

export default Button;
