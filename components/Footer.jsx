import React from 'react'
import {AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai';
import {FaTiktok } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className='footer-container'>
      <p> 2023 Rays Way All Rights Reserved</p>
      <p className='icons'>
        <AiOutlineInstagram />
        <AiOutlineTwitter />
        <FaTiktok />
      </p>
    </div>
  )
}

export default Footer