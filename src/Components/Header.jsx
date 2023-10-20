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
            <ThemeToggler/>
            <div className="text-md flex items-start justify-end p-4">
                {navOptions.map((option, index) => (
                    <a key={index} href={option.link || '#'} className=" navLink transform hover:scale-110 hover:text-blue-500 mr-4 last:mr-0">
                        {option.name}
                    </a>
                ))}
            </div>
        </>
    );
}