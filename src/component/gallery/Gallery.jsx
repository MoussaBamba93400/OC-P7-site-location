import './Gallery.css'
import { useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'

import React from 'react'

const Gallery = ({data}) => {
// state "currImg" use as the index of the current img rendered from the array prictures in the ad.json file
const [currImg, setcurrImg] = useState(0)


let dataLength = Object.keys(data).length;

  return (
    <div className='slider_container'>{ data.pictures?.length !== 1?
        <IoIosArrowForward  className='slide-left' onClick={ () => setcurrImg(currImg === 0? data.pictures.length - 1 :currImg - 1)}/> : null }
       <img className='housing_cover' src={dataLength > 0? data.pictures[currImg]: null} alt="img"/>{  data.pictures?.length !== 1?
       <IoIosArrowForward  className='slide-right' onClick={ () => setcurrImg(currImg === data.pictures.length - 1? 0: currImg + 1)}/> : null}
      </div>
  )
}

export default Gallery
