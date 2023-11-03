import '../styles.css'
import '../App.css'
import React, { useState, useEffect } from 'react';
import LogoAnimation from './LogoAnimation';
import ThemeToggler from './ThemeToggleButton';




export default function Header() {
    const navOptions = [
        {
            name: "Home",
            // link: "/",
        },
        {
            name: "About",
            // link: "/about",
        },
        {
            name: "Projects",
            // link: "/projects",
        },
        {
            name: "Resume",
            // link: "/contact",
        },
        
        
        {
            name: "Contact",
            // link: "/contact",
        },
    ]
    return (
        <>
        <div className='header text-md flex items-center mx-60 p-4'>
            <div className='inline-flex items-center'>
                <a href="https://www.linkedin.com/in/avery-m-108704110/" className="logo">
                    <img src="../photos/linkedIn.png" alt="Avery Myers" className="scaleHover logo h-5 w-5 mr-4" />
                </a>
                <a href="https://github.com/AveryJMyers" className='logo'>
                    <img src="../photos/git.png" alt="Avery Myers" className="scaleHover logo h-5 w-5 mr-4" />
                </a>
                <div className="relative inline-block items-center">
                    <ThemeToggler className="absolute scaleHover left-0"/>
                </div>
            </div>
            <div className="flex ml-auto">
                {navOptions.map((option, index) => (
                    <a key={index} href={option.link || '#'} className=" navLink scaleHover mr-4 last:mr-0">
                        {option.name}
                    </a>
                ))}
            </div>
        </div>
        </>

    );
}

