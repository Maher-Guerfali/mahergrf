import React from 'react';
import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro"
import Portfolio from "./components/portfolio/Portfolio"
import Works from "./components/works/Works"
import Testimonials from "./components/testimonials/Testimonials"
import Contact from "./components/contact/Contact"
import "./app.scss"
import Menu from "./components/menu/Menu";

//import {Button} from './stories/Button'
import Models from './components/models/Models'
import Visa from './components/images/Visa'
import Apps from './components/Apps/Apps'
import Flappy from './components/Game_flappy/Flappy'
import Bio from './components/Bio/Bio'
import Unity from './components/Unity/Unity'

//import Apps from './components/Apps/Apps'
import Lenses from './components/Lenses/Lenses'
import Games from './components/Games/Games'
import { ParallaxProvider } from 'react-scroll-parallax';
import { useState, useEffect } from 'react';
import ReactGA from 'react-ga';

function App() {
  const [menuOpen,setMenuOpen] = useState(false);

  ReactGA.initialize('G-JVXD37YN0M');
  ReactGA.pageview(window.location.pathname + window.location.search);
  return (

    <ParallaxProvider>
    <div className="app" >
      
    <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    
    <div className="sections" >
    
      <Intro/>
    
      <Works/>
      
      <Portfolio/>
      <Lenses/> 
     
      
      
      <Games/>

      
      <Contact/>
    </div>
   </div>
   </ParallaxProvider>
  );
}

export default App;
