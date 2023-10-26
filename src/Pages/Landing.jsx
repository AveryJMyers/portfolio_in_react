import React, { useState, useEffect } from 'react';
import StyledButton from '../Components/StyledButton';


export default function Landing() {
    const words = ['CREATE', 'DESIGN', 'BUILD', 'LEARN', 'DEVELOP', 'INNOVATE', 'THRIVE'];
    const [currentWord, setCurrentWord] = useState(words[0]);
   const [modalOpen, setModalOpen] = useState(false);

    const toggleModal = () => {
        setModalOpen(!modalOpen);
    }

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
            <div className="headshotContainer relative w-80 h-64 mr-12">
                <div className="photoBack absolute rounded-sm w-full h-full transform translate-x-4 translate-y-4"></div>
                <div className="position relative w-80 h-64">
                    <img src="../photos/headshot.jpg" alt="Avery Myers" className="headshot rounded-sm absolute w-full h-full object-cover" />
                    <div className="button-container absolute rounded-sm">
                        <StyledButton className="button dark" onClick={toggleModal}>About Me</StyledButton>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <section className="modal active position absolute rounded-sm">
                    <button className="" onClick={toggleModal}>X</button>
                    <h1 className=" text-6xl text-align flex justify-center items-center">About Me</h1>
                </section>
            )}

        </div>
    );
}


