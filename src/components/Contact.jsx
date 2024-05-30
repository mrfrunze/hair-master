import React from 'react'

const Contact = () => {
  return (
    <section className="request" id="contact">
      <div className="container">
        <div className="request-content" data-aos="flip-left" data-aos-duration="9  00">
          <div className="request-text">
              <h3>Contact me.</h3>
              <input type="text" placeholder="Name"/>
              <input type="text" placeholder="Phone"/>
              <input type="text" placeholder="Comment"/>
              <button className="request-btn" type="submit"><a href="#">Submit</a></button>
          </div>
          <div className="request-img">
              <figure>
                  <img src="img/photo3.jpg" alt=""/>
              </figure>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact