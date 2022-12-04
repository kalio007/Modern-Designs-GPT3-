import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';

import './Nav.css';

export default function Nav() {
  const [toggleMenu, setToggleMenu]= useState(false);

    return (
      <div className="gpt3__navbar">
        <div className='gpt3__navbar-links'>

          <div className='gpt3__navbar-links-logo'>
            <img src="" alt="logo"/>
            </div>
            <div className="gpt3__navbar-links_container">
              <p><a href="#Home"></a>Home</p>
              <p><a href="#wgpt3"></a>What is GPT3</p>
              <p><a href="#possibilty"></a>OpenAI</p>
              <p><a href="features"></a>case Study</p>
              <p><a href="#blog"></a>Library</p>

            </div>
            
        </div>
        

        <div className='gpt3__navbar-signs'>
              <p>Sign In</p>
              <button type='button'>Sign Up</button>
            </div>



        <div className='gpt3__navbar-menu'>

          { toggleMenu 
          ? <RiCloseLine color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color='#fff' size={27}  onClick={() => setToggleMenu(true)} />}
          {toggleMenu &&(
            <div className='gpt3--navbar-menu_contianer scale-up-center'>
              <div className='gpt3__navbar-menu_contianer-links'>

              <p><a href="#Home"></a>Home</p>
              <p><a href="#wgpt3"></a>What is GPT3</p>
              <p><a href="#possibilty" alt='possibilty'></a>OpenAI</p>
              <p><a href="features" alt='features'></a>case Study</p>
              <p><a href="#blog" alt='blog'></a>Library</p>

              </div>
            <div className="gpt3__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
            </div>
          )
          }

        </div>

        </div>
    )}