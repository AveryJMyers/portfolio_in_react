import { Link, useLocation } from 'react-router-dom';

import '../styles.css'
import '../App.css'
import React, { useState, useEffect } from 'react';
import LogoAnimation from './LogoAnimation';
import ThemeToggler from './ThemeToggleButton';




export default function MobileNav() {
    const navOptions = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/About",
        },
        {
            name: "Projects",
            link: "/Projects",
        },
        {
            name: "Resume",
            link: "/Resume",
        },
        
        
        {
            name: "Contact",
            link: "/contact",
        },
    ]

    const location = useLocation();
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => setIsNavVisible(!isNavVisible);

    return (
        <>
        <div className='header text-2xl flex justify-center items-center bg-transparent py-24 px-4 '>
                

                <div className="md:hidden" onClick={toggleNav}>
                    <i className="fas fa-bars">MENU</i>
                </div>

                <div className="hidden md:flex ">
                    {navOptions.map((option, index) => (
                        <Link key={index} to={option.link} className={`navLink scaleHover mr-12 last:mr-0 ${
                            option.link === location.pathname ? 'active' : ''
                        }`}>
                            {option.name}
                        </Link>
                    ))}
                </div>

                {/* Links for mobile, hidden by default */}
                <div className={`absolute top-0 left-0 w-full bg-white p-4 transform ${isNavVisible ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out md:hidden`}>
                    {navOptions.map((option, index) => (
                        <Link key={index} to={option.link} onClick={() => setIsNavVisible(false)} className={`block navLink scaleHover my-2 ${
                            option.link === location.pathname ? 'active' : ''
                        }`}>
                            {option.name}
                        </Link>
                    ))}
                </div>
            </div>
        </>

    );
}

