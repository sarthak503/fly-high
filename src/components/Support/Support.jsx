import React, { useEffect } from 'react'
import Aos from 'aos'
import 'aos/dist/aos.css'
const Support = () => {
  useEffect(()=>{
    Aos.init({duration:2000})
  },[])

  return (
    <div className="support container section">
      <div data-aos='fade-up' data-aos-duration='2500' className="section-container">
        <div className="titles-div">
          <small>travel support</small>
          <h2>Plan you travel with confidence</h2>
          <p>Find Help with booking and travel plans,see what to expect</p>
        </div>

        <div   className="info-div grid">
          <div className="text-div grid">

            <div data-aos='fade-down' data-aos-duration='2500' className="single-info ">
              <span className="number">01</span>
              <h4>Travel requirements for Dubai</h4>
              <p>Find help with booking and travel plans and see what you got!</p>
            </div>

            <div data-aos='fade-up' data-aos-duration='2500' className="single-info ">
              <span className="number color-one">02</span>
              <h4>Chauffeur services at your arrival</h4>
              <p>Find help with booking and travel plans and see what you got!</p>
            </div>

            <div data-aos='fade-down' data-aos-duration='2500' className="single-info">
              <span className="number color-two">03</span>
              <h4>Multi-risk travel insurance</h4>
              <p>Find help with booking and travel plans and see what you got!</p>
            </div>

          </div>
          <div className="img-div">
            <img src="" alt="" />
          </div>
        </div>


      </div>
    </div>
  )
}

export default Support