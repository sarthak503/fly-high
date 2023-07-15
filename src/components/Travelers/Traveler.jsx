import React from 'react'
const travellers=[
  {
    id:1,
    destinationImage:'',
    travelerImage:'',
    travelerName:'Sasha',
    socialLink:'@sasha'
  },
  {
    id:2,
    destinationImage:'',
    travelerImage:'',
    travelerName:'John',
    socialLink:'@John'
  },
  {
    id:3,
    destinationImage:'',
    travelerImage:'',
    travelerName:'Sarthak',
    socialLink:'@sarthak'
  },

]
const Traveler = () => {
  
 

  return (
    <div className="travelers container section">
      <div className="section-container">
        <h2>Top Travelers of this month!</h2>
        <div className="travelers-container grid">
        
        {
          travellers.map(({id,destinationImage,travelerImage,travelerName,socialLink})=>{
            return (
           <div key={id} className="single-traveler">
             <img src={destinationImage} alt="" className="destination-image" />
             <div className="traveler-details">
              <div className="traveler-picture">
                <img src={travelerImage} alt="" />
              </div>
              <div className="traveler-name">
                <span>{travelerName}</span>
                <p>{socialLink}</p>
              </div>
              </div>
            </div>
            )
          })
        }
         

        </div>
      </div>
    </div>
  )
}

export default Traveler