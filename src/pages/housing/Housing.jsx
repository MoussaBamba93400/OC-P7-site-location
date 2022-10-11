import React, { useEffect, useState } from 'react'
import {IoIosArrowForward} from 'react-icons/io'
import './Housing.css'
import Header from '../../component/header/Header'
import Collapse from '../../component/Collapse/Collapse'
import Info from '../../component/housing_content/Info'
import Footer from '../../component/footer/Footer'
import Error from '../error_page/Error'
import { useParams } from 'react-router-dom'



const Housing = () => {
const [adData, setAdData] = useState({})

// state "currImg" use as the index of the current img rendered from the array prictures in the ad.json file
const [currImg, setcurrImg] = useState(0)
// state "dataChecker" use to check if data as been receive correctly if not it will render a the 404 error page
const [dataChecker, setdataChecker] = useState(false)


const params = useParams()


useEffect(() => {
  fetch('/ad.json')
  .then(res => {
    return res.json()
  })
  .then(data => {
      
      setAdData(data.find(elem => elem.id === params.id))
  })
  .catch(error => setdataChecker(true))
  },[params.id, currImg])

let dataLength = Object.keys(adData).length

  
  return dataChecker ? (
    <div className='housing-page'>
      <Header />
      <div className='slider_container'>
        <IoIosArrowForward  className='slide-left' onClick={ () => setcurrImg(currImg === 0? adData.pictures.length - 1 :currImg - 1)}/>
       <img className='housing_cover' src={dataLength > 0? adData.pictures[currImg]: null} alt="img"/>
       <IoIosArrowForward  className='slide-right' onClick={ () => setcurrImg(currImg === adData.pictures.length - 1? 0: currImg + 1)}/>
      </div>
      <Info data={adData}  />

      <div className="descriptions-container">
        <Collapse />
        <Collapse />
      </div>
      
      <Footer />
    </div>
  ) : (
     <Error />
  )
}

export default Housing
