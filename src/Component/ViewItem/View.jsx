import { Avatar } from '@mui/material'
import ShortTextIcon from "@mui/icons-material/ShortText";
import React from 'react'
import './View.css'
import Card from '../Card/Card';
import Cart from '../cart/Cart';
const View = () => {

  return (
    <div>
        <div className="main3">
        <div className="header2">
          <div className="icons2">
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