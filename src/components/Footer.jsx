import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer-wrapper container">
            <p>©Nata Hair Master <span className="thisYear"></span>.</p>
            <div className="footer-socials">
                <ul>
                    <li><a href="https://t.me/nataliia_hairmasster" target="_blank"><img src="img/telegram.svg" alt=""/></a></li>
                    <li><a href="https://www.instagram.com/_frisornatali" target="_blank"><img src="img/instagram.svg" alt=""/></a></li>
                    <li><a href="https://wa.me/<46767431320>" target="_blank"><img src="img/whatsapp.svg" alt=""/></a></li>
                </ul>
            </div>
        </div>
    </footer>
  )
}

export default Footer