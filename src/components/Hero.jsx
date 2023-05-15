import React from 'react'
import heroImg from '../assets/hero.svg'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-center">
        <div className="hero-title">
          <h1>Contentful CMS</h1>
          <p>
            I'm baby bodega boys 90's beard schlitz flannel neutra. Whatever VHS
            activated charcoal, hot chicken church-key stumptown DIY tilde swag
            meditation migas. Tacos hot chicken direct trade, poke mumblecore
            pork belly drinking vinegar four loko fanny pack hella snackwave
            green juice 8-bit.
          </p>
        </div>
        <div className="img-container">
          <img src={heroImg} alt="woman and the browser" className="img"></img>
        </div>
      </div>
    </section>
  )
}

export default Hero
