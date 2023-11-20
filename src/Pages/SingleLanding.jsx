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
    <>
        <section className=''>
            {window.innerWidth <= 700 ? (
            <MobileNav /> // Display MobileNav on screens with width less than or equal to 1024px
            ) : (
            <LandingNav /> // Display LandingNav on screens with width greater than 1024px
            )}
            <section className='w-screen flex flex-col lg:flex-row lg:px-60 justify-center items-center '>
                <div className="w-full text-center">
                    <h1 className="textShadow textShadowOnly text-3xl lg:text-5xl text-black scaleHover landingName font-bold">Avery Myers</h1>
                    <p className="textShadow tagLines text-2xl lg:text-3xl mt-4 font-semibold scaleHover">Full Stack Web Developer</p>
                    <p className="textShadow tagLines text-2xl lg:text-2xl mt-4 font-semibold scaleHover">Let's <span className="wordChange text-black">{currentWord}</span> together</p>
                    <ContactList />
                </div>
                <div className='w-full flex justify-center  mt-5'>
                    <img src='../photos/headshot.jpg' className='w-4/5 shadow' alt='Headshot'/>
                </div>
            </section>
        </section>
    </>
    );
}





// export default function SingleLanding() {
//     const words = ['CREATE', 'DESIGN', 'BUILD', 'LEARN',];
//     const [currentWord, setCurrentWord] = useState(words[0]);
//     const [modalOpen, setModalOpen] = useState(false);
//     const [aboutMe, setAboutMe] = useState(false);



//     const handleAboutMe = () => {
//         setAboutMe(!aboutMe);
//     }


//     const toggleModal = () => {
//         setModalOpen(!modalOpen);
//     }

//     useEffect(() => {
//         let currentIdx = 0; // start with the first word
//         const interval = setInterval(() => {
//             currentIdx = (currentIdx + 1) % words.length;
//             setCurrentWord(words[currentIdx]);
//         }, 1700); 

//         return () => clearInterval(interval);
//     }, []);

//     //  landingSection flex custom-height  pb-32 justify-between items-center
//     return (
//     <section className=' h-screen w-screen items-center justify-center align-center '>

//         {/* {window.innerWidth <= 700 ? (
//           <MobileNav /> // Display MobileNav on screens with width less than or equal to 1024px
//         ) : (
//           <LandingNav /> // Display LandingNav on screens with width greater than 1024px
//         )} */}

//         <div className="grid grid lg:grid-cols-2 text-center items-center justify-center align-center flex">
//             <div className="  w-4/5 sm:4/4  ">
//                 <h1 className=" textShadow textShadowOnly text-5xl lg:text-5xl text-black scaleHover landingName font-bold">Avery Myers</h1>
//                 <p className=" textShadow tagLines text-3xl lg:text-3xl mt-4 scaleHover">Full Stack Web Developer</p>
//                 <p className=" textShadow tagLines text-3xl lg:text-2xl mt-4 font-semibold scaleHover">Let's <span className="wordChange text-black ">{currentWord}</span> together</p>
//                 <ContactList></ContactList>
//             </div>
//             <div className="  items-center justify-center align-center  flex ">
//                 <div className=" ">
//                     <img src="../photos/headshot.jpg" alt="Avery Myers" className="" />
//                 </div>
//             </div>
//         </div>
//         {/* <LandingNav></LandingNav> */}
//     </section>
//     );
// }
