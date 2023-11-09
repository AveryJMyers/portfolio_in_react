import '../styles.css'
import '../App.css'
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import StyledButton from '../Components/StyledButton';
import LandingNav from '../Components/LandingNav';
import ContactList from '../Components/ContactList';
import MobileNav from '../Components/MobileNav';

export default function SingleLanding() {
    const words = ['CREATE', 'DESIGN', 'BUILD', 'LEARN',];
    const [currentWord, setCurrentWord] = useState(words[0]);
    const [modalOpen, setModalOpen] = useState(false);
    const [aboutMe, setAboutMe] = useState(false);



    const handleAboutMe = () => {
        setAboutMe(!aboutMe);
    }


    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

    useEffect(() => {
        let currentIdx = 0; // start with the first word
        const interval = setInterval(() => {
            currentIdx = (currentIdx + 1) % words.length;
            setCurrentWord(words[currentIdx]);
        }, 1700); 

        return () => clearInterval(interval);
    }, []);

    //  landingSection flex custom-height  pb-32 justify-between items-center
    return (
    <section className='landingSection landingSection h-screen w-screen h-full '>
        {window.innerWidth <= 700 ? (
          <MobileNav /> // Display MobileNav on screens with width less than or equal to 1024px
        ) : (
          <LandingNav /> // Display LandingNav on screens with width greater than 1024px
        )}

        <div className="lg:mx-60 md:mx-40 sm:mx-10 grid grid-cols-1 grid-cols-1 md:grid-cols-1 lg:grid-cols-2  p-4 items-center justify-center   text-center pt-32 lg:pt-32 flex flex-col  ">
            <div>
                <h1 className=" textShadow textShadowOnly text-5xl lg:text-5xl text-black scaleHover landingName font-bold">Avery Myers</h1>
                <p className=" textShadow tagLines text-3xl lg:text-3xl mt-4 scaleHover">Full Stack Web Developer</p>
                <p className=" textShadow tagLines text-3xl lg:text-2xl mt-4 font-semibold scaleHover">Let's <span className="wordChange text-black ">{currentWord}</span> together</p>
                <ContactList></ContactList>
            </div>
            <div className="  sm:justify-center  flex">
                <div className="  shadow w-50 lg:w-80 lg:h-64 mt-10 ">
                    <img src="../photos/headshot.jpg" alt="Avery Myers" className="headshot  w-full h-full object-cover" />
                </div>
            </div>
        </div>
        {/* <LandingNav></LandingNav> */}
    </section>
    );
}
