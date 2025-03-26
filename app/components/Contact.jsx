import React, {useState, useRef} from 'react'
import emailjs from '@emailjs/browser';
import { AiOutlineMail } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { AiOutlineEnvironment } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";


const Contact = (ref) => {
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_muk27yf', 'template_0qgxztz', e.target, {
        publicKey: 'zY2ywH19JpyI5vdyp',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
      alert("email submitted")
  };
  
  const emailIconRef = useState(false);
  const phoneIconRef = useState(false);
  const locaitonIconRef = useState(false);

  return (
    <div  id='contact' className='gap-6 h-screen w-full flex snap-center '>
      <div ref={ref.contactRef} className="flow-root h-3/4 lg:w-3/4 md:w-3/5 shadow-md bg-gradient-to-b from-blue-950  to-indigo-800 text-orange-100 p-4 lg:ml-32 md:ml-20 sm:ml-10 lg:mr-56 md:mr-20 sm:mr-10 mt-28 m-2 flex-shrink overflow-y-auto rounded-xl">
        <h3 className='text-center font-bold text-4xl p-10'>Contact Me</h3>
        {/* contact form */}
        <div className='float-right flex-col rounded-lg w-2/3 p-10' >
          <h3 className='font-bold text-2xl'>Send Me a Message</h3>
          <h1 className='mt-2'>If you have any questions or just want to reach out, feel free to send me a message</h1>
          
          <form className='flow-root text-slate-400' onSubmit={sendEmail}> 
            <input ref={emailRef} className="bg-orange-50 focus:text-slate-800 focus:outline-none focus:bg-white mt-4 p-2 w-full rounded" type="text" name="from_email" id="emailForm" placeholder="Enter your email"></input>
            <input ref={nameRef} className="bg-orange-50 focus:text-slate-800 focus:outline-none focus:bg-white  mt-4 p-2 w-full rounded" type="text" name="form_name" placeholder='Enter your name'></input>
            <textarea ref={messageRef} className="bg-orange-50 focus:text-slate-800 focus:outline-none focus:bg-white  mt-4 p-2 w-full rounded input-field h-48 " name="message" id="message" placeholder='Enter your Message'></textarea>
            <button type="submit"  className="bg-orange-400 text-orange-100 float-right font-bold mt-4 p-2 flex rounded outline-1">submit message</button>
          </form>
        </div>
        {/* contact links and info */}
        <div className='p-10 font-bold align-middle'>
          <div className='flex items-center pb-2'>
            <AiOutlineMail className='h-24 w-24 text-orange-100'/>
            <div className='ml-4'>
              <h3 className="text-3xl">Email</h3>
              <h1 >lakeksmith@gmail.com</h1>
            </div>
          </div>
          <div className='flex items-center pb-2 text-orange-200'>
            <AiOutlinePhone className='h-24 w-24 '/>
            <div className='ml-4'>
              <h3 className="text-3xl">Phone Number</h3>
              <h1>704-778-1365</h1>
            </div>
          </div>
          <div className='flex items-center pb-2 text-orange-300'>
            <AiOutlineEnvironment className='h-24 w-32 '/>
            <div className='ml-6'>
              <h3 className="text-3xl">Address</h3>
              <h1>
                6540 Quail Hollow Rd. Apt 2F,
                Charlotte, NC, 28210
              </h1>
            </div>
          </div>
          <a target="_blank" className="flex w-64  pb-2 items-center text-orange-400" href="https://www.linkedin.com/in/lake-smith-422a54278/">
            <AiFillLinkedin className='h-24 w-24  '/>
            <h1 className="ml-6 text-3xl">Linkedin</h1>
          </a>    
        </div>

      </div>
    </div>
   )
 };
 
 export default Contact