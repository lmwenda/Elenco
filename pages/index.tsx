import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import image from "../public/assets/Checklist.jpg";
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import Link from 'next/link';


const landingPage = () => {
  return (
    <motion.section animate={{ x: [ -75, 0 ], opacity: [ 0, 0.5, 0.7, 0.9, 1 ] }} transition={{ ease: "easeIn" }}>
      <div
        className="container flex flex-col-reverse items-center px-6 mx-auto mt-1 space-y-12 md:space-y-0 md:mt-20 md:flex-row"
      >
          <div className="flex flex-col mb-32 space-y-12 md:w-1/2">
            <h1
                className="max-w-md text-4xl font-bold text-center md:text-5xl md:text-left"
            >
              <Typewriter
                onInit={(typewriter: TypewriterClass) => {
                  typewriter.typeString('Boost your Productivity')
                    .pauseFor(2000)
                    .start();
                }}
              />
            </h1>

            <p className="max-w-sm text-center text-darkGrayishBlue md:text-left">
                Ever lost track on your tasks? 
                Forgot what you planned on doing today? 
                Other Management Apps to slow for you? You've come to the right place... 
            </p>
            <div className="flex justify-center md:justify-start">
                <motion.div
                animate={{ y: [ 0, -10, 0 ], opacity: 1 }}
                transition={{
                  delay: 1,
                  ease: "easeInOut",
                  y: { type: "bounce", stiffness: 15, repeat: Infinity },
                  default: { duration: 2, repeat: Infinity },
                }}
                className="mt-5">
                  <Link href='/todos'> 
                    <button className="bg-red-500 text-white px-6 p-3 hover:opacity-75">New Task</button>
                  </Link>
                </motion.div>
            </div>
          </div>

          <motion.div 
            className="md:w-1/2"
            animate={{ opacity: 1, y: [ 0, -50]}}
            transition={
              {
                delay: 1,
                y: { type: "bounce", stiffness: 15 },
                default: { duration: 3, repeatType: "loop", repeat: Infinity },
              }}
            >
              <Image className="sm:w-auto md:w-9/12" height={0} width={0} src={image} alt="" />
          </motion.div>
      </div>

      <div className="relative container mt-14 flex items-center px-6 mx-auto space-y-10 justify-center flex-col">
          <h1 className="text-3xl text-center">
              Our products is used by teams from around the world
          </h1>

          <div className="baseline flex flex-col space-y-10 items-center justify-center md:space-y-0 md:flex-row md:space-x-5">
              <img src="
              https://assets.website-files.com/6085e38567384555aea9df90/60e2756704be844efefe70a5_Carded%20Black%20Logo.svg
              " alt="" />

              <img src="
              https://assets.website-files.com/6085e38567384555aea9df90/60e27567d03c58ecd9f102dc_Emerald%20Black%20Logo.svg
              " alt="" />

              <img src="
              https://assets.website-files.com/6085e38567384555aea9df90/60e275675067bd7021d81225_Etro%20Black%20Logo.svg
              " alt="" />

              <img src="
              https://assets.website-files.com/6085e38567384555aea9df90/60e27567d03c58eddcf102db_Focusfox%20Black%20Logo.svg
              " alt="" />

              <img src="
              https://assets.website-files.com/6085e38567384555aea9df90/60e275679137b9062facb23d_Optimer%20Black%20Logo.svg
              " alt="" />
              
          </div>
      </div>
    </motion.section>
  )
}

export default landingPage;