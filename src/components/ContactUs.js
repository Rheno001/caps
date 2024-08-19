import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_vicr11b', 'template_rv5cvp4', form.current, {
        publicKey: 'JHJpSPrOxtv3KCgYg',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <form className='flex flex-col py-2 items-center border-green-800 border-2 rounded-md' ref={form} onSubmit={sendEmail}>
      <label className='text-green-800 font-medium'>Name</label>
      <input type="text" name="from_name" className='bg-green-100 px-5 py-2 w-[85%]' placeholder='Your name...'/>
      <label className='text-green-800 font-medium'>Email</label>
      <input type="email" name="from_email" className='bg-green-100 px-5 py-2 w-[85%]' placeholder='Email Address...'/>
      <label className='text-green-800 font-medium'>Message</label>
      <textarea name="message" className='bg-green-100 px-5 py-2 w-[85%]' placeholder='Enter message...' />
      <input type="submit" className="btn rounded-3xl py-2 px-4 w-[50%] self-center duration-300 bg-green-800 text-white font-bold hover:text-green-800 hover:bg-gray-100 hover:scale-105 text-sm md:text-lg mt-2 mb-2" value="Send" />
    </form>
  );
};