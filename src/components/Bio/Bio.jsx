import { React, useEffect, useState ,Suspense,useRef } from "react";
import { useParallax,Parallax } from "react-scroll-parallax";
import "./Bio.scss";
import Unity, { UnityContext } from "react-unity-webgl";




export default function Apps() {
  const [text, settext] = useState(true);
  const [play, setplay] = useState(false);
  const [icon, seticon] = useState(true);
  function trigger(){
    setplay(!play);
    setplay(!icon);
  }

  return (
    <div className="Bio" id="Bio" >
      <div className="leftp"><h1>Bio</h1>
<div>As a game and web development student and a freelancer, I bring both technical skills and an artistic vision to the table.

I have a passion for high-tech and new technologies, constantly seeking to expand my knowledge</div>
      </div>
      <img className="rightp"  src="k.jpg" alt="" />
      </div>


  
    
  );
}
