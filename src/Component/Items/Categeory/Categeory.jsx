import React from 'react'
import './Categeory.css'

const Categeory = (props) => {
    const {url,name}=props
    console.log("url",url);
  return (
    <div>
        <div className="categeory2">
            <div className="image">
                <img className='imgsss' src={url} alt="burger2" />
            </div>
            <div className="name">
                <span>{name}</span>
                <span className='star'>****</span>
            </div>
            <div className="price">
                <p>$12</p>
            </div>
        </div>
    </div>
  )
}

export default Categeory