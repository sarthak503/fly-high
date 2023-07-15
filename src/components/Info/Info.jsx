import React from 'react'
import {RxCalendar} from 'react-icons/rx'
import {BsShieldCheck,BsBookmarkCheck} from 'react-icons/bs'
const Info = () => {
  return (
    <div className="info section">
     
      <div className="info-container container">
        <div className="title-div flex">
          <h2>Travel to make memories all around the world</h2>
          <button className="btn">
            View All
          </button>
        </div>
        
        <div className="cards-div grid">
          
          <div className="single-card grid">
            <div className="icon-div flex">
              <RxCalendar className='icon'/>
            </div>
            <span className="card-title">
              Book & Relax
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus odit in dolorem iusto! Id neque commodi non, corrupti a ad maiores quo inventore nobis debitis exercitationem vel saepe possimus officiis.</p>
          </div>

          <div className="single-card grid">
            <div className="icon-div flex  color-one">
              <BsShieldCheck className='icon'/>
            </div>
            <span className="card-title">
              Smart Checklist
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus odit in dolorem iusto! Id neque commodi non, corrupti a ad maiores quo inventore nobis debitis exercitationem vel saepe possimus officiis.</p>
          </div>

          <div className="single-card grid">
            <div className="icon-div flex  color-two">
              <BsBookmarkCheck className='icon'/>
            </div>
            <span className="card-title">
              Save More
            </span>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus odit in dolorem iusto! Id neque commodi non, corrupti a ad maiores quo inventore nobis debitis exercitationem vel saepe possimus officiis.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Info