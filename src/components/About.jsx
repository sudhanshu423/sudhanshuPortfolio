import React from 'react'
import { motion } from "framer-motion"
import { aboutInfo, assets } from '../assets/assets'
import { div } from 'framer-motion/client'

const About = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}

        id='about'
        className='py-20 bg-dark-200 md:w-full'
      >
        <div className='container mx-0 px-6 '>

          {/** heading */}

          <h2 className='text-3xl font-bold text-center mb-4'>About
            <span className='text-purple'>Me</span>
          </h2>

          <p className='text-gray-400 text-center max-w-2xl mx-auto mb-16'>
            Get to know more about my background and passion
          </p>

          {/** image and abot me content */}

          <div className='flex flex-col md:flex-row items-center gap-12'>

            {/** Image */}

            <div className='md:w-1/2 h-210 rounded-2xl overflow-hidden '>

              <motion.img
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}

                className='w-full h-full object-cover'
                src={assets.profileImg} alt="profile" />

            </div>

            {/**About content */}

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}

              className='md:w-1/2 '
            >

              <div className='rounded-2xl p-8'>

                <h3 className='text-2xl font-semibold mb-6 '>
                  My Journey
                </h3>

                <p className='text-gray-300 mb-6'>
                  I'm a passionate Frontend Developer who loves turning creative ideas into beautiful, interactive, and user-friendly web experiences.
                  I began by learning the fundamentals of HTML, CSS, and JavaScript, and gradually explored modern technologies like React and responsive web design.
                </p>

                <p className='text-gray-300 mb-6'>
                  Today, my journey continues with a passion for creating clean, responsive, and user-friendly web experiences. I believe frontend development is not just about writing code; it’s about combining creativity, logic, and technology to solve real problems.

                </p>

                {/**Cards */}

                <div className='grid grid-cols-1 md:grid-cols-2 gap-6 '>
                  {
                    aboutInfo.map((data, index) => (

                      <div key={index} className='bg-dark-300 rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-2 cursor-pointer'>

                        <div className='text-purple text-2xl mb-4'>
                          <data.icon />
                        </div>

                        <h3 className='text-xl font-semibold mb-3'>{data.title}</h3>
                        
                        <p className='text-gray-400'>{data.description}</p>

                      </div>

                    ))
                  }
                </div>

              </div>

            </motion.div>

          </div>

        </div>


      </motion.div>
    </>
  )
}

export default About