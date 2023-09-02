import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SplashScreen.css'


const SplashScreen = () => {
const navigate=useNavigate();
  const clickHandler=()=>{
  navigate('/signup')
  }
    return (

    <div>
        <div className="containers">
            <div className="image-div">
            <div className="header-image">
                <img src="/src/assets/image/Food.png" alt="burgger-image" />
            </div>
            </div>
            
            <div className="tittle-name">
                <img src="/src/assets/image/Fast.. 1.png" alt="" />
            </div>
            <div className="arrow-icon" onClick={clickHandler}>
                <img src="/src/assets/image/image 1.png" alt="" />
            </div>
            <div className="bike">
                <img className='bikes'src="/src/assets/image/pizza-deliver 1.png" alt="bike" />
            </div>
        </div>
           
        
    </div>
  )
}

export default SplashScreen