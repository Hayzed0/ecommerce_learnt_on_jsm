import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';


const Footer = () => {
  return (
    <div className='footer-container'>
      <p>2022 AZ GADGETS ALL RIGHTS RESERVED</p>
      <p className='icons'>
        <AiFillInstagram />
        <AiOutlineTwitter />

      </p>
    </div>
  )
}

export default Footer