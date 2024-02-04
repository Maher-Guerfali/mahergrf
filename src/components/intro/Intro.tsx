import "./intro.scss";
import { init } from "ityped";
import { useEffect } from "react";
import Model from './Model'; /* highlight-line */
import  { Suspense } from 'react';
//import { Canvas } from '@react-three/fiber';
//import { OrbitControls } from '@react-three/drei';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';

import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import "../../pixels.scss"
import { useState } from 'react';
import {Link} from 'react-scroll';
import Typewriter from 'typewriter-effect';
import React, { useRef } from 'react';
//import { useGLTF } from '@react-three/drei';
//import Box from '@mui/material/Box';  

export default function Intro() {
  
  const textRef = React.useRef() as React.MutableRefObject<HTMLInputElement>;



  let fruits2 =["Game Developer","Video Editor","Lenses Creator","Web Developer", "Designer","Gaming Coach"];
  let fruits3 =["I developed application with java (+spring boot),c,c++c#(.net and unity),java/typescript,solidity..."];

  const StyledRating = styled(Rating)({
    '& .MuiRating-iconFilled': {
      color: '#ff6d75',
    },
    '& .MuiRating-iconHover': {
      color: '#ff3d47',
    },  
  });
  const openResume = () => {
    window.open('/pdf/mahercv.pdf', '_blank');
  };

  const [text, settext] = useState(fruits2);
  
  const [fade, setfade] = useState("");
  const [select, setselect] = useState(1);

  const [grey1, setgrey1] = useState(true);
  const [grey2, setgrey2] = useState(false);
  const [grey3, setgrey3] = useState(false);
  const [grey4, setgrey4] = useState(false);


  let grey = (select : number) =>{

    switch (select) {
      case (1):
          console.log('Low numbers');
          setgrey1(true);
          setgrey2(false);
          setgrey3(false);
          setgrey4(false);
          setFadez(false);
         
          
          break;
          case (2):
            console.log('L5mbers');
            setgrey1(false);
            setgrey2(true);
            setgrey3(false);
            setgrey4(false);
            setFadez(true);
            break;
            case (3):
              console.log('L55ers');
              setgrey1(false);
              setgrey2(false);
              setgrey3(true);
              setgrey4(false);
              break;
              case (4):
                console.log('Lo44ers');
                setgrey1(false);
                setgrey2(false);
                setgrey3(false);
                setgrey4(true);
                break;
      default:
          console.log('invalid numbers');

  }
}
  


  const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));
/*
  useEffect(() => {

    init(textRef.current, {
      showCursor: true,
      backDelay: 1340,
      backSpeed:40,
      loop:false,
      typeSpeed:  75  ,
      strings: ["Game Developer","Video Editor","Lenses Creator","Web Developer", "Designer","Gaming Coach"]
    });
  },);
  {<h3 className="h3float" >Freelance <span   ref={textRef}></span>  </h3>}
  */
  

  const [fadez, setFadez] = useState(true);
  
  const triggerFadez = () => {
    setFadez(prevState => {
      return !prevState
    })
  }




  //"Game Developer","Video Editor","Lenses Creator","Web Developer", "Designer","Gaming Coach"

  return (


    
    <div className="intro" id="intro">
      <div className="left">
         
      <div className="sociallinks">
     
<div className="icons" >
Links
</div>
<div className="itemContainer">
            
            <a href="https://www.fiverr.com/maherguerfali">
            <img className="icona" src="assets/fiverr.png" alt=""   />
</a>
   
              
            </div>
<div className="itemContainer">


            
            <a href="https://www.youtube.com/channel/UCiXMHnoKofcX5amc-g2cv_Q">
            <img  className="icony" src="assets/youtubee.png" alt=""  />
      </a>
                      
                    </div>

                      
          <div className="itemContainer">
            

        
            <a href="https://www.linkedin.com/in/maher-guerfali/">
            <img className="icon" src="assets/linkedinlogo.png" alt="" />
      </a>
                      
                    </div>
                   
        

          <div className="itemContainer">
          <a href="https://www.instagram.com/maher_guerfali/">
          <img className="icon" src="assets/itch.png" alt="" />
            </a>
          </div>
          
         
          
          
         
         
     
        


          </div>     
          
        <div className="pixelart-to-csscafe">
          

</div>
 
 
{
  

  //<img className="icon" src="assets/man.png" alt="" width="250px" height="500px"  />
}
  

         
         
      </div>

















      <div className="right">
      <div  className="imgContainer-intro">
     
        <div className="wrapper-intro">
          
          
         
        {grey1 && <>
       
   
   <Typewriter

options={{
  delay:34,
  autoStart: true,
  cursor: "❤️",
  loop: true,
}}
          onInit={(typewriter) =>{ typewriter.typeString("I'm Maher Guerfali, a Freelance Game Developer with over 3 years of experience in VR, XR, and mobile technologies").pauseFor(9100).start(); 
        }}/>
  </>
}
{grey2 && <Typewriter

options={{
  delay:34,
  autoStart: false,
  cursor: "|",
  loop: true,
}}
          onInit={(typewriter) =>{  typewriter.typeString(`As a full-time freelancer on Fiverr, I handle diverse projects independently, covering 3D, music, VFX, and gameplay development. Check out <a href="#works">this page</a> `).pauseFor(9100).deleteAll().start(); 
        }}/>
      }

        

  {grey3 && <Typewriter 

options={{
  delay:34,
  autoStart: false,
  cursor: "|",
  loop: true,
}}
          onInit={(typewriter) =>{ typewriter.typeString(" You can contact me by email at maher.guerfali@gmail.com or by clicking the links by the left ").pauseFor(6000).start(); 
        }}/>}

      {grey4 &&
    <Typewriter

options={{
  delay:34,
  autoStart: true,
  cursor: "❤️",
  loop: true,
}}
          onInit={(typewriter) =>{ typewriter.typeString(`You can help me keep the good work and donate though 
          <a target="_blank" rel="noopener noreferrer"  href="https://ko-fi.com/mahergrf">Koffe
          </a> or E-dinar 5359401741123166`).pauseFor(2000).deleteAll().start(); 
        }}/>
      }
    

       
        </div>
        </div>


        <Grid className="choixr" container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
  <Grid item xs={6} >
  <Item  className="pixel2" onClick={() =>  grey(1)} ><a className="aa" style={{color : grey1 ?  "grey": "#ebe0d0" } } >Who am i</a></Item>
  </Grid>
  <Grid item xs={6}>
    <Item className="pixel2" style={{color : grey2 ? "grey": "orange" } } onClick={() =>  grey(2) } ><a className="aa" style={{color : grey2 ? "grey": "#ebe0d0" } }   >WORKS</a></Item>
  </Grid>
  <Grid item xs={6}>
    <Item className="pixel2" onClick={() =>  grey(3)  }><a className="aa" style={{color : grey3 ? "grey": "#ebe0d0"  } }   >Hire me</a></Item>
  </Grid>
  <Grid item xs={6}>
    <Item className="pixel2" onClick={openResume}  ><a className="aa" style={{color : grey4 ? "grey": "#ebe0d0" } }  >Resume</a></Item>
  </Grid>
</Grid>

    
        <a className="ae" href="#portfolio">
          <img src="assets/down.png" alt="" />
          
        </a>
      </div>
    </div>
  );
}
