import { React, useEffect, useState ,Suspense,useRef } from "react";
import { useParallax,Parallax } from "react-scroll-parallax";
import "./flappy.scss";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./flappy/apks.loader.js",
  dataUrl: "./flappy/webgl.data",
  frameworkUrl: "./flappy/build.framework.js",
  codeUrl: "./flappy/build.wasm",
});



export default function Flappy() {
  const [text, settext] = useState(true);
  const [play, setplay] = useState(false);
  const [icon, seticon] = useState(true);
  function trigger(){
    setplay(!play);
    setplay(!icon);
  }

  return (
    <div className="Flappy" id="Flappy" >
      {icon && <>
      <div className="etaps">
      <h2 className="hdeux" >VR headset needed</h2>
       <div  className="wallpaper" >
       
      
       </div>
       
     
       <img  onClick={event => {
     setplay(!play);
     seticon(!icon);
  }} className="Gamelogo" alt="Qries" src="assets/x.gif"
         />   
      </div>
      
         
 
   
  </>
}
     
  


  {play && <>
    <div className="etaps">
      <h2 className="hdeux" >Presse X to start/restart</h2>
       <Unity className="unitygame" unityContext={unityContext}
     />
     <img  onClick={event => {
       setplay(!play);
       seticon(!icon);
    }} className="Gamelogo" alt="Qries" src="assets/x.gif"
           /></div>
     
    </>
  }
   
        </div>
  
  
    
      
    );
  }
  