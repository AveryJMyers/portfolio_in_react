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
        <div className='header text-md flex items-center p-4'>
            <div className='inline-flex items-center'>
                <img src="../photos/linkedIn.png" alt="Avery Myers" className="logo h-5 w-5 mr-4" />
                <img src="../photos/git.png" alt="Avery Myers" className="logo h-5 w-5 mr-4" />
                <div className="relative inline-block items-center">
                    <ThemeToggler className="absolute left-0"/>
                </div>
            </div>
            <div className="flex ml-auto">
                {navOptions.map((option, index) => (
                    <a key={index} href={option.link || '#'} className="navLink transform hover:scale-110 hover:text-blue-500 mr-4 last:mr-0">
                        {option.name}
                    </a>
                ))}
            </div>
        </div>
        </>

    );
}

