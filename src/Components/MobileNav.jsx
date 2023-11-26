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
            {!isNavVisible && (
                <div className='items-center text-center py-10'>
                    <StyledButton onClick={toggleNav}>
                        Menu
                    </StyledButton>
                </div>
            )}
            {isNavVisible && (
                <div className="flex flex-col h-screen py-10 ">
                    <button className='mb-16  ' onClick={toggleNav}>x</button>
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

