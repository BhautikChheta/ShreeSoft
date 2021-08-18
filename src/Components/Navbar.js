import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {

    const [click, setClick] = useState(false);

    const closeMobileMenu = () =>  setClick(false)

    return (
        <div id='navbar' className='navbar'>
            <nav className="navbar__container bg-gradient-to-r from-white via-green-300 to-blue-400 flex">
                <Link to='/' className="nav-logo flex justify-center items-center ml-10">
                    <img src="./images/ssLogo1.png" alt="ShreeSofts" />
                    <span>SHREE</span>
                    <span>SOFT</span>
                </Link>
                <ul className={click ? 'nav__links active':'nav__links'}>
                    <li className='nav_item justify-center items-center'>
                        <Link to='/' className='nav_link' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to='/about' className='nav_link' onClick={closeMobileMenu}>
                            About
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to='/portfolio' className='nav_link' onClick={closeMobileMenu}>
                            Portfolio
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to='/services' className='nav_link' onClick={closeMobileMenu}>
                            Services
                        </Link>
                    </li>
                    <li className='nav_item'>
                        <Link to='/contact-us' className='nav_link contact_link' onClick={closeMobileMenu}>
                            Contact-Us
                        </Link>
                    </li>
                </ul>
                <div className="hamburger-icon" onClick={() => setClick(!click)}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                </div>
            </nav>
        </div>
    )
}

export default  Navbar