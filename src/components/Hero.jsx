import React from 'react'
import logo from '../assets/images/logo.svg'
import main from '../assets/images/main.svg'

const Hero = () => {
    return (
        <div>
            <img src={logo} className='logo' alt="" />
            <img className='img' src={main} alt="" />
            <button className='btn'>Register/Login</button>
        </div>
    )
}

export default Hero
