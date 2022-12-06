import React from 'react';

import './App.css';
import Nav from './Components/Nav/Nav';
import Header from "./Components/Header/Header";
import Brand from './Components/Brand/Brand';
import GPT3 from './Components/GPT3/GPT3';
import Feature from './Components/Feature/Feature';
import Features from './Components/Features/Features';
import Possibility from './Components/Possibility/Possibility';
import CTA from './Components/CTA/CTA';
import Blog from './Components/Blog/Blog';
import Footer from './Components/Footer/Footer';



function App() {
  return (
    <div className="app">
      <div className='gradient__bg'>
      <Nav />
      <Header/>
      </div>
      <Brand />
      <GPT3/>
      <Features/>
      <Possibility />
      <CTA/>
      <Blog/>
      <Footer/>
      </div>
    
  );
}

export default App;
