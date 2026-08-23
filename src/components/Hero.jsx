import React from 'react'
import { easeInOut, easeOut, motion } from "framer-motion"
import { assets } from "../assets/assets"



const Hero = () => {
  return (
    <>
      {/***setting initial position and its effct when page load by using framer motion ***/}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}

        id='home'
        className='min-h-screen flex items-center pt-0 pb-0 bg-gradient-to-r from-[#1a1a1a] via-[#2d2d2d] to-[#1a1a1a]'
      >

        <div className='container mx-auto px-6 flex flex-col md:flex-row items-center justify-between'>

          {/** Left side content */}

          <div className='md:w-1/2 mb-10 md:mb-0 '>

            <h1 className='text-4xl md:text-5xl font-bold mb-4 '>
              Hi, I'm  <span className='text-purple'>Sudhanshu Singh</span>
            </h1>

            <h2 className='text-2xl md:text-3xl font-semibold mb-6 typewriter'>
              Frontend Developer
            </h2>

            <p className='text-lg text-gray-300 mb-8'>
              A good frontend developer focuses on both design and functionality to ensure a smooth and engaging user experience across different devices.
            </p>

            {/**creating button */}

            <a
              href="file:///C:/Users/Sudhanshu%20Singh/OneDrive/Desktop/Sudhanshu_Singh_Resume%20.pdf"
              target='_blank'
              className=' py-3 px-6  border border-purple font-medium rounded-lg  hover:bg-purple/10 transition duration-300'>Download CV</a>

          </div>



          {/**Right Side Image */}


          <div className='md:w-1/2 flex justify-center '>

            <div className='relative w-64 h-64 md:w-80 md:h-90 '>

              <div className='absolute inset-0 rounded-full bg-gradient-to-r from-purple to-pink opacity-70 '>
                
                <motion.img
                  animate={{ y: [0, -20, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    ease: "easeInOut"
                  }}
                  className='relative rounded-full w-64 h-64 md:w-80  md:h-90 object-cover z-10 '
                  
                  src={assets.profileImg} alt="" />
              </div>

            </div>

          </div>


        </div>


      </motion.div>
    </>
  )
}

export default Hero