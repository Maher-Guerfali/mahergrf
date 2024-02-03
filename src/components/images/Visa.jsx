import React, { useState } from "react";
import { useSpring, animated } from "react-spring";
import Card from "./Card";
import "./styles.scss";
import Model from "../models/Models";





const arr = [
  {
    style: {
      backgroundImage: "url(" + "/assets/me.png" + ")",
      backgroundSize:"contain",
      backgroundPosition:"center"
    },
    background: "#dc1570",
    detail: {
      balance: 694,
      cvc: 323,
      m: 2,
      ModelName:"mahourgltf.gltf",
      //url:"https://i.gifer.com/WnES.gif",
      y: 23,
      name:"My avatar",
      num: "1234 **** **** 3234"
    }
  },
  {
    style: {
     // backgroundImage: "url(" + "https://i.gifer.com/2iiJ.gif" + ")"
    },
    background: "#5c5dd3",
    detail: {
      balance: 733,
      cvc: 777,
      url:"https://i.gifer.com/2klO.gif",
      name:"Skatepark",
      m: 12,
      ModelName: "jumpclear.gltf",
      y: 20,
      num: "3241 **** **** 2233"
    }
  },
  {
    style: {
      backgroundImage: "url(" + "/assets/booster.jpg" + ")",
      backgroundSize:"contain",
      backgroundPosition:"center"
    },
    background: "#3c3c3c",
    detail: {
      balance: 893,
      cvc: 109,
      m: 4,
     // url:"https://i.gifer.com/Yu5t.gif",
      ModelName:"vaderface.gltf",
      name:"Skywalker",
      y: 30,
      num: "1030 **** **** 3040"
    }
  },
  {
    style: {
      backgroundImage: "url(" + "/assets/m.png" + ")",
      backgroundSize:"contain",
      backgroundPosition:"center"
    },
    background: "#008af1",
    detail: {
      balance: 543,
      cvc: 993,
     //url:"https://i.gifer.com/Yu5t.gif",
      ModelName: "rooom.gltf", 
      m: 10,
      name:"Room",
      y: 25,
      num: "0029 **** **** 2303"
    }
  },
  {
    style: {
      backgroundImage: "url(" + "/assets/mario.png" + ")",
      backgroundSize:"contain",
      backgroundPosition:"center"
    },
    background: "#5beaf0",
    detail: {
      balance: 408,
      cvc: 124,
      url:"https://i.gifer.com/Yu5t.giff",
      ModelName: "goula.gltf",
      m: 5,
      name:"Word Cup",
      y: 31,
      num: "1000 **** **** 2606"
    }
  }
];
export default function Visa() {
 

const [modelnName, setModelnName] = useState("cup.gltf");
  const [currentCard, setCurrentCard] = useState(0);
  
  const props = useSpring({
    bal: arr[currentCard].detail.balance,
    cvc: arr[currentCard].detail.cvc,
    m: arr[currentCard].detail.m,
    Modela:arr[currentCard].detail.ModelName,
    y: arr[currentCard].detail.y
  });
  const leftscroll = event => {
    if(currentCard==4)
    {
      setCurrentCard(0);
    }
    else{

      setCurrentCard(currentCard+1);
    }
  };
  const rightscroll = event => {
    if(currentCard==0)
    {
      setCurrentCard(4);
    }
    else{

      setCurrentCard(currentCard-1);
    }
  };
 
 
  return (
    <div className="all3D"> 
  {console.log(currentCard)}
  <div className="LogoSand">Crafting Room</div>
 
     
      <Model name={arr[currentCard].detail.ModelName} />
      <div className="MobileSCroll">
<div className="MobileButtons">
  
<img className="button3dright" src="./assets/LeftArrow.png" alt="Logo" onClick={leftscroll}/>
  <img className="button3dleft" src="./assets/LeftArrow.png" alt="Logoo" onClick={rightscroll} />
</div>
<div id="details">
        <div id="detail">
          <animated.div>
            {props.bal.interpolate(x =>  x.toFixed(0))}
            
         
          </animated.div>
          <div id="infolabel">Blocs</div>
          <a className="aee" href="#Games">
          <img src="assets/down.png" alt="" />
        </a>
        </div>
       
        
      
       
      </div>
      </div>
 <div id="container3d">
      <div id="details">
        <div id="detail">
          <animated.div>
            {props.bal.interpolate(x =>  x.toFixed(0))}
            
         
          </animated.div>
          <div id="infolabel">Blocs</div>
        </div>
        <div id="detail">
          <div id="exp">
            <animated.div>
              {props.m.interpolate(x => x.toFixed(0) + "/")}
            </animated.div>
            <animated.div>
              {props.y.interpolate(x => x.toFixed(0))}
            </animated.div>
            
          </div>
          <div id="infolabel">time</div>
        </div>
        
      
       
      </div>
     
      <div className="Visa" id="appp">
       
        {arr.map((val, i) => {
          
          return (
            <Card
              key={i}
              num={i}
              arr={arr}
              data={val}
              currentCard={currentCard}
              setCurrentCard={setCurrentCard}
              
              
            />
            
          );
        })}
      </div>
    </div>


    </div>
   
  );
}
