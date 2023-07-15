import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'

const Home = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])
  return (
    <div className="home flex container">
      <div className="main-text">
        <h1 data-aos='fade-up' data-aos-duration='2500'>Create Ever lasting Memories With Us</h1>
      </div>
      <div className="home-images flex">
        <div className="video-div">
          <video src="" className="video"></video>
        </div>
        <img src="" alt="" className="plane" />
        
      </div>
    </div>
  )
}

export default Home