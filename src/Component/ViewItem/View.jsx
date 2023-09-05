import { Avatar } from '@mui/material'
import ShortTextIcon from "@mui/icons-material/ShortText";
import React, { useContext } from 'react'
import './View.css'
import Card from '../Card/Card';
import Cart from '../cart/Cart';
import { useNavigate } from 'react-router-dom';

const View = () => {
 const navigate= useNavigate()
const goHome=()=>{
navigate('/items')
}

  

  return (
    <div>
        <div className="main3">
        <div className="header2">
          <div className="icons2" onClick={goHome}>
            <ShortTextIcon/>
          </div>
          <div className="avathar">
            <Avatar
              sizes="12px"
              alt="Remy Sharp"
              src="/static/images/avatar/1.jpg"
            />
          </div>
          </div>
          <div className="cards" >
          <Card />
          </div>
          <div className="cart_new">
          <Cart/>
          </div>
          </div>

    </div>
  )
}

export default View