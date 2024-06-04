import {hair2} from "../assets/"
import { FaTelegramPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";


const About = () => {
  return (
    <section className="about" id="about me">
      <h2 className="inner-title">About me</h2>
      <div className="container">
        <div className="about-content">
          <div className="about-img">
            <figure>
              <img src={hair2} alt=""/>
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
            <div className="social">
              <a href="https://t.me/nataliia_hairmasster" target="_blank">
                <FaTelegramPlane  />
              </a>
                <a href="https://www.instagram.com/_frisornatali" target="_blank">
                  <FaInstagram />
                </a>
                <a href="https://wa.me/<46767431320>" target="_blank">
                  <FaWhatsapp />
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About