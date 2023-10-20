import '../styles.css'
import '../App.css'
import React, { useState, useEffect } from 'react';




export default function Header() {

    const [isDarkMode, setIsDarkMode] = useState(false)

    useEffect(() => {
        const currentTheme = localStorage.getItem('theme');
        if (currentTheme === 'dark') {
            setIsDarkMode(true);
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, []);

      // Toggle dark mode function
      const toggleDarkMode = () => {
        if (isDarkMode) {
            localStorage.setItem('theme', 'light');
            document.documentElement.classList.remove('dark');
        } else {
            localStorage.setItem('theme', 'dark');
            document.documentElement.classList.add('dark');
        }
        setIsDarkMode(!isDarkMode);
    };




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
        <div className=" text-md flex items-start justify-end p-4 ">
            {navOptions.map((option, index) => (
                <a key={index} href={option.link || '#'} className="navLink transform hover:scale-110 hover:text-blue-500 mr-4 last:mr-0">
                    {option.name}
                </a>
            ))}
            <button onClick={toggleDarkMode} className="mr-4">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </button>
        </div>
    );
}