import React, { useEffect, useState } from 'react'
import './Housing.css'
import Header from '../../component/header/Header'
import Collapse from '../../component/Collapse/Collapse'
import Gallery from '../../component/gallery/Gallery'
import Info from '../../component/housing_content/Info'
import Footer from '../../component/footer/Footer'
import Error from '../error_page/Error'
import { useParams } from 'react-router-dom'



const Housing = () => {
const [adData, setAdData] = useState({})

// state "dataChecker" use to check if data as been receive correctly if not it will render a the 404 error page
const [dataChecker, setdataChecker] = useState(true)


const params = useParams()


useEffect(() => {
  fetch('/ad.json')
  .then(res => {
    return res.json()
  })
  .then(data => {
      let result = data.find(elem => elem.id === params.id) 
      if(result === undefined) {
        setdataChecker(false)
      } else {
      setAdData(result)
      }
  })
  .catch(error => console.log(error))
  },[params.id])



  console.log(adData.pictures)
  return dataChecker ? (
    <div className='housing-page'>
      <Header />
      <Gallery data={adData}/>
      <Info data={adData}  />

      <div className="collapse-container">
        <div className="single-collapse">
        <Collapse title="Description" content={adData.description} /></div>
        <div className="single-collapse"><Collapse title="Equipements" content={adData.equipments} /></div> </div>
      <Footer />
    </div>
  ) : (
     <Error />
  )
}

export default Housing
