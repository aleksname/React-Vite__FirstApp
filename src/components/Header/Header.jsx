import { useState } from 'react'
import logo from '/golova.png'
import  './Header.css'
import {styled } from 'styled-components'

const HeaderComponent = styled.header`
   display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px 5px 10px 5px;
    border-bottom: 2px solid #0000007d; 
`

function Header() {
  const [now, setNow] = useState(new Date())

  setInterval(() => setNow(new Date()),1000)
    return (
    <HeaderComponent>
        <div className="header__block-logo">
            <p className="header__text">My Portfolio!</p>
            <img src={logo} alt="logo" className='header__logo' />
        </div>
          <span>Time: {now.toLocaleTimeString()}</span>
        </HeaderComponent>
    )
  }

export default Header