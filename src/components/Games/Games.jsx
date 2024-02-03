import { useEffect, useState,createRef,useRef } from "react";
import "./Games.scss";

import ReactPlayer from 'react-player/lazy'
import ScrollContainer from 'react-indiana-drag-scroll'

import { init } from "ityped";
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';
import Typewriter from 'typewriter-effect';




const arr = [
  {
    detail: {
      icon:"https://i.gifer.com/WnES.gif",
    video: "https://youtu.be/rDDZBf9JZVoU",
    name:"clic",
    }
  },
  {
    detail: {
     
      icon:"/assets/obito.png",
      video: "https://www.youtube.com/watch?v=sW9npZVpiMI",
      name:"obito",
    }
  },
  {
    detail: {
     
      icon:"/assets/ds.png",
      video: "https://youtu.be/rDDZBf9JZVoU",
      name:"turbo",
    }
  },
  {
    detail: {
     
      icon:"https://i.gifer.com/4M4x.gif",
      video: "https://youtu.be/rDDZBf9JZVoU",
      name:"karen",
    }
  },
  {
    detail: {
     
      icon:"https://i.gifer.com/4M4x.gif",
      video: "https://youtu.be/rDDZfB9JZVoU",
      name:"yooti",
    }
  },
]



export default function Games() {
  const [play, setplay] = useState(false);
  const [videoLink, setvideoLink] = useState("gggg");
  function useHover() {
    const [hovering, setHovering] = useState(false)
    const onHoverProps = {
      onMouseEnter: () => setHovering(true),
      onMouseLeave: () => setHovering(false),
    }
    return [hovering, onHoverProps]
  }
  const [buttonAIsHovering, buttonAHoverProps] = useHover()
  const [buttonBIsHovering, buttonBHoverProps] = useHover()
  const [buttonCIsHovering, buttonCHoverProps] = useHover()
  
  const scrollRef = createRef();
  const numbers = new Array(6).fill(1).map((_, index) => index + 1);
  const clickHandler = ( video) => {
    alert(video);
  };

  
  /*
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.focus();
    }
  });
  */

  const enableKeyboardCursorToScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.focus();
    }
  };
 





  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  

  return (
   
<div className="Games" id="Games" >
       <div className="rightlensegames">
       <div>Webgl Games</div>
      </div>
      <div className="phonegames">
        <div  className="titlesgames">
          <div className="gamesti" >Select :</div>
        <a {...buttonAHoverProps}   href="http://www.pingoos.gg/" className="game-list"  >{buttonAIsHovering ? "> Pingoos" : "Pingoos"}</a>
        <a {...buttonBHoverProps} href="http://www.mahergrf.com/Games/Pacman/" className="game-list">{buttonBIsHovering ? "> PacMan" : "PacMan"}</a>
        <a {...buttonCHoverProps}  href="https://maher-guerfali.itch.io/pingoos-pinballs" className="game-list" >{buttonCIsHovering ? "> Ppinballs" : "Ppinballs"}</a>
       
        
        
        
        </div>
       
     
      
        
      
      
       
        
        
        
      </div>
     
    </div>
 
    
    
  );
}
