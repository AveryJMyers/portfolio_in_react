import '../styles.css'
import '../App.css'
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import StyledButton from '../Components/StyledButton';
import LandingNav from '../Components/LandingNav';
import ContactList from '../Components/ContactList';

export default function SingleLanding() {
    const words = ['CREATE', 'DESIGN', 'BUILD', 'LEARN', 'DEVELOP', 'INNOVATE', 'THRIVE'];
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
    <section className='landingSection landingSection h-screen w-screen h-full'>
        <LandingNav></LandingNav>
        <div className=" mx-60 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-32    p-4 items-center justify-center  text-center pt-32 flex flex-col  ">
            <div>
                <h1 className=" textShadow textShadowOnly text-5xl scaleHover landingName font-bold">Avery Myers</h1>
                <p className=" textShadow tagLines text-3xl mt-4 scaleHover">Full Stack Web Developer</p>
                <p className=" textShadow tagLines text-2xl mt-4 font-semibold scaleHover">Let's <span className="wordChange ">{currentWord}</span> together</p>
                <ContactList></ContactList>
            </div>
            <div className="  sm:justify-center flex">
                <div className="  shadow w-80 h-64 ">
                <img src="../photos/headshot.jpg" alt="Avery Myers" className="headshot  w-full h-full object-cover" />
                </div>
            </div>
        </div>
    </section>
    );
}
