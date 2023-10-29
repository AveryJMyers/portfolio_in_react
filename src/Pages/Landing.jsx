import React, { useState, useEffect } from 'react';
import StyledButton from '../Components/StyledButton';


export default function Landing() {
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
        
        <div className=  "landingSection grid gird-cols-1 custom-height pb-32 lg:grid-cols-2 items-center justify-between ">
            {aboutMe ? (
            <div>
                    <h1 className=" textShadow text-6xl scaleHover landingName font-bold border-b-4 border-black mb-4">About</h1>
                    <p className="text-3xl textShadow ">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium qui enim magni explicabo, consequuntur corporis asperiores, ratione quisquam ipsam iure consectetur eum neque?lorem23
                    </p>
                </div>
            ) : (
<           div>
                <h1 className=" textShadow text-6xl scaleHover landingName font-bold">Avery Myers</h1>
                <p className=" textShadow tagLines text-4xl mt-4 scaleHover">Full Stack Web Developer</p>
                <p className=" textShadow tagLines text-3xl mt-4 font-semibold scaleHover">Let's <span className="wordChange ">{currentWord}</span> together</p>
            </div>
            )}
            <div className="justify-end">
                <div className=" boxShadow float-right relative w-80 h-64 mr-12 ">
                    <div className="photoBack boxShadow absolute rounded-sm w-full h-full transform translate-x-4 translate-y-4"></div>
                    <div className=" position scaleHover boxShadow relative w-80 h-64">
                        <img src="../photos/headshot.jpg" alt="Avery Myers" className="  headshot rounded-sm absolute w-full h-full object-cover" />
                        <div className=" boxShadow button-container ease-in-out duration-300  transition-transform absolute rounded-sm">
                            <StyledButton className="button  dark" onClick={handleAboutMe}>About Me</StyledButton>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}


