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
            <section className='sm:mx-20 md:mx-40 lg:mx-60'>
                {window.innerWidth <= 700 ? (
                    <MobileNav /> // Display MobileNav on screens with width less than or equal to 700px
                ) : (
                    <LandingNav /> // Display LandingNav on screens with width greater than 700px
                )}
                    <div className="flex flex-col items-center justify-center w-full ">
                        <div className="text-left">
                            <h1 className="text-7xl mb-12 tracking-wider">
                                I AM <span className="text-black  ">AVERY MYERS</span>, 
                                <br></br>
                                A <span className="text-black">FULL STACK</span> DEVELOPER
                            </h1>
                            <h3 className="text-5xl italic tracking-wider">    
                                Let's <span className="text-black strong text-5xl">{currentWord}</span> together!
                            </h3>
                            <div className='mt-16'>
                                <ContactList/>
                            </div>
                        </div>
                    </div>
            </section>
            
        </>
    );
}
