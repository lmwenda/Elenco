import Image from 'next/image';
import React from 'react';
import { motion } from 'framer-motion';
import image from "../public/assets/Checklist.jpg";
import Typewriter, { TypewriterClass } from 'typewriter-effect';
import Link from 'next/link';

const landingPage = () => {
  return (
    <section>
      <div
        as={motion.div}  
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
                <div className="mt-5">
                  <Link href='/todos'> 
                    <button className="bg-red-500 text-white px-6 p-3 hover:opacity-75">New Task</button>
                  </Link>
                </div>
            </div>
          </div>

          <div className="md:w-1/2">
              <Image className="sm:w-auto md:w-9/12" height={0} width={0} src={image} alt="" />
          </div>
      </div>
    </section>
  )
}

export default landingPage;