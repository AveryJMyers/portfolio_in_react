import React, { useState, useEffect } from 'react';
import StyledButton from '../Components/StyledButton';
import LandingNav from '../Components/LandingNav';
import ContactList from '../Components/ContactList';
export default function About() {
    return (
    <>
    <LandingNav></LandingNav>
    <section className='mx-60 h-full flex py-20  '>
        <div className='w-2/4  boxShadowOnly'>
            <p className='mr-10 my-1 p-4 ml-4'>
                I am a 24-year-old professional in the midst of a transformative career journey. With a diverse background that includes roles as a Real Estate Agent and Warehouse Manager, I bring a unique perspective to the tech industry. I recently completed the rigorous Full Stack Coding Bootcamp with UCB Extensions, which has equipped me with a strong foundation in web development technologies. My ambition is to excel in the tech industry, whether through tech sales, sales engineering, or pursuing a role as a junior web developer. I am driven by the endless possibilities and challenges that lie ahead in this dynamic field.
                <br></br>
                <br></br>
                When I'm not coding, you'll often find me spending quality time with my family, in the gym, enjoying a round of golf, playing video games with friends, or watching various sports.
            </p>
        </div>
        <div className='ml-10 boxShadowOnly w-1/3'>
            <img src="../photos/aboutMe.jpg" alt="Avery Myers" className="headshot boxShadowOnly object-cover h-full" />
        </div>
    </section>

    </>
    );
  }