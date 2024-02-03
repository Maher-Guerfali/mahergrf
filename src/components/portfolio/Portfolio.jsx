import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./portfolio.scss";
import * as React from 'react';
import Box from '@mui/material/Box';
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import FileCopyIcon from '@mui/icons-material/FileCopyOutlined';
import SaveIcon from '@mui/icons-material/Save';
import PrintIcon from '@mui/icons-material/Print';
import ShareIcon from '@mui/icons-material/Share';
import WebIcon from '@mui/icons-material/Web';
import AndroidIcon from '@mui/icons-material/Android';
import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, useGLTF, OrbitControls } from "@react-three/drei";
import { HexColorPicker } from "react-colorful";
import { proxy, useSnapshot } from "valtio";
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectFade, EffectCoverflow } from 'swiper/modules';
import ReactPlayer from 'react-player/lazy'


import {
  featuredPortfolio,
  webPortfolio,
  mobilePortfolio,
  designPortfolio,
  contentPortfolio,
} from "../../data";

export default function Portfolio() {

  // Using a Valtio state model to bridge reactivity between
// the canvas and the dom, both can write to it and/or react to it.




  const [selected, setSelected] = useState("featured");
  const [affiche, setaffiche] = useState(false);
  const [videoaffiche, setvideoaffiche] = useState("");
  const [nameaffiche, setnameaffiche] = useState("");
  const [descr, setdescr] = useState("");
  const [data, setData] = useState([]);

function playvideo()
{

}
  function myFunction(j,i,descr){
    setaffiche(true);
    setdescr(descr)
    setvideoaffiche(i);
    setnameaffiche(j);
}
  

  const list = [
    {
      id: "Softwears",
      title: "Softwears",
    },
    {
      id: "Languages",
      title: "Languages",
    },
    {
      id: "Coding",
      title: "Coding",
    },
    {
      id: "Extras",
      title: "Extras",
    },
    
  ];
  const actions = [
    { icon: <WebIcon />, name: 'React stripe ..' },
    { icon: <SaveIcon />, name: 'Save' },
    { icon: <AndroidIcon />, name: 'Print' },
    { icon: <ShareIcon />, name: 'Share' },
  ];
  useEffect(() => {
    switch (selected) {
      case "Softwears":
        setData(featuredPortfolio);
        break;
      case "Languages":
        setData(webPortfolio);
        break;
      case "Coding":
        setData(mobilePortfolio);
        break;
      case "design":
        setData(designPortfolio);
        break;
      case "Extras":
        setData(contentPortfolio);
        break;
      default:
        setData(webPortfolio);
    }
  }, [selected]);

  return (
    <div className="portfolio" id="portfolio">
      <div className="titlepo">Alchemist's Kit</div>
      
      <ul className="topbassr">
        {list.map((item) => (
         
            <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
            
          />
     
        
          
        ))}
      </ul>

      <div className="container-works">
        {data.map((d) => (
          <div className="items-works"   onClick={() => myFunction(d.img,d.img2,d.descp)}
          >
           {console.log(nameaffiche)}
           

            <img
              src={d.img}
              alt=""
              className="items-images"
            />
            
            
          </div>
        ))}
        
      <div className={affiche ? 'define' : 'invs'}  >
        
      
        
      <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]} 
      effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
      
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: '.swiper-pagination', clickable: true }}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        
        className="swiper_container"
      spaceBetween={50}
      
     
      
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      
    >
         
        
           
          <SwiperSlide >
          <img src={videoaffiche} className="miniimage" alt="" />
            </SwiperSlide>
            <SwiperSlide >
            <img src="assets/battle.png" className="miniimage" alt="" />
            </SwiperSlide>
          <SwiperSlide >
          <img src="assets/battle.png" className="miniimage" alt="" />
            </SwiperSlide>
</Swiper>       
                <div className="techs">{descr} </div>
                <a className="closeButton" onClick={()=>setaffiche(false)}>❌</a>
     </div>
      </div>
      
    </div>
  );
}
