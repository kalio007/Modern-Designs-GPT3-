import React from 'react';

import './App.css';
import Nav from './Components/Nav/Nav';
import Header from "./Components/Header/Header";
import Brand from './Components/Brand/Brand';
import GPT3 from './Components/GPT3/GPT3';
import Feature from './Components/Feature/Feature';
import Features from './Components/Features/Features';
import Possibility from './Components/Possibility/Possibility';


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
      </div>
    
  );
}

export default App;
