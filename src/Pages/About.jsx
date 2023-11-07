import React, { useState, useEffect } from 'react';
import StyledButton from '../Components/StyledButton';
import LandingNav from '../Components/LandingNav';
export default function About() {
    return (
    <>
    <LandingNav></LandingNav>
    <section className='text-center justify-center items-center flex align-center pb-60 h-screen'>
        <div className='border flex flex-wrap w-1/4 stretch mx-20 w-80 h-64'>
            
            <div className='border border-black border-1 flex flex-wrap '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio voluptatum quibusdam iusto maxime, excepturi eum? Veniam magni fugiat maiores. Recusandae maxime molestias rerum quam provident labore deserunt quas ut tempora! Iusto quam at repellendus maiores eius numquam iste facere obcaecati neque quo ratione amet molestiae distinctio, eveniet illo, sint quisquam?</div>
        </div>
        <img src='/photos/headshot.jpg' className=' h-64'></img>
    </section>
    </>
    );
  }