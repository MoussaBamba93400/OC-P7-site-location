import React from 'react'
import './Info.css'
import {BsStarFill} from 'react-icons/bs'


export default function Info({data}) {

  let ratings =[]

  if(data.rating) {
  for(let i= 0; i < 5; i++) {
     if(i < data.rating.toString()) {
      ratings.push("valid")
     } else {
      ratings.push('none-valid')
     }
  }

  }
   
  console.log(ratings)

  return (
    <div className='info-container'>
    <div>
      <h1 className='housing-title'>{data.title}</h1>
      <p className='housing-location'>{data.location}</p>
      <ul className='tags'>{data.tags?.map((elem, index) => 
        <li key={index}>{elem}</li>
      )}</ul>
      </div>

      <div className='info-host'>
      <div className="name-picture">
        <p>{data.host?.name}</p>

        <img src={data.host?.picture} alt=''/>
        </div>

      <div className="ratings">{
        ratings.map((elem, index) => (
          <BsStarFill key={index} className={`stars ${elem}`} />
        ))
      }</div>
      </div>
    </div>
  )
}


