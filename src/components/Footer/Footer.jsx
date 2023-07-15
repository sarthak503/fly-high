import React from 'react'
import {TiSocialFacebook} from 'react-icons/ti'
import { AiOutlineTwitter } from 'react-icons/ai'
import { AiFillYoutube } from 'react-icons/ai'
import {FaPinterestP} from 'react-icons/fa'
const Footer = () => {
  return (
    <div className="footer">
      <div className="section-container container grid">
      <div className="grid-one">
        <div className="logo-div">
          <img className='logo' src="" alt="" />
        </div>
        <p>Your Mind should be stronger than your feelings</p>
        <div className="social-icon flex">
          <TiSocialFacebook className='icon'/>
          <AiOutlineTwitter className='icon'/>
          <AiFillYoutube className='icon'/>
          <FaPinterestP className='icon'/>
        </div>
      </div> 
      <div className="footer-links">
        <span className="link-title">Information</span>
        <li>
          <a href="">Home</a>
        </li>
        <li>
          <a href="">Explore</a>
        </li>
        <li>
          <a href="">Flight Status</a>
        </li>
        <li>
          <a href="">Travel</a>
        </li>
        <li>
          <a href="">Check-in</a>
        </li>
        <li>
          <a href="">Manage your booking</a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </div>
      <div className="footer-links">
        <span className="link-title">Quick Guide</span>
        <li>
          <a href="">FAQ</a>
        </li>
        <li>
          <a href="">How to</a>
        </li>
        <li>
          <a href="">Features</a>
        </li>
        <li>
          <a href="">Baggage</a>
        </li>
        <li>
          <a href="">Route Map</a>
        </li>
        <li>
          <a href="">Our Communities</a>
        </li>
      </div>

      <div className="footer-links">
        <span className="link-title">Information</span>
        <li>
          <a href="">Chauffuer</a>
        </li>
        <li>
          <a href="">Our Partners</a>
        </li>
        <li>
          <a href="">Destination</a>
        </li>
        <li>
          <a href="">Careers</a>
        </li>
        <li>
          <a href="">Transportation</a>
        </li>
        <li>
          <a href="">Programme Rules</a>
        </li>
        <li>
          <a href=""></a>
        </li>
      </div>

    </div>
    <div className="copyright-div flex">
      <p>Courtesy Design | Developed by 
        <a href="https://mai-sarthak.surge.sh/" target='_blank'>Sarthak</a>

      </p>
    </div>
    </div>
  )
}

export default Footer