import React from 'react'
import './Burgers.css'

const Burger = (props) => {
  const{url,name}=props
  console.log("aa",url);
  return (
    <div>
        <div className="items">
            <div className="img">
                <img src={url} alt="burgger" />
            </div>
            <span className='item-name'>{name}</span>
        </div>
    </div>
  )
}

export default Burger