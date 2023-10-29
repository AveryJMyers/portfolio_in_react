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
        <div className=" landingSection grid gird-cols-1 custom-height pb-32 lg:grid-cols-2 items-center justify-between ">
            <div>
                <h1 className="text-6xl transform-all hover:scale-110  ease-in-out duration-300 landingName font-bold">Avery Myers</h1>
            {aboutMe ? (
                <p className="text-2xl w-2 mt-4
                "></p>
            ) : (
            <div>
                <p className=" tagLines text-4xl mt-4 transform-all hover:scale-110  ease-in-out duration-300">Full Stack Web Developer</p>
                <p className=" tagLines text-3xl mt-4 font-semibold transform-all hover:scale-110  ease-in-out duration-300">Let's <span className="wordChange transform-all hover:scale-25  ease-in-out duration-300 ">{currentWord}</span> together</p>
            </div>
            )}
            </div>
            <div className="justify-end flex headshotContainer">
                <div className="float-right relative w-80 h-64 mr-12 ">
                    <div className="photoBack absolute rounded-sm w-full h-full transform translate-x-4 translate-y-4"></div>
                    <div className="position relative w-80 h-64">
                        <img src="../photos/headshot.jpg" alt="Avery Myers" className="headshot rounded-sm absolute w-full h-full object-cover" />
                        <div className="button-container ease-in-out duration-300 transition-transform absolute rounded-sm">
                            <StyledButton className="button  dark" onClick={handleAboutMe}>About Me</StyledButton>
                        </div>
                    </div>
                </div>
            </div>
            {modalOpen && (
                <section className="modal active shadow-lg position-relative absolute rounded-sm">
                    <button className="absolute top-4 right-4" onClick={toggleModal}>X</button>
                    <h1 className="  text-6xl mt-4 text-align flex justify-center items-center">About Me</h1>
                    <p className=" mx-12 mt-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo asperiores odio aliquid quia, dolores ut cumque. Minima maiores quisquam sapiente tenetur, ratione voluptates porro amet nisi quasi laboriosam qui quibusdam repellendus illum facere magni ab veniam minus obcaecati sed necessitatibus perferendis cumque debitis? Minima ducimus officia fuga aliquam fugit consectetur, quia modi itaque perferendis, possimus dolorum dignissimos, cum totam explicabo! Error veritatis quidem, sunt inventore id illum voluptatibus, aut animi rerum quibusdam, aperiam doloribus? Ipsam saepe impedit laudantium recusandae.
                    </p>
                </section>
            )}

        </div>
    );
}


