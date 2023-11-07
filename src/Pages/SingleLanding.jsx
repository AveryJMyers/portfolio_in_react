import '../styles.css'
import '../App.css'
import React, { useState, useEffect } from 'react';
import Header from '../Components/Header';
import StyledButton from '../Components/StyledButton';
import LandingNav from '../Components/LandingNav';

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
    <section className='landingSection landingSection  h-full'>
        <LandingNav></LandingNav>
        <div className=" mx-60 grid grid-cols-1 md:grid-cols-2 gap-32   p-4 items-center justify-center  text-center pt-32 flex flex-col  ">
            {aboutMe ? (
            <div>
                    <h1 className=" textShadow text-6xl scaleHover landingName font-bold border-b-4 border-black mb-4">About</h1>
                    <p className="text-3xl textShadow ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium qui enim magni explicabo, consequuntur corporis asperiores, ratione quisquam ipsam iure consectetur eum neque?lorem23
                    </p>
                </div>
            ) : (
            <div>
                <h1 className=" textShadow textShadowOnly text-5xl scaleHover landingName font-bold">Avery Myers</h1>
                <p className=" textShadow tagLines text-3xl mt-4 scaleHover">Full Stack Web Developer</p>
                <p className=" textShadow tagLines text-2xl mt-4 font-semibold scaleHover">Let's <span className="wordChange ">{currentWord}</span> together</p>
            </div>
            )}
            <div className="justify-end sm:justify-center ">
                
                <div className=" boxShadowOnly  relative w-80 h-64 mr-12 ">
                    <div className="photoBack boxShadowOnly absolute w-full h-full rounded transform translate-x-4 translate-y-4"></div>
                    <div className=" hoverShadow  position scaleHover relative w-80 h-64">
                        <img src="../photos/headshot.jpg" alt="Avery Myers" className="headshot absolute w-full h-full object-cover" />
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}
