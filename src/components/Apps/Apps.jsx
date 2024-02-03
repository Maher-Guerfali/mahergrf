import { React, useEffect, useState ,Suspense,useRef } from "react";
import { useParallax,Parallax } from "react-scroll-parallax";
import "./Apps.scss";
import Unity, { UnityContext } from "react-unity-webgl";

const unityContext = new UnityContext({
  loaderUrl: "./portogame/build.loader.js",
  dataUrl: "./portogame/build.data",
  frameworkUrl: "./portogame/build.framework.js",
  codeUrl: "./portogame/build.wasm",
});



export default function Apps() {
  const [text, settext] = useState(true);
  const [play, setplay] = useState(false);
  const [icon, seticon] = useState(true);
  function trigger(){
    setplay(!play);
    setplay(!icon);
  }

  return (
    <div className="Apps" id="Apps" >
      {icon && <>
      <div className="etaps">
      <h2 className="hdeux" >Presse X to start/restart</h2>
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
