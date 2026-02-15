import React from 'react'
import logo from '../../public/logo.png'

const Logo = () => {
    return (
        <a href="#top" className='flex items-center'>
            <img className='w-10 h-10' src={logo} alt="logo" />
            <p className='md:text-3xl max-w-3xl text-2xl font-medium text-center pl-2'>ThumbBot</p>
        </a>
    )
}

export default Logo