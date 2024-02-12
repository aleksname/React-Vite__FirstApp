import { useState } from 'react'
import logo from '/golova.png'
import classes from './Header.module.css'

console.log(classes);
function Header() {
  const [now, setNow] = useState(new Date())

  setInterval(() => setNow(new Date()),1000)
    return (
    <header>
        <div className="header__block-logo">
            <p className="header__text">My Portfolio!</p>
            <img src={logo} alt="logo" className='header__logo' />
        </div>
          <span>Time: {now.toLocaleTimeString()}</span>
        </header>
    )
  }

export default Header