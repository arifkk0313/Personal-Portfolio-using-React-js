import React from 'react'
import './project.css'
import IMG1 from '../../assets/shopping.png'
import IMG2 from '../../assets/olx.png'
import IMG3 from '../../assets/netflix.png'
import IMG4 from '../../assets/movie.png'
import IMG5 from '../../assets/chat.png'
import IMG6 from '../../assets/coffee.png'
function Project() {
  return (
    <section id='project'>
    <h5>My Recent Works</h5>
    <h2>Project</h2>
    <div className="container portfolio__container">
      <article className="portflio__item">
        <div className="portfolio__item-image">
          <img src={IMG1} alt="" />
          <h3>SHOPPING CART USING NODE JS</h3>
          <div className="portflio__item-cta">

          <a href="https://github.com/arifkk0313/Shopping-cart-using-NodeJS" className='btn'>Github</a>          
          </div>
        </div>
      </article>
      <article className="portflio__item">
        <div className="portfolio__item-image">
          <img src={IMG2} alt="" />
          <h3>OLX CLONE USING RECT</h3>
          <div className="portflio__item-cta">

          <a href="https://github.com/arifkk0313/OLX-clone-using-React-JS" className='btn'>Github</a>
          </div>
          
        </div>
      </article>
      <article className="portflio__item">
        <div className="portfolio__item-image">
          <img src={IMG3} alt="" />
          <h3>NETFLIX CLONE USING REACT</h3>
          <div className="portflio__item-cta">

          <a href="https://github.com/arifkk0313/Netflix-clone-React" className='btn'>Github</a>
          </div>
          
        </div>
      </article>
      <article className="portflio__item">
        <div className="portfolio__item-image">
          <img src={IMG4} alt="" />
          <h3>MOVIE DATABASE USING REACT</h3>
          <div className="portflio__item-cta">

          <a href="https://github.com/arifkk0313/Movie-Database-Using-React" className='btn'>Github</a>          
          </div>
        </div>
      </article>
      <article className="portflio__item">
        <div className="portfolio__item-image">
          <img src={IMG5} alt="" />
          <h3>REAL TIME CHATTING APP USING NODE & REACT</h3>
          <div className="portflio__item-cta">

          <a href="https://github.com/arifkk0313/Real-Time-Chat-App-using-React-and-NodeJs" className='btn'>GitHub</a>
          </div>
          
        </div>
      </article>
      <article className="portflio__item">
        <div className="portfolio__item-image">
          <img src={IMG6} alt="" />
          <h3>STATIC COFFEE WEBPAGE </h3>
          <div className="portflio__item-cta">

          <a href="https://github.com/arifkk0313/Static-Coffee-Website" className='btn'>Github</a>
          <a href="https://arifkk0313.github.io/Static-Coffee-Website/" className='btn btn-primary'> Live demo</a>
          </div>
        </div>
      </article>
    </div>
    </section>
  )
}

export default Project