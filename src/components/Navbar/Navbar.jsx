import React, { useState } from 'react'
import {SiConsul} from 'react-icons/si'
import {BsPhoneVibrate} from 'react-icons/bs'
import {AiOutlineGlobal} from 'react-icons/ai'
import {CgMenuGridO} from 'react-icons/cg'

function Navbar() {
  
  const [active,setActive]=useState('nav-bar-menu');
  const showNavBar=()=>{
    setActive('nav-bar-menu show-nav-bar');
  }
  const hideNavBar=()=>{
    setActive('nav-bar-menu');
  }
  const [noBg,setBg]=useState('nav-bar-two');
  const addBgColor=()=>{
    if(window.scrollY >=10)
    setBg('nav-bar-two nav-with-bg');
    else
    setBg('nav-bar-two')
  }

  window.addEventListener('scroll',addBgColor)
  return (
    <div className="nav-bar flex">
      <div className="nav-bar-one flex">
        <div>
          <SiConsul/>
        </div>
        <div className="flex">
          <li className="flex"><BsPhoneVibrate className='icon'/> Support</li>
          <li className="flex"><AiOutlineGlobal className='icon'/> Languages</li>
        </div>

        <div className="atb flex">
          <span>Sign In</span>
          <span>Sign Out</span>
        </div>

      </div>
      <div className={noBg}>
        <div className="logo-div">
          <img src="" alt=""  className='logo'/>
        </div>
        <div className={active}>
          <ul className="menu flex">
            <li onClick={hideNavBar} className="list-item">Home</li>
            <li onClick={hideNavBar} className="list-item">About</li>
            <li onClick={hideNavBar} className="list-item">Offers</li>
            <li onClick={hideNavBar} className="list-item">Seats</li>
            <li onClick={hideNavBar} className="list-item">Destination</li>
          </ul>
          <button onClick={hideNavBar} className="btn flex btn-one">Contact</button>
        </div>
        <button onClick={hideNavBar} className="btn flex btn-two">Contact</button>

        <div onClick={showNavBar} className="toggle-icon">
          <CgMenuGridO/>
        </div>
      </div>
    </div>
  )
}

export default Navbar