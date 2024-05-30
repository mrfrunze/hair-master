import React from 'react'
import logo from "../assets/logo.svg"
import { GiDirectorChair } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  return (
    <header className="header">
      <div className="header-fixed">
        <div className="header-wrapper container">
          <span className="header-logo">
            <img src={logo} alt="logo"/>
          </span>
          <nav className="menu">
          {["home","gallery","about me","contact",].map((item, idx) => (
            <a key={idx} href={`#${item}`} className='link'>{item}</a>
          ))}
          </nav>
          <div className="burger"></div>
        </div>
      </div>
    </header>
  )
}

export default Header 