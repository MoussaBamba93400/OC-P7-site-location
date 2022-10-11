import React from 'react'
import './Location.css'


const Location = ({locationObj}) => {
   
  function locationPage(objLocation) {
     window.location.href = `/logement/${locationObj.id}` 
  }

  return (
    <article className='location' onClick={locationPage}>
        <img src={locationObj.cover} alt="" />
      <p className='location-title'>{locationObj.title}</p>
    </article>
  )
}



export default Location
