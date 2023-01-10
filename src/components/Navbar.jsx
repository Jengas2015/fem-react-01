import React from 'react'
import logo from '../assets/logo.svg'
function Navbar() {
    return (
        <div className='flex justify-between p-5'>

            <div className="menu-items flex justify-start">
            <img src={logo} alt="logo" className='max-h-7' />
                <ul className='menu-container flex ml-3 text-mediumGray'>
                    <ul className='ml-20 relative items-start'>
                        Features
                        <ul className='sub-menu mt-3 bg-white absolute shadow-lg p-5 right-0' >
                            <li>
                                Todo List
                            </li>
                            <li>
                                Calendar
                            </li>
                            <li>
                                Reminders
                            </li>
                            <li>
                                Planning
                            </li>
                        </ul>

                    </ul >
                    <ul className='ml-12 relative'>
                        Company
                        <div className='sub-menu mt-3 bg-white absolute shadow-lg'>
                            <li>History</li>
                            <li>Our Team</li>
                            <li>Blog</li>
                        </div>
                    </ul>
                    <ul className='ml-8'>
                        Careers
                    </ul>
                    <ul className='ml-8'>
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

