import './Home.css'
import React from 'react'
import Header from '../../component/header/Header'
import bannerImg from '../../assets/IMG_background.png'
import Location from '../../component/location/Location'
import Footer from '../../component/footer/Footer'
import { useEffect, useState } from 'react'


const Home = () => {
  
  const [locationData, setData] = useState([]);
 


  useEffect(() => {
    fetch('/ad.json')
    .then(res => {
      return res.json()
    })
    .then(data => {
      console.log(data)
      setData(data)
    })
    .catch(error => console.log(error) )
  }, [])



  return (
    <div className='home-page'>
      <Header />
     <section className='banner'>
      <img className='banner-img' src={bannerImg} alt="banner cover"></img>
      <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
    </section>

      <main className='location_container'>
        {
          locationData.map((obj) => <Location locationObj={obj} />)
        }
      </main>
      <Footer />
    </div>
  )
}

export default Home
