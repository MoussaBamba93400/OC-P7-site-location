import React from 'react'
import './Collapse.css'
import {IoIosArrowForward} from 'react-icons/io'
import { useState } from 'react'

const Collapse = ({title, content}) => {
  const [ Toggle, setToggle] = useState('collapse-text-close')
  const [Icon, setIcon] = useState('inactive')


  // function use for toggling between the collapse being close or open 
  function toggle() {
    setToggle( Toggle === 'collapse-text-close'? "": 'collapse-text-close')
    setIcon(Icon === 'inactive'? "active": 'inactive')
  }

  function test(arr) {
    return arr?.map((elem, index) => <li className='equipments' key={index}>{elem}</li>)
  }

  return (
    <div className='collapse'>
      <div className='collapse-title'>{title} <span onClick={() => toggle() }  className={Icon}><IoIosArrowForward /></span></div>
      <div className={"collapse-text " + Toggle } >{Array.isArray(content)? test(content): content}</div>
    </div>
  )
}

export default Collapse
