import { border } from "@mui/system";
import React, { useEffect, useLayoutEffect, useState } from "react";
import "./Burgers.css";

const Burger = (props) => {
  const { url, name, isActive, data } = props;

  const [hover, setHover] = useState(false);
  const [index, setIndex] = useState(isActive===0);
  const [light,setLight]=useState()

  console.log("indexsss",index,hover );

  

  const mouseEnter = () => {
    console.log("mouse enter");
    setHover(true);
    console.log("true");
      setIndex(false);
    console.log("set 1");
  };
  // const borderColor = index === 0 && !hover? "1px solid red" : hover ? "1px solid red" : "1px solid transparent";
  const borderColor = index===true && !hover ? "1px solid red" : hover ? "1px solid red" : "1px solid transparent";
  // const isDefaultHighlight = isActive === 0 && !hover;
  
  const mouseLeave = () => {
    
    console.log("mouse leave");
    setHover(false);
    console.log("flase");
    // setIndex(false);

  };
  return (
    <div>
      <div
        className="items"
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseLeave}
        
        style={{ border:borderColor}}
      >
        <div className="img">
          <img src={url} alt="burgger" />
        </div>
        <span className="item-name">{name}</span>
      </div>
    </div>
  );
};

export default Burger;
