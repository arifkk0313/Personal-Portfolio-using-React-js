import React from 'react'
import './Contact.css'
import {FiMail} from 'react-icons/fi'
import {AiOutlineInstagram} from 'react-icons/ai'
import {ImWhatsapp} from 'react-icons/im'
function Contact() {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <FiMail className='contact_icon_option'/>
            <h4>Email</h4>
            <h5>arifkk0313@gmail.com</h5>
            <a href="mailto:arifkk0313@gmail.com" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <AiOutlineInstagram className='contact_icon_option' />
            <h4>Instagram</h4>
            <h5>ar_if_k__</h5>
            <a href="https://www.instagram.com/ar_if_k__/" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <ImWhatsapp className='contact_icon_option'/>
            <h4>Whatsapp</h4>
            <h5>+91 9539193005</h5>
            <a href="https://wa.me/919539193005" target='_blank'>Send a message</a>
          </article>
        </div>

        
        <form action="">
          <input type="text" name='name' placeholder='your full name' required />
          <input type="email" name='email' placeholder='Your email' required />
          <textarea name="message" id=""  rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact