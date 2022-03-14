import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
function Footer() {
  return (
    <footer>
      <a href="#" className='footer_logo'>ARIF</a>
      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experienc">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#project">Project</a></li>
        <li><a href="#contact">Contact</a></li>
         
      </ul>

      <div className="footer_socials">
      <a href="https://www.linkedin.com/in/arif-kk-0b3456214/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/arifkk0313" target='_blank'><BsGithub /></a>
        <a href="https://www.instagram.com/ar_if_k__/" target='_blank'><BsInstagram /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; ARIF  .All right reserved .</small>
      </div>
    </footer>
  )
}

export default Footer