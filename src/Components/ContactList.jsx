import React, { useState, useEffect } from 'react';
import StyledButton from '../Components/StyledButton';
import LandingNav from '../Components/LandingNav';
export default function ContactList() {
    return (
    <>
        <section>
            <div className='flex justify-center  mt-4 p-4 items-center '>
                <a href="" className='w-10 pr-3 mr-2 scaleHover'>
                    <img src="/photos/phone4.png" className=" scaleHover" />
                </a>
                <a href="https://github.com/AveryJMyers" className= "w-10 pr-3 mr-2 scaleHover">
                    <img src="/photos/git.png" className=" " />
                </a>
                <a href="mailto:averyjmyers@outlook.com" className='w-10 pr-3 mr-2 scaleHover'>
                    <img src="/photos/email.png" className="" />
                </a>
                <a href="https://www.linkedin.com/in/avery-m-108704110/" className=' w-10 pr-3 mr-2  scaleHover'>
                    <img src="/photos/linkedInLM.png" className=" " />
                </a>
            </div>
        </section>
    </>
    );
  }