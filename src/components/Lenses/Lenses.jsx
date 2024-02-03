import { useEffect, useState,createRef,useRef } from "react";
import "./Lenses.scss";

import ReactPlayer from 'react-player/lazy'
import ScrollContainer from 'react-indiana-drag-scroll'

import { init } from "ityped";
import Paper from '@mui/material/Paper';

import { styled } from '@mui/material/styles';





const arr = [
  {
    detail: {
      icon:"/assets/cat.png",
    video: "https://youtube.com/watch?v=7hLqcHmQ9Zo",
    name:"my_cat",
    }
  },
  {
    detail: {
     
      icon:"/assets/obito.png",
      video: "https://youtube.com/watch?v=Btz-hRYCXw8",
      name:"obito",
    }
  },
  {
    detail: {
     
      icon:"/assets/fingers.png",
      video: "https://youtube.com/watch?v=H2EhXHe8aZs",
      name:"fingers",
    }
  },
  {
    detail: {
     
      icon:"/assets/jujutsu.png",
      video: "https://youtube.com/watch?v=mhv-3pRrFH4",
      name:"jujutsu",
    }
  },
  {
    detail: {
     
      icon:"/assets/garaa.png",
      video: "https://youtube.com/watch?v=4oydb8r7zeI",
      name:"garaa_",
    }
  },

]



export default function Lenses() {
  const [play, setplay] = useState(false);
  const [videoLink, setvideoLink] = useState("gggg");
  
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
 




  const textRef = useRef();

  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 4500,
      backSpeed:20,
      typeSpeed:  45,
      strings: ["Here I develope varient AR Lenses using 3D ,AI, Hand gestures and more .."],
    });
  }, []);
  

  return (
    <div className="Lenses"  >
      <div className="phone">
        <div  className="video">
       
        <img className="ImageIphone" src="./assets/iphone.png" alt="Logo" />
        <ReactPlayer  height="100%" width="100%"  playing={true} url={videoLink} />
        </div>
       
     
      
        <ScrollContainer className="containerr">
        <section
          className="tiless"
          onFocus={enableKeyboardCursorToScroll}
          ref={scrollRef}
        >
          
          {arr.map((val, i) => {
          
          return (
            <div
              key={i}
              num={i}
              className="roww" style={{  
                backgroundImage: "url(" + arr[i].detail.icon + ")",  
                //backgroundPosition: 'center',
                //backgroundSize: 'cover',
                //backgroundRepeat: 'no-repeat'
              }}
              
              onClick={() => setvideoLink(arr[i].detail.video)}
              
              
            >
              {arr[i].detail.name}
            </div>
            
          );
        })}
          
          
        </section>
      </ScrollContainer>
      
      
       
        
        
        
      </div>
      <div className="rightlense">
        {console.log()}
        
        <object className="display-mobile" data="assets/snapcodes.svg" paddingBottom="30px" width="40%" height="40%"> </object>
        <div className="imgContainer">
      
      <div className="wrapper-lens">
      
        <h3>
          <span ref={textRef}></span>
        </h3>
        


     
      </div>
      </div>
   
      </div>
    </div>
  );
}
