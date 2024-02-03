import React from "react";
//import Box from '@mui/material/Box';
import '../page1/hobbies.css';
import PoolIcon from '@mui/icons-material/Pool';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';


import  { useRef, useState,useEffect  } from 'react';



//import CounterComponent from '@/components/common/htmlTags/counterCounter';


interface HobbiesProps {


  High?: string;
  Number?: number;

}




export const Hobbies = ({ High}: HobbiesProps) => {
    const [style, setStyle] = useState({color: 'black'});

    const [stylee, setStylee] = useState({color: 'black'});

return(
  

<div>
    <div className="contain">
<div className="Hobbies">Hobbies</div>
<div className="hobby">

<div className="Gaming"style={stylee}
                onMouseEnter={e => {
                     setStylee({color: 'Blue'});
                 }}
                 onMouseLeave={e => {
                     setStylee({color: 'Black'})
                 }}>
    Gaming
    <SportsEsportsIcon/>
</div>

</div>

<div>

    </div>
<div className="hobby">
</div>
<div className="hobby">
<div className ="Natation" style={style}
                onMouseEnter={e => {
                     setStyle({color: 'Blue'});
                 }}
                 onMouseLeave={e => {
                     setStyle({color: 'Black'})
                 }}> Natation     
                 <PoolIcon/></div>
          
           

</div>

</div>

    </div>


);
} 