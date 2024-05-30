import React from 'react'
import {hair1} from "../assets/"

const Hero = () => {
  return (
    <section className="hero" id="main">
            <div className="container">
                <div className="hero-content">
                    <div className="hero-text">
                        <h1>Nataliia Tsarenko</h1>
                        <p>I create magic with hair. I create images that have won the hearts of all my clients!</p>
                        <button className="hero-btn">
                            <a href="" target="_blank">Check in</a>
                        </button>
                    </div>
                    <div className="hero-img">
                        <figure>
                            <img src={hair1} alt="hair Nata"/>
                        </figure>
                    </div>
                </div>
            </div>
        </section>
  )
}

export default Hero