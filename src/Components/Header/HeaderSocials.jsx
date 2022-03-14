import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
function HeaderSocials() {
  return (
    <div className='header_socials'>
        <a href="https://www.linkedin.com/in/arif-kk-0b3456214/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/arifkk0313" target='_blank'><BsGithub /></a>
        <a href="https://www.instagram.com/ar_if_k__/" target='_blank'><BsInstagram /></a>
    </div>
  )
}

export default HeaderSocials