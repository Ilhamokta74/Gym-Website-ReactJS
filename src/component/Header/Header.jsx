import React from 'react'
import Logo from '../../assets/logo.png'
import './Header.css'

const header = () => {
    return (
        <div className="header">

            <img src={Logo} alt="" className='logo' />

            <ul className='header-menu'>
                <li>Home</li>
                <li>Programs</li>
                <li>Why Us</li>
                <li>Plans</li>
                <li>Testimonials</li>
            </ul>
        </div>
    )
}

export default header;