import React from 'react'
import logo from '../assets/logo.svg'
import downArrow from '../assets/icon-arrow-down.svg'
import toDo from '../assets/icon-todo.svg'
import calendar from '../assets/icon-calendar.svg'
import reminder from '../assets/icon-reminders.svg'
import planning from '../assets/icon-planning.svg'


function Navbar() {
    return (
        <div className='flex justify-between'>

            <div className="menu-items flex justify-start">
            <img src={logo} alt="logo" className='p-3' />
                <ul className='menu-container flex ml-3 text-mediumGray'>
                    <ul className='flex ml-20 relative [&_img]:hover:rotate-180 [&_ul]:hover:block p-3 cursor-pointer hover:text-almostBlack'>
                        Features <img className='downArrow self-center ml-2 transition' src={downArrow} />
                        <ul className='sub-menu mt-9 bg-white absolute shadow-2xl p-5 right-0 rounded-lg w-40 text-start text-mediumGray' >
                            <li className='flex py-1'>
                                <img className='mr-3 h-4 rotate-180' src={toDo} />Todo List
                            </li>
                            <li className='flex py-1'>
                            <img className='mr-3 h-4 rotate-180' src={calendar} />Calendar
                            </li>
                            <li className='flex py-1'>
                            <img className='mr-3 h-4 rotate-180' src={reminder} />Reminders
                            </li>
                            <li className='flex py-1'>
                            <img className='mr-3 h-4 rotate-180' src={planning} />Planning
                            </li>
                        </ul>

                    </ul >
                    <ul className='flex ml-8 relative [&_img]:hover:rotate-180 [&_ul]:hover:block p-3 cursor-pointer hover:text-almostBlack'>
                        Company <img className='self-center ml-2 transition' src={downArrow} />
                        <div className='sub-menu mt-9 bg-white absolute shadow-2xl p-5 left-0 rounded-xl text-mediumGray'>
                            <li className='py-1'>History</li>
                            <li className='py-1'>Our Team</li>
                            <li className='py-1'>Blog</li>
                        </div>
                    </ul>
                    <ul className='ml-8 p-3 cursor-pointer hover:text-almostBlack'>
                        Careers
                    </ul>
                    <ul className='ml-8 p-3 cursor-pointer hover:text-almostBlack'>
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

