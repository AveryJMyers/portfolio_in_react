import '../styles.css'
import '../App.css'
import React, { useState, useEffect } from 'react';
import LogoAnimation from './LogoAnimation';
import ThemeToggler from './ThemeToggleButton';




export default function Header() {
    const navOptions = [
        {
            name: "Home",
            link: "/",
        },
        {
            name: "About",
            link: "/about",
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
    return (
        <>
        <div className='header bg-transparent sticky top-0 z-50 text-md flex items-center mx-60 text-black p-5 '>
            <div className='inline-flex items-center'>
                <Link href="https://www.linkedin.com/in/avery-m-108704110/" className="logo">
                    <img src="../photos/linkedIn.png" alt="Avery Myers" className="scaleHover logo h-5 w-5 mr-4" />
                </Link>
                <Link href="https://github.com/AveryJMyers" className='logo'>
                    <img src="../photos/git.png" alt="Avery Myers" className="scaleHover logo h-5 w-5 mr-4" />
                </Link>
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

