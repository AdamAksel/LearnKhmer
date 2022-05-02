import React from 'react'
import { NavMain, NavGreeting, NavImg, NavImg1 } from './Navbar.elements'
import Logo from '../images/Logo.png'
import Angkor from '../images/angkor2.png'

const Navbar = () => {
  return (
    <NavMain>
      <NavImg1 src={Logo} />
      <NavGreeting>
        Hello, Let's Learn <NavImg src={Angkor} />
      </NavGreeting>
    </NavMain>
  )
}

export default Navbar
