import React from 'react'
import './Categeory.css'

const Categeory = () => {
  return (
    <div>
        <div className="categeory2">
            <div className="image">
                <img src="/src/assets/image/burgger2.png" alt="burger2" />
            </div>
            <div className="name">
                <span>zinger burger</span>
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