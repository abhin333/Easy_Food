import React from "react";
import './Card.css'
import StarIcon from '@mui/icons-material/Star';

const Card = () => {
  return (
    <div>
      <div className="card1">
        <div className="imges">
          <img className="img-q" src="/src/assets/image/burgger2.png" alt="" />
          <span>Chicken Burgger</span>
        </div>
        <div className="starnew"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
        <div className="discreption-new">
          This is a chicken burger spicze and hot chille include in the burger.
          This is a chicken burger spicze and hot chille include in the burger

        </div>
        <div className="price-new">
          <span>$12</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
