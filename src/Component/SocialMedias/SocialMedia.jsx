import React from 'react'
import './SocialMedia.css'

const SocialMedia = () => {
  return (
    <div>
        <div className="icons">
        <div className="instagram">
           <img src="/public/instagram.svg" alt="" />
        </div>
        <div className="facebook">
            <img src="/public/facebook.svg" alt="" />
        </div>
        <div className="google">
            <img src="/public/google.svg" alt="" />
        </div>
        </div>
    </div>
  )
}

export default SocialMedia