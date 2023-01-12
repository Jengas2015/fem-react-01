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
                    <ul className='flex ml-20 relative [&_img]:hover:rotate-180 [&_ul]:hover:block p-3 cursor-pointer transition ease-in-out duration-300 hover:text-almostBlack'>
                        Features <img className='relative bottom-2 self-center ml-2 transition' src={downArrow} />
                        <ul className='sub-menu mt-9 bg-white absolute shadow-2xl p-5 right-0 rounded-lg w-40 text-start text-mediumGray hidden' >
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
                    <ul className='flex ml-8 relative [&_img]:hover:rotate-180 [&_ul]:hover:block p-3 cursor-pointer transition ease-in-out duration-300 hover:text-almostBlack'>
                        Company <img className='relative bottom-2 self-center ml-2 transition duration-300' src={downArrow} />
                        <ul className='sub-menu mt-9 bg-white absolute shadow-2xl p-5 left-0 w-36 rounded-xl text-mediumGray hidden'>
                            <li className='py-1'>History</li>
                            <li className='py-1'>Our Team</li>
                            <li className='py-1'>Blog</li>
                        </ul>
                    </ul>
                    <ul className='ml-8 p-3 cursor-pointer transition ease-in-out duration-300 hover:text-almostBlack'>
                        Careers
                    </ul>
                    <ul className='ml-8 p-3 cursor-pointer transition ease-in-out duration-300 hover:text-almostBlack'>
                        About
                    </ul>
                </ul>
            </div>
            <div className="cta-buttons p-3 mr-5 text-mediumGray">
                <button className='mr-10 transition ease-in-out duration-300 hover:text-almostBlack'>Login</button>
                <button className='border-2 border-mediumGray py-1.5 px-4 rounded-lg transition ease-in-out duration-300 hover:text-almostBlack hover:border-almostBlack'>Register</button>
            </div>
        </div>
    )
}

export default Navbar

