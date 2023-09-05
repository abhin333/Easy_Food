import React from 'react'
import './Categeory.css'

const Categeory = (props) => {
    const {url,name,price}=props
    
  return (
    <div>
        <div className="categeory2" >
            <div className="image">
                <img className='imgsss' src={url} alt="burger2" />
            </div>
            <div className="name">
                <span>{name}</span>
                <span className='star'>****</span>
            </div>
            <div className="price">
                <p className='price-mark'>{price}</p>
            </div> 
        </div>
    </div>
  )
}

export default Categeory