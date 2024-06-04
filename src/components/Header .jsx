import React, {useState} from 'react'
import logo from "../assets/logo.svg"
import { GiDirectorChair } from "react-icons/gi";
import { CiMenuFries } from "react-icons/ci";

const Header = () => {
  const [isActive, setIsActive] = useState(false)
  
  const handleToggle = () => {
    if(isActive === false) {
      document.body.classList.add("hidden")
    } else if(isActive === true){
      document.body.classList.remove("hidden")
    }
    setIsActive(!isActive)
  }

  const handleClickLink = () => {
    setIsActive(!isActive)
    document.body.classList.remove("hidden")
  }

  return (
    <header className="header" id='home'>
      <div className="header-fixed">
        <div className="header-wrapper container">
          <span className="header-logo">
            <img src={logo} alt="logo"/>
          </span>
          <nav className={isActive ? "menu active" : "menu"}>
          {["home","gallery","about me","contact",].map((item, idx) => (
            <a key={idx} href={`#${item}`} className='link' onClick={handleClickLink}>{item}</a>
          ))}
          </nav>
          <div className="burger" onClick={handleToggle}>
            {isActive ? (
                <GiDirectorChair/>
              ) : (
                <CiMenuFries/>
              )
            }
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header 