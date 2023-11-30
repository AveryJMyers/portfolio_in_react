import React, { useState, useEffect } from 'react';
import StyledButton from '../Components/StyledButton';
import LandingNav from '../Components/LandingNav';

import phonePic from '../Photos/phone4.png';
import emailPic from '../Photos/email.png';
import linkedInPic from '../Photos/linkedInLM.png';
import gitPic from '../Photos/git.png';

export default function ContactList() {
    return (
    <>
        <section>
            <div className='flex justify-center rounded mt-4 p-4 items-center'>
                <a href="https://github.com/AveryJMyers" target="_blank" className="w-12 pr-3 mr-2 scaleHover">
                    <img src={gitPic} className="" />
                </a>
                <a href="mailto:averyjmyers@outlook.com" target="_blank" className='w-12 pr-3 mr-2 scaleHover'>
                    <img src={emailPic} className="" />
                </a>
                <a href="https://www.linkedin.com/in/avery-m-108704110/" target="_blank" className='w-12 pr-3 mr-2 scaleHover'>
                    <img src={linkedInPic} className=" " />
                </a>
            </div>
        </section>
    </>
    );
  }