import React from 'react'
import Navbar from './Components/Navbar'
import { Link } from 'react-router-dom'
import { SlSocialLinkedin } from 'react-icons/sl'
import { FaXTwitter } from 'react-icons/fa6'
import { ImGithub } from 'react-icons/im'

const About = () => {
  return (
    <>
      <Navbar/>
      <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen p-8 flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-8 animate-fade-in">
            Thank You For Trying Saver!
          </h1>
          <div className="bg-gray-800 p-8 rounded-lg shadow-xl backdrop-blur-sm">
            <p className="text-lg md:text-xl mb-6">
              Saver is currently being managed by{' '}
              <a 
                href='https://github.com/abheeee03' 
                className='text-blue-400 hover:text-blue-300 underline transition-colors duration-300'
              >
                Abheeee
              </a>
            </p>
            <div className="space-y-4">
              <p className="text-xl font-semibold">Connect With Me</p>
              <div className="flex justify-center space-x-6">
                <a 
                  href="https://www.linkedin.com/in/AbhayNimbalkar"
                  className="text-2xl hover:text-blue-400 transition-colors duration-300"
                >
                  <SlSocialLinkedin />
                </a>
                <a 
                  href="https://x.com/_AbhayHere"
                  className="text-2xl hover:text-gray-400 transition-colors duration-300"
                >
                  <FaXTwitter />
                </a>
                <a 
                  href="https://github.com/abheeee03"
                  className="text-2xl hover:text-purple-400 transition-colors duration-300"
                >
                  <ImGithub />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About