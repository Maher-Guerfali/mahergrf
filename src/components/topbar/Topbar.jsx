import "./topbar.scss";

import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React, { useEffect, useState } from 'react';


export default function Topbar({ menuOpen, setMenuOpen }) {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
      const onScroll = () => setOffset(window.pageYOffset);
      // clean up code
      window.removeEventListener('scroll', onScroll);
      window.addEventListener('scroll', onScroll, { passive: true });
      return () => window.removeEventListener('scroll', onScroll);
  }, []);
  console.log(offset);
  console.log(offset);
  const openResume = () => {
    window.open('/pdf/mahercv.pdf', '_blank');
  };
  const [Copie, setCopie] = useState("Clic Here");

  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapperr">
        <div className="left">
          <a href="#intro" className="logo">
          <img src="assets/mblue.gif" alt="" width="65px" height="55px" />
          </a>

          
  {
   //  <Tooltip title="Donate" arrow>

//<a target="_blank" rel="noopener noreferrer" className="sizecup" href="https://ko-fi.com/mahergrf">
//<img className="sizecup2" src="assets/mahergrf.png" alt="Mahergrf" />
  
//</a>

//</Tooltip>S
}
         
      
          <div className="itemContainer-r">
           
              <Tooltip title={<Typography fontSize={20}>{Copie}</Typography>} arrow>
              <a className="emailo" onClick={() => {setCopie("Clic here"); navigator.clipboard.writeText('maher.guerfali@gmail.com')}}>
               
              </a>
              
</Tooltip>
            
           
           
            
          </div>
        </div>
       
        <div className="right">
        <div className="iminfou9">
         
          <Tooltip className="cups" title="Donate" arrow>

<a target="_blank" rel="noopener noreferrer"  href="https://ko-fi.com/mahergrf">
  
</a>

</Tooltip>
        <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
          
        </div>
         
        </div>
      </div>
    </div>
  );
}
