import React, { useState } from "react";
import { div, nav } from "framer-motion/client";
import { FaBars } from "react-icons/fa";
import { FaXmark } from "react-icons/fa6";
import { FaGithub, FaLinkedin } from "react-icons/fa";


const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fiexed w-full z-50 bg-dark-100/90 backdrop-blur-sm py-4 px-8 shadow-lg">
      <div className="container  mx-auto  flex justify-between items-center ">


        <div className="text-3xl font-bold text-white">

          <span className="text-purple">&lt;</span>
          <span>Sudhanshu</span>
          <span>/</span>
          <span className="text-purple">Singh</span>
          <span className="text-purple">&gt;</span>
          <div className="mx-4 w-4 h-4 bg-purple  rounded-full "> </div>

        </div>

        {/** Menu */}

        <div className="hidden md:flex space-x-10">

          <a
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-purple group "
          >
            Home
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/about"
            className="relative text-white/80 transition duration-300 hover:text-purple group "
          >
            <span>About</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/skills"
            className="relative text-white/80 transition duration-300 hover:text-purple group "
          >
            <span>Skills</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/projects"
            className="relative text-white/80 transition duration-300 hover:text-purple group "
          >
            <span>Projects</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/experience"
            className="relative text-white/80 transition duration-300 hover:text-purple group "
          >
            <span>Experience</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>

          <a
            href="/contact"
            className="relative text-white/80 transition duration-300 hover:text-purple group "
          >
            <span>Contact</span>
            <span className="absolute left-0 -bottom-1 w-0 h-0.5 bg-purple transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>

        {/**Social Media */}

        <div className=" flex space-x-10 text-2xl">

          <a href="https://github.com/sudhanshu423" target="_blank">  <FaGithub /> </a>

          <a href="https://www.linkedin.com/in/sudhanshu423/" target="_blank"> <FaLinkedin /></a>

        </div>


        {/* MOBILE MENU BUTTON */}

        <div className="md:hidden ">
          {showMenu ? (
            <FaXmark
              onClick={() => setShowMenu(false)}
              className="text-2xl cursor-pointer"
            />
          ) : (
            <FaBars
              onClick={() => setShowMenu(true)}
              className="text-2xl cursor-pointer"
            />
          )}
        </div>
      </div>


      {/** MOILE MENU */}

      {showMenu && (
        <div className="md:hidden mt-4 bg-dark-300 h-screen rounded-lgp-4 flex flex-col space-y-4 text-center justify-center">
          <a
            onClick={() => setShowMenu(false)}
            href="#home"
            className="relative text-white/80 transition duration-300 hover:text-purple group  "
          >
            Home

          </a>


          <a
            onClick={() => setShowMenu(false)}
            href="#about"
            className="relative text-white/80 transition duration-300 hover:text-purple group "
          >
            <span>About</span>

          </a>


          <a
            onClick={() => setShowMenu(false)}
            href="#skills"
            className="relative text-white/80 transition duration-300 hover:text-purple group "
          >
            <span>Skills</span>

          </a>


          <a
            onClick={() => setShowMenu(false)}
            href="#projects"
            className="relative text-white/80 transition duration-300 hover:text-purple group "
          >
            <span>Projects</span>

          </a>

          <a
            onClick={() => setShowMenu(false)}
            href="#experience"
            className="relative text-white/80 transition duration-300 hover:text-purple group "
          >
            <span>Experience</span>

          </a>


          <a
            onClick={() => setShowMenu(false)}
            href="#contact"
            className="relative text-white/80 transition duration-300 hover:text-purple group "
          >
            <span>Contact</span>

          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
