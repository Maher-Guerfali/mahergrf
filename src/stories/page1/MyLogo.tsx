import React from "react";
//import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import '../page1/MyLogo.css';



import  { useRef, useState,useEffect  } from 'react';
import { Container } from "@mui/material";
import Brightness6Icon from '@mui/icons-material/Brightness6';



//import CounterComponent from '@/components/common/htmlTags/counterCounter';

function Box(props: JSX.IntrinsicElements['mesh']) {
  const ref = useRef<THREE.Mesh>(null!)
  const [hovered, hover] = useState(false)
  const [clicked, click] = useState(false)
  useFrame((state, delta) => (ref.current.rotation.x += 0.01))
  return (
    <mesh
      {...props}
      ref={ref}
      scale={clicked ? 1.5 : 1}
      onClick={(event) => click(!clicked)}
      onPointerOver={(event) => hover(true)}
      onPointerOut={(event) => hover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}
interface MyLogoProps {


  Hhigh?: string;
  Nnumber?: number;

}




export const MyLogo = ({ Hhigh}: MyLogoProps) => {
    const [style, setStyle] = useState({color: 'black'});

    const [stylee, setStylee] = useState({color: 'black'});

return(

  <div className="
  middle">
    <div>
    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
      <Brightness6Icon />
    </IconButton>
    <Typography variant="h6" color="inherit" component="div">
      Maher Guerfali
    </Typography>
    </div>


    <Canvas>
    <ambientLight />
    <pointLight position={[10, 10, 10]} />
    <Box position={[-1.2, 0, 0]} />
    <Box position={[1.2, 0, 0]} />
  </Canvas>,
    
  </div>






);
} 