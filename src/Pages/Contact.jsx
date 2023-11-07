import React, { useState, useEffect } from 'react';
import StyledButton from '../Components/StyledButton';
import LandingNav from '../Components/LandingNav';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would handle the form submission, e.g., sending data to your backend
        console.log(formData);
      };
    return (
    <>
    <section className='h-screen mx-60'>
        <LandingNav></LandingNav>
        <section className="flex flex-row justify-center gap-24 mt-16 items-center ">
            <div className="w-1/3 cols-1 ">
                <h1 className="text-2xl text-center  text-black mb-4">
                  Email Me
                </h1>
                <form className='flex shadow px-4 py-4 flex-col rounded-sm'>
                    <input type='text' placeholder='Name' className="border shadow my-3 p-1 mb-1"/>
                    <input type='text' placeholder='Email' className="border shadow my-3 p-1 mb-1"/>
                    <textarea placeholder='What is up?' className="border shadow p-1 text-wrap my-3 mb-1" rows="4"></textarea>
                    <div className='justify-center items-center flex'>
                        <StyledButton size="submit" className=''> SEND </StyledButton>
                    </div>
                </form>
            </div>
            <div className="w-1/3 ">
                <h1 className="text-2xl text-center  text-black mb-4">
                 Other Contact Info
                </h1>
                <div className='flex shadow px-4 py-4 flex-col rounded-sm'>
                    Linked In <br></br>
                    Github <br></br>
                    Phone
                </div>
            </div>
        </section>
    </section>
    </>
    );
  }


