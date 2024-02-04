import { useState, useEffect  } from "react";
import "./works.scss";
import ReactPlayer from 'react-player/lazy';
// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { EffectFade, EffectCoverflow } from 'swiper/modules';
export default function Works() {

  const [currentSlide, setCurrentSlide] = useState(0);

  const [textVideo, setVideo] = useState('');
  
  const [text, setText] = useState(null);
  const [LinkVideo1, setLinkVideo1] = useState(null);
  const [LinkVideo2, setLinkVideo2] = useState(null);
  const [LinkVideo3, setLinkVideo3] = useState(null);
  const [LinkVideo4, setLinkVideo4] = useState(null);
  const [NameVideo1, setNameVideo1] = useState(null);
  const [NameVideo2, setNameVideo2] = useState(null);
  const [NameVideo3, setNameVideo3] = useState(null);
  const [NameVideo4, setNameVideo4] = useState(null);
  const [IconVideo1, setIconVideo1] = useState(null);
  const [IconVideo2, setIconVideo2] = useState(null);
  const [IconVideo3, setIconVideo3] = useState(null);
  const [IconVideo4, setIconVideo4] = useState(null);
  const [DescVideo1, setDescVideo1] = useState(null);
  const [DescVideo2, setDescVideo2] = useState(null);
  const [DescVideo3, setDescVideo3] = useState(null);
  const [DescVideo4, setDescVideo4] = useState(null);


  useEffect(() => {
    fetch('/api/videos/text.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setVideo(data.text))
      .catch(error => console.error(error));
  }, []);

   useEffect(() => {
    fetch('/api/text.json')
      .then(res => res.json())
      .then(data => {
        setText(data.text);
        setLinkVideo1(data.LinkVideo1);
        setLinkVideo2(data.LinkVideo2);
        setLinkVideo3(data.LinkVideo3);
        setLinkVideo4(data.LinkVideo4);
        setNameVideo1(data.NameVideo1);
        setNameVideo2(data.NameVideo2);
        setNameVideo3(data.NameVideo3);
        setNameVideo4(data.NameVideo4);
        setIconVideo1(data.IconVideo1);
        setIconVideo2(data.IconVideo2);
        setIconVideo3(data.IconVideo3);
        setIconVideo4(data.IconVideo4);
        setDescVideo1(data.DescVideo1);
        setDescVideo2(data.DescVideo2);
        setDescVideo3(data.DescVideo3);
        setDescVideo4(data.DescVideo4);
      });
  }, []);

  const data = [
  
    
    {
      id: "1",
      field: "ItemUnity",
      icon: IconVideo1,
      title: NameVideo1,
      Technologies: DescVideo1,
        video:LinkVideo1,
    },
    {
      id: "2",
      field: "ItemUnity",
      icon: IconVideo2,
      link:"https://www.pingoos.gg/",
      title: NameVideo2,
      Technologies: "2D Webgl game inspired by flappy bird with online leaderboard for the pingoos community, and made there NextJS website toodd: <a>pingoos.gg </a>",
        video:LinkVideo2,
    },
    {
      id: "3",
      field: "ItemUnity",
      icon: IconVideo3,
      title: NameVideo3,
      Technologies:
      DescVideo3,
        video:
        LinkVideo3,
    },
    {
      id: "4",
      field: "ItemUnity",
      icon: IconVideo4,
      title: NameVideo4,
      Technologies:
      DescVideo4,
        video:
        LinkVideo4,
    },

    {
      id: "5",
      field: "ItemUnity",
      icon: "./assets/soccer.png",
      title: "Sandbox Lands",
      Technologies:
        "Welcome to my creative corner in the virtual universe! As a verified voxel artist within the Sandbox Metaverse, I specialize in crafting immersive experiences using VoxEdit and Sandbox Game Maker. With a passion for innovative gameplay, I've designed multiple maps that showcase the dynamic potential of voxel art. Explore my portfolio to witness the fusion of artistic expression and interactive game design in this exciting digital realm",
        video:
        "https://youtu.be/WefnChKZhFs",
    },
    {
      id: "6",
      field: "ItemUnity",
      icon: "./assets/Viewer.png",
      title: "VR ProViewer",
      Technologies:
        " VR App to Sream internal storage videos, in a big curved screen with video controllers",

      video:
        "https://youtu.be/j_0sB1PP00c",
    },
    
    
   
   
    
  
  ];


  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 5)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };
  
  return (
   
    <div className="works" id="works">



   

    <Swiper
      // install Swiper modules
      modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]} 
      effect={'EffectFade'}
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
         
        {data.map((d) => (
           
          <SwiperSlide >
       
             
          
          <div className="rajel">
            <div className="icona">
            <ReactPlayer className="videor" height="100%" width="100%" light={d.icon} autoplay="false" url={d.video} controls="true"  />
            </div>
          
              <div className="text" >
               
          
               <h3 className="titleslide">{d.title}</h3>
               <a href={d.link}>Link</a>
                <p className="techdescslide" >{d.Technologies}</p>
              
                
                
                
            </div>
            
          </div>
            
              
            
          
        </SwiperSlide>
       
        ))}
        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
         </Swiper>
      </div>
      
     
    
   
  );
}
