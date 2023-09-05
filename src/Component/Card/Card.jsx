import React,{useContext} from "react";
import './Card.css'
import StarIcon from '@mui/icons-material/Star';
import { MyContext } from "../Pages/cartPage/Cart";

const Card = () => {
  const context = useContext(MyContext);
  const {name,url,price}=context.objectToPass

  return (
    <div>
      <div className="card1">
        <div className="imges">
          <img className="img-q" src={url} alt="" />
        </div>
          <span className="name-new">{name}</span>
        <div className="starnew"><StarIcon/><StarIcon/><StarIcon/><StarIcon/><StarIcon/></div>
        <div className="discreption-new">
          This is a chicken burger spicze and hot chille include in the burger.
          This is a chicken burger spicze and hot chille include in the burger

        </div>
        <div className="price-new">
          <span>{price}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
