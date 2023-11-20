import React, { useState, useEffect } from 'react';
import StyledButton from '../Components/StyledButton';
import LandingNav from '../Components/LandingNav';
import ContactList from '../Components/ContactList';
import MobileNav from '../Components/MobileNav';

import aboutMePic from '../Photos/aboutMePic.jpg';

export default function About() {
    return (
    <>
    {/* <LandingNav></LandingNav> */}
    {window.innerWidth <= 700 ? (
            <MobileNav /> // Display MobileNav on screens with width less than or equal to 1024px
            ) : (
            <LandingNav /> // Display LandingNav on screens with width greater than 1024px
            )}
    <section className='p-4 lg:mx-60 h-full flex flex-col-reverse lg:flex-row sm:flex-cols sm:items-center '>
    <div className='lg:w-3/5 sm:w-full shadow h-[50%]'>
        <p className='lg:mr-10 my-1 rounded lg:p-4 ml-4 sm:ml-4'>
            I am a 24-year-old professional in the midst of a transformative career journey. With a diverse background that includes roles as a Real Estate Agent and Warehouse Manager, I bring a unique perspective to the tech industry. I recently completed the rigorous Full Stack Coding Bootcamp with UCB Extensions, which has equipped me with a strong foundation in web development technologies. My ambition is to excel in the tech industry, whether through tech sales, sales engineering, or pursuing a role as a junior web developer. I am driven by the endless possibilities and challenges that lie ahead in this dynamic field.
            <br></br>
            <br></br>
            When I'm not coding, you'll often find me spending quality time with my family, in the gym, enjoying a round of golf, playing video games with friends, or watching various sports.
        </p>
    </div>
    <div className='lg:ml-10  mb-5 rounded shadow lg:w-2/5 h-[50%] '>
        <img src={aboutMePic} alt="Avery Myers" className="headshot shado self-start object-cover h-full" />
    </div>
</section>

    </>
    );
}

// I am a 24-year-old professional in the midst of a transformative career journey. With a diverse background that includes roles as a Real Estate Agent and Warehouse Manager, I bring a unique perspective to the tech industry. I recently completed the rigorous Full Stack Coding Bootcamp with UCB Extensions, which has equipped me with a strong foundation in web development technologies. My ambition is to excel in the tech industry, whether through tech sales, sales engineering, or pursuing a role as a junior web developer. I am driven by the endless possibilities and challenges that lie ahead in this dynamic field.
// <br></br>
// <br></br>
// When I'm not coding, you'll often find me spending quality time with my family, in the gym, enjoying a round of golf, playing video games with friends, or watching various sports.