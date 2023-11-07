import { Link } from 'react-router-dom';

import '../styles.css'
import '../App.css'
import React, { useState, useEffect } from 'react';
import LogoAnimation from './LogoAnimation';
import ThemeToggler from './ThemeToggleButton';




export default function LandingNav() {
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
    return (
        <>
        <div className='header text-2xl flex justify-center content-center items-center text-black text-bold bg-transparent  pt-16 p-4'>
            <div className="flex ">
                {navOptions.map((option, index) => (
                    <a key={index} to={option.link} href={option.link || '#'} className=" navLink scaleHover mr-12 last:mr-0">
                        {option.name}
                    </a>
                ))}
            </div>
        </div>
        </>

    );
}

