import {Menu, X} from "lucide-react"
// import {NavLink} from "react-router-dom"
import React, { useState } from 'react'
// import menuBar from "../assets/menuBar.png"
import { Link } from "react-scroll";
// import { useState } from "react";

const Nav = () => {
  return (
    <div>
      <ul className='flex gap-10 pr-36 text-[18px]'>
        <li className='cursor-pointer hover:text-gray-400'>
          
        <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            
            
          Home
          </Link>
          </li>

          <li className='cursor-pointer hover:text-gray-400'>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Experience
            </Link>
          </li>

        <li className='cursor-pointer hover:text-gray-400'>
        <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
          Portfolio
          </Link>
          </li>
        <li className='cursor-pointer hover:text-gray-400'>
        <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
           Contact
          </Link>
          </li>
        
      </ul>
    </div>
  )
}


const Navbar = () => {
  const [isOpen,setIsOpen] = useState(false)

  const toggleNavbar = () => {
    setIsOpen(!isOpen)
  }

  return (

    <div className='fixed flex  justify-between mx-auto container max-w-full px-[40px] bg-slate-800 text-white h-[80px] items-center font-mono shadow-md shadow-gray-950 gap-10 sm:px-0'>
      <h1 className=' text-4xl md:pl-36 font-signature'>Sanxei</h1>
      <div className="md:flex hidden">
        <Nav/>
      </div>
      <div className=" md:hidden">

      <button onClick={toggleNavbar}>
        {isOpen ? <X /> : <Menu/>}
      </button>
      </div>

      {isOpen && (
        <div className="flex top-0 items-center basis-full md:hidden">
          <div className=" ">
        <ul className='flex flex-col gap-1 pl-3 mt-36 text-[18px] text-wrap justify-center w-screen h-full rounded-md bg-slate-800 shadow-sm shadow-gray-950'>
        <li className='cursor-pointer hover:text-gray-400'>
          
        <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            
            
          Home
          </Link>
          </li>

          <li className='cursor-pointer hover:text-gray-400'>
          <Link
            activeClass="active"
            to="skill"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Experience
            </Link>
          </li>

        <li className='cursor-pointer hover:text-gray-400'>
        <Link
            activeClass="active"
            to="project"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
          Portfolio
          </Link>
          </li>
        <li className='cursor-pointer hover:text-gray-400'>
        <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
           Contact
          </Link>
          </li>
        
      </ul>
      </div>
        </div>
      )}
    </div>
  );
}

export default Navbar