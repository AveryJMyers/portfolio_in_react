import React, { useState, useEffect } from 'react';

export default function Landing() {
    const words = ['CREATE', 'DESIGN', 'BUILD', 'LEARN', 'DEVELOP', 'INNOVATE', 'THRIVE'];
    const [currentWord, setCurrentWord] = useState(words[0]);

    useEffect(() => {
        let currentIdx = 0; // start with the first word
        const interval = setInterval(() => {
            currentIdx = (currentIdx + 1) % words.length;
            setCurrentWord(words[currentIdx]);
        }, 1500); 

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="flip-card flex h-[80vh] justify-between items-center">
            <div>
                <h1 className="text-6xl font-bold">Avery Myers</h1>
                <p className="text-4xl mt-2">Full Stack Web Developer</p>
                <p className="text-3xl mt-4 font-semibold">Let's {currentWord} together</p>
            </div>
            <div className="headshotContainer flip-card relative w-80 h-64  mr-12">
                <div className="photoBack absolute rounded-sm w-full h-full transform translate-x-4 translate-y-4">
                    About Me
                </div>
                <img src="../photos/headshot.jpg" alt="Avery Myers" className="headshot rounded-sm absolute w-full h-full object-cover"/>
            </div>
        </div>
    );
}


