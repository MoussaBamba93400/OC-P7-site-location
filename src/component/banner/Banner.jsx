import React from 'react'
import './Banner.css'
import bannerImg from '../../assets/IMG_background.png'

const Banner = () => {
  return (
    <section className='banner'>
      <img className='banner-img' src={bannerImg} alt="banner cover"></img>
      <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
    </section>
  )
}

export default Banner
