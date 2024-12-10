import React from 'react'
import Navbar from './Components/Navbar'
import { Link } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

const Register = () => {
  return (
    <>
    <Navbar/>
    <section className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-xl p-6 space-y-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Join Saver !
        </h2>
        <form className="space-y-6" action="#">
          <div>
            <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Username</label>
            <input 
              type="text" 
              name="name"  
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="apka_nickname :D" 
              required 
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
            <input 
              type="email" 
              name="email"  
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              placeholder="xyz@gmail.com" 
              required 
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Create password</label>
            <input 
              type="password" 
              name="password"  
              placeholder="••••••••" 
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" 
              required 
            />
          </div>
          <div className="flex items-start">
            <div className="flex items-center h-5">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
                required
              />
            </div>
            <label htmlFor="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
              I agree to the <a href="#" className="text-blue-600 hover:underline dark:text-blue-500">terms and conditions</a>
            </label>
          </div>
          <button 
            type="submit" 
            className="w-full px-5 py-3 text-base font-medium text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Create Account
          </button>
          <div className="flex items-center justify-center">
            <hr className="w-full border-gray-300 dark:border-gray-600" />
            <span className="px-4 text-gray-500 dark:text-gray-400">or</span>
            <hr className="w-full border-gray-300 dark:border-gray-600" />
          </div>
          <button
            type="button"
            className="w-full flex items-center justify-center px-5 py-3 text-base font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:ring-4 focus:ring-gray-200 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
          >
            <FcGoogle className="w-5 h-5 mr-2" />
            Sign up with Google
          </button>
          <div className="text-sm font-medium text-gray-900 dark:text-white text-center">
            Already have an account? <Link to="/login" className="text-blue-600 hover:underline dark:text-blue-500">Sign in</Link>
          </div>
        </form>
      </div>
    </section>
    </>
  )
}

export default Register