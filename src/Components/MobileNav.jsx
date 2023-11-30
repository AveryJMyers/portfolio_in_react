import { Link, useLocation } from 'react-router-dom';

import '../styles.css'
import '../App.css'
import React, { useState, useEffect } from 'react';
import LogoAnimation from './LogoAnimation';
import ThemeToggler from './ThemeToggleButton';
import StyledButton from './StyledButton';



export default function MobileNav() {
    const navOptions = [
        {
            name: "HOME",
            link: "/",
        },
        {
            name: "ABOUT",
            link: "/About",
        },
        {
            name: "PROJECTS",
            link: "/Projects",
        },
        {
            name: "RESUME",
            link: "/Resume",
        },
        {
            name: "CONTACT",
            link: "/contact",
        },
    ]

    const location = useLocation();
    const [isNavVisible, setIsNavVisible] = useState(false);
    const toggleNav = () => setIsNavVisible(!isNavVisible);

    return (
        <>
            {!isNavVisible && (
                <div className='items-center text-center py-10'>
                    <StyledButton onClick={toggleNav}>
                        |||
                    </StyledButton>
                </div>
            )}
            {isNavVisible && (
                <div className="fixed top-0 left-0 w-full h-full bg-white z-50 overflow-y-scroll">
                    <button className='ml-4 mt-4' onClick={toggleNav}>x</button>
                    {navOptions.map((option, index) => (
                        <Link key={index} to={option.link} className={`  ${option.link === location.pathname ? 'active' : ''}`}>
                            <div className='items-center py-2 text-xl text-bold text-center'>{option.name}</div>
                        </Link>
                    ))}
                </div>
            )}
        </>
    );
}

