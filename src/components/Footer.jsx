import { FaTelegramPlane, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  const year = new Date();
  return (
    <footer className="footer">
        <div className="footer-wrapper container">
            <p>© Natalia Hair Master <span className="thisYear">{year.getFullYear()}</span></p>
              <div className="social footer-socials">
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
    </footer>
  )
}

export default Footer