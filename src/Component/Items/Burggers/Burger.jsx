import React from 'react'
import './Burgers.css'

const Burger = () => {
  return (
    <div>
        <div className="items">
            <div className="img">
                <img src="/src/assets/logo/burgger.png" alt="burgger" />
            </div>
            <span className='item-name'>Burgger</span>
        </div>
    </div>
  )
}

export default Burger