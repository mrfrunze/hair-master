import React from 'react'

const About = () => {
  return (
    <section className="about" id="about">
      <h2 className="inner-title">About me</h2>
      <div className="container">
        <div className="about-content" data-aos="fade-down" data-aos-duration="800">
          <div className="about-img">
            <figure>
              <img src="img/photo2.jpg" alt=""/>
            </figure>
          </div>
          <div className="about-text">
            <p>Hello, my name is Nataliia!</p>
            <p>
              I have been working with hair since 2019. I am constantly learning new coloring and cutting techniques.
            </p>
            <p>
              Worked in a children's salon in Bulgaria Sofia was also the manager of the salon
            </p>
            <p>
              I love simple and stylish haircuts and colors that look great.
            </p>
            <p>
              I'll be glad to make you better
            </p>
            <ul>
              <li><a href="https://t.me/nataliia_hairmasster" target="_blank"><img src="img/telegram-black.svg" alt=""/></a></li>
              <li><a href="https://www.instagram.com/_frisornatali" target="_blank"><img src="img/instagram-black.svg" alt="instagram" /></a></li>
              <li><a href="https://wa.me/<46767431320>" target="_blank"><img src="img/whatsapp-black.svg" alt="whatsapp" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About