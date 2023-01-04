import React from 'react'
import logo from '../assets/logo.svg'
function Navbar() {
    return (
        <div className='flex justify-between p-5'>

            <div className="menu-items flex justify-start">
            <img src={logo} alt="logo" className='max-h-7' />
                <ul className='flex ml-3'>
                    <ul className='ml-3'>
                        Features
                        <div className='sub-menu'>
                            <li>
                                Todo List
                            </li>
                            <li>
                                Todo List
                            </li>
                            <li>
                                Todo List
                            </li>
                            <li>
                                Todo List
                            </li>
                        </div>

                    </ul >
                    <ul className='ml-3'>
                        Company
                        <div className='sub-menu'>
                            <li>History</li>
                            <li>Our Team</li>
                            <li>Blog</li>
                        </div>
                    </ul>
                    <ul className='ml-3'>
                        Careers
                    </ul>
                    <ul className='ml-3'>
                        About
                    </ul>
                </ul>
            </div>
            <div className="cta-buttons">
                <button>Login</button>
                <button>Register</button>
            </div>
        </div>
    )
}

export default Navbar

