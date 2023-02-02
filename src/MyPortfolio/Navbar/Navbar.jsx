import React from 'react'
import './Nav.css'

const Navbar = () => {
function showNavLinks(){
  document.querySelector('.navlinks').classList.toggle('active')
}
  return (
    <>
    <nav className='navbar'>
      <ul className="navlinks" id='navlinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#">Contact Us</a></li>
        <li><a href="#">Projects</a></li>
      </ul>
      <div className="menu-icon">
<span id='menu-icon' onClick={showNavLinks}><ion-icon name="menu-sharp"></ion-icon> </span>
      </div>
    </nav>
    </>
  )
}

export default Navbar
