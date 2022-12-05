import React from 'react';

import './App.css';
import Nav from './Components/Nav/Nav';
import Header from "./Components/Header/Header";
import Brand from './Components/Brand/Brand';
import GPT3 from './Components/GPT3/GPT3';


function App() {
  return (
    <div className="app">
      <div className='gradient__bg'>
      <Nav />
      <Header/>
      </div>
      <Brand />
      <GPT3/>
      </div>
    
  );
}

export default App;
