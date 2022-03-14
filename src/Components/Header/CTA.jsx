import React from 'react'
import CV from '../../assets/arif.pdf'

function CTA() {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Download CV </a>
        <a href="#contact" className='btn btn-primray'>Let's Talk</a>
    </div>
  )
}

export default CTA