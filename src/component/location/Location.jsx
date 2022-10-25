import React from 'react'
import './Location.css'
import {useNavigate} from 'react-router-dom'


const Location = ({locationObj}) => {
   const navigate = useNavigate()
  

  return (
    <article className='location' onClick={() => navigate(`/logement/${locationObj.id}`)}>
        <img src={locationObj.cover} alt="" />
      <p className='location-title'>{locationObj.title}</p>
    </article>
  )
}



export default Location
