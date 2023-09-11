import React from 'react'
import { useNavigate } from 'react-router-dom'
import './SplashScreen.css'
import { motion } from "framer-motion"


const SplashScreen = () => {
const navigate=useNavigate();
  const clickHandler=()=>{
  navigate('/signup')
  }
    return (

    <div>
        <motion.div className="containers"
        initial={{x:'-100vw'}}
        animate={{x:0}}
        transition={{delay:.1,type:'spring',stiffness:120}}

        >
            
            <div className="image-div">
            <div className="header-image">
                <img src="/src/assets/image/Food.png" alt="burgger-image" />
            </div>
            </div>
            
            <div className="tittle-name">
                <img src="/src/assets/image/Fast.. 1.png" alt="" />
            </div>
            <motion.div className="arrow-icon" onClick={clickHandler}
            initial={{x:'-250'}}
            animate={{x:0}}
            transition={{delay:.3,duration:5,type:'spring'}}
            >
                <img src="/src/assets/image/image 1.png" alt="" />
            </motion.div>
            <motion.div className="bike"
             initial={{ x: '-0%' }}
             animate={{ x: '200%' }}
             transition={{ ease: 'linear', duration: 5, repeat: Infinity }}
            >
                <img className='bikes'src="/src/assets/image/pizza-deliver 1.png" alt="bike" />
             </motion.div>
             </motion.div>
           
        
    </div>
  )
}

export default SplashScreen