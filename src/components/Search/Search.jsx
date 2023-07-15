import React, {useEffect} from 'react'
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {RiAccountPinCircleLine} from 'react-icons/ri'
import {RxCalendar} from 'react-icons/rx'

import Aos from 'aos'
import 'aos/dist/aos.css'
const Home = () => {

  useEffect(()=>{
    Aos.init({duration:2000})
  },[])}
const Search = () => {

  return (
    <div className="search container section">
      <div data-aos='fade-up' data-aos-duration='2500'className="section-container grid">
        <div className="btns flex">
          <div className="single-btn">
            <span>Econonmy</span>
          </div>
          <div className="single-btn">
            <span>Business Class</span>
          </div>
          <div className="single-btn">
            <span>First Class</span>
          </div>
        </div>
        <div data-aos='fade-up' data-aos-duration='2000' className="search-inputs flex">
          <div className="single-input flex">
            <div className="icon-div">
              <HiOutlineLocationMarker className='icon'/>
            </div>
            <div className="texts">
              <h4>Location</h4>
              <input type="text" placeholder='Where do you want to go' />
            </div>
          </div>

          <div className="single-input flex">
            <div className="icon-div">
              <RiAccountPinCircleLine className='icon'/>
            </div>
            <div className="texts">
              <h4>Travellers</h4>
              <input type="text" placeholder='Add Guests' />
            </div>
          </div>

          <div className="single-input flex">
            <div className="icon-div">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Check In </h4>
              <input type="text" placeholder='Add Date' />
            </div>
          </div>

          <div className="single-input flex">
            <div className="icon-div">
              <RxCalendar className='icon'/>
            </div>
            <div className="texts">
              <h4>Check Out </h4>
              <input type="text" placeholder='Add Date' />
            </div>
          </div>

          <button className='btn btn-block flex'>Search</button>
        </div>
      </div>
    </div>
  )
}

export default Search