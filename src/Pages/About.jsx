import React, { useState, useEffect } from 'react';
import StyledButton from '../Components/StyledButton';
import LandingNav from '../Components/LandingNav';
import ContactList from '../Components/ContactList';
import MobileNav from '../Components/MobileNav';

import aboutMePic from '../Photos/aboutMe.jpg';




    export default function About() {
        return (
    <>
        {/* <LandingNav></LandingNav> */}
        {window.innerWidth <= 700 ? (
                <MobileNav /> // Display MobileNav on screens with width less than or equal to 1024px
                ) : (
                <LandingNav /> // Display LandingNav on screens with width greater than 1024px
                )}
                <section className='"relative mx-5 lg:mx-60 grid gap-20 sm:grid-cols-1 lg:grid-cols-1"'>
                    <div className='grid-rows-2 textContainer'>
                        <p className='shadow text-lg p-2 lg:p-4 lg:text-xl text-black'>
                            Hello! My name is Avery Myers, I am a 24 year old who is passionate about web development. Recently, I completed a Full Stack Web Development course through UC Berkeley Extension. Since the first day of class coding has been a integral part of my life. Since completing the bootcamp, I've started freelance web development. When I'm not busy with client projects, I focus on developing my own applications.
                            <br></br>
                            <br></br>
                            My projects range from simple front end to full stack applications. I am always looking for new projects to work on, and new people to work with. If you are interested in working with me, please feel free to reach out to me through the contact page. I enjoy both front and back end development, most experienced with <span className='text-black strong'>MERN</span> stack development, but am always looking to learn new technologies.
                            <br></br>
                            <br></br>
                            When I'm not coding, you'll often find me spending quality time with my family, training in the gym, enjoying a round of golf, playing video games with friends, or watching various sports.
                        </p>
                    </div>
                </section>
        </>
        );
    }

// I am a 24-year-old professional in the midst of a transformative career journey. With a diverse background that includes roles as a Real Estate Agent and Warehouse Manager, I bring a unique perspective to the tech industry. I recently completed the rigorous Full Stack Coding Bootcamp with UCB Extensions, which has equipped me with a strong foundation in web development technologies. My ambition is to excel in the tech industry, whether through tech sales, sales engineering, or pursuing a role as a junior web developer. I am driven by the endless possibilities and challenges that lie ahead in this dynamic field.
// <br></br>
// <br></br>
// When I'm not coding, you'll often find me spending quality time with my family, in the gym, enjoying a round of golf, playing video games with friends, or watching various sports.