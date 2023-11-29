import React, { useState } from 'react';
import StyledButton from '../Components/StyledButton';
import LandingNav from '../Components/LandingNav';
import MobileNav from '../Components/MobileNav';
import ContactList from '../Components/ContactList';
import axios from 'axios';

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData({ name: '', email: '', message: '' });
    

    // Formspree endpoint
    const formSpreeEndpoint = 'https://formspree.io/f/xbjvbqyv';

    try {

      const response = await axios.post(formSpreeEndpoint, formData);

      if (response.status === 200) {
        console.log('Form submitted successfully!');
      } else {
        console.error('Form submission failed.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };
    return (
    <>
    <section className='  lg:mx-60'>
    {window.innerWidth <= 700 ? (
            <MobileNav /> // Display MobileNav on screens with width less than or equal to 1024px
            ) : (
            <LandingNav /> // Display LandingNav on screens with width greater than 1024px
            )}
        
        <section className="flex flex-row justify-center gap-12  items-center  ">
          <div className="lg:w-1/2 cols-1 w-full mx-5  ">
            <h1 className="text-2xl rounded text-center text-black mb-2 text-2xl font-bold mb-0">
              Email Me
            </h1>
            <form
              onSubmit={handleSubmit} 
              className="flex shadow rounded px-4 pb-2 flex-col rounded-sm"
            >
              <input
                type="text"
                placeholder="Name"
                className="border shadow my-3 p-1 mb-1 rounded"
                name="name"
                value={formData.name}
                onChange={handleChange} 
              />
              <input
                type="text"
                placeholder="Email"
                className="border rounded shadow my-3 p-1 mb-1"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
              <textarea
                placeholder="What is up?"
                className="border rounded shadow p-1 text-wrap my-3 mb-1"
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
              ></textarea>
              <div className="justify-center items-center flex">
                <StyledButton type="submit" className="">
                  SEND
                </StyledButton>
              </div>
            </form>
            <h1 className="text-2xl text-center text-black mt-12  ">
              Other Options:
              <ContactList></ContactList>
            </h1>

          </div>
        </section>
    </section>
    </>
    );
  }


