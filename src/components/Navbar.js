import React, { useState } from 'react';
import Resume from "../assets/Marvelous aliyu's CV.pdf"

export default function Navbar(){
    const [isOpen, setIsOpen] = useState(false);
    return (
        <nav className="dark:text-[#e7e7e7] flex items-center w-[100%] justify-evenly flex-wrap gap-[50px] lg:gap-[150px] lg:flex-nowrap p-6">
            <div className="font-[700] text-[30px] text-blue-600 dark:text-yellow-500">
            <a href='https://marvelousaliyu.netlify.app/'>Marvelous Aliyu</a>
            </div>
            <div className="block lg:hidden">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex items-center px-3 py-2 rounded"
                >
                    <svg
                    className={`fill-current h-5 w-5 ${isOpen ? "hidden" : "block"}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                    </svg>
                    <svg
                    className={`fill-current h-5 w-5 ${isOpen ? "block" : "hidden"}`}
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                    >
                    <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
                    </svg>
                </button>
            </div>
            <div className={`w-full block lg:flex lg:items-center lg:w-auto ${isOpen ? "block" : "hidden"}`}>
                <div className="text-[20px] lg:flex-grow pl-4">
                    <a href="#home" className="block mt-4 lg:inline-block lg:mt-0 mr-16">
                    Home
                    </a>
                    <a href="#about" className="block mt-4 lg:inline-block lg:mt-0 mr-16">
                    About
                    </a>
                    <a href="#projects" className="block mt-4 lg:inline-block lg:mt-0  mr-16">
                    Projects
                    </a>
                    <a href="#contact" className="block mt-4 lg:inline-block lg:mt-0 mr-16">
                    Contact
                    </a>
                    <a href={Resume} download className='block mt-4 lg:inline-block lg:mt-0'>Download Resume</a>
                </div>
            </div>
        </nav>
 );
}