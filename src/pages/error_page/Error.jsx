import React from 'react'
import Header from '../../component/header/Header'
import Footer from '../../component/footer/Footer'
import {Link} from 'react-router-dom'
import './Error.css'

const Error = () => {
  return (
    <div className='error-page'>
        <Header />
       <p className="error-number">404</p>
       <p className='error-quote'>Oups! La page que vous demandez n'existe pas.</p>
       <Link className='home-link' to='/'>Retourner sur la page d'accueil</Link>

       <div  className="error-footer"><Footer /></div>
    </div>
  )
}

export default Error
