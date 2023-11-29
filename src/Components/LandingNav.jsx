import React, { useState, useEffect } from 'react';

import { Link, useLocation } from 'react-router-dom';


import '../styles.css'
import '../App.css'
import LogoAnimation from './LogoAnimation';
import ThemeToggler from './ThemeToggleButton';




export default function LandingNav() {


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

    return (
        <>
        <div className='header text-2xl flex justify-center content-center items-center  text-bold bg-transparent pb-24 py-12'>
            <div className="flex ">
                {navOptions.map((option, index) => (
                    <Link key={index} to={option.link} href={option.link || '#'} className={`navLink scaleHover mr-12 last:mr-0 ${
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

