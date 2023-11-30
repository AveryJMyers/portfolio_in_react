import LandingNav from '../Components/LandingNav';
import MobileNav from '../Components/MobileNav';
import { useState, useEffect } from 'react';
import ContactList from '../Components/ContactList';

export default function LandingRestyle() {
    const words = ['CREATE', 'DESIGN', 'BUILD', 'LEARN',];
    const [currentWord, setCurrentWord] = useState(words[0]);
    useEffect(() => {
        let currentIdx = 0; // start with the first word
        const interval = setInterval(() => {
            currentIdx = (currentIdx + 1) % words.length;
            setCurrentWord(words[currentIdx]);
        }, 1800); 

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <section className=' md:mx-40 lg:mx-60 w-vw'>
                {window.innerWidth <= 700 ? (
                    <MobileNav />
                ) : (
                    <LandingNav /> 
                )}
                    <div className="flex flex-col mx-5 items-center justify-center">
                        <div className="text-left items-center justify-center align-center">
                            <h1 className="lg:text-6xl text-3xl mb-12 tracking-wider ">
                                I am <span className="text-black lg:text-7xl  ">AVERY MYERS</span>, 
                                <br></br>
                                a <span className="text-black lg:text-7xl">FULL STACK</span> developer
                            </h1>
                            <h3 className="lg:text-4xl text-4xl italic lg:tracking-wider">    
                                Let's <span className="text-black strong lg:text-5xl">{currentWord}</span> together!
                            </h3>
                            <div className='mt-12 mr-10 '>
                                <ContactList/>
                            </div>
                        </div>
                    </div>
            </section>
            
        </>
    );
}
