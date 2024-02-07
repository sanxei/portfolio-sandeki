import React,{ useRef } from 'react'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_70cdb3i', 'template_w2a90mz', form.current, {
        publicKey: 'aGp8a0BckbF1nm0qd',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          alert('Your email is sent!')
        },
        (error) =>{ 
          console.log('FAILED...', error.text);
          alert('Oops...')
        },
      );}

  return (

    <div className='flex items-center justify-center max-w-full '>
      <div className='w-[800px] h-[600px] mt-[20px]  font-mono text-white'>

      <h1 className='font-extrabold text-[60px]'>Contact</h1>
      {/* <div className='items-center'> */}
      <form ref={form} onSubmit={sendEmail}>
        <div>
          <label class="block mb-2 text-sm font-medium text-white dark:text-white"> Name:</label>
          <input type="text" name="user_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 " placeholder="John Doe" required></input>
        {/* </div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-white dark:text-white mt-5">Last Name:</label>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required></input>
        <div> */}
        
        <div>
          <label  class="block mb-2 text-sm font-medium text-white dark:text-white mt-5">Email:</label>
          <input type="email" name="user_email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5  " placeholder="Email" required></input>
        </div>

        <div>
          <label class="block mb-2 text-sm font-medium text-white dark:text-white mt-5">Your message</label>
          <textarea name="message" rows="4" class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write your message
          here..."></textarea>
          <input type="submit" value="Send" className='bg-blue-600 mt-3 px-14 py-4 cursor-pointer rounded-md font-bold hover:bg-blue-900'/>
        </div>
        </div>
      </form>
        
      </div>
      {/* </div> */}
      </div>
  )
}

export default Contact