import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'

const Post = (props) => {
  return (
    <Link 
      to={`/posts/${props.id}`} 
      className="w-full sm:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1rem)] p-6 bg-white border border-gray-200 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700 flex flex-col"
    >
      <div className="flex-grow">
        <h5 className="mb-3 text-xl sm:text-2xl font-bold tracking-tight text-gray-900 dark:text-white line-clamp-2">
          {props.Title}
        </h5>
        <p className="mb-4 font-normal text-gray-700 dark:text-gray-400 line-clamp-3">
          {props.Desc}
        </p>
      </div>
      <div className="flex items-center text-blue-500 dark:text-blue-400 hover:text-blue-600 dark:hover:text-blue-300 transition-colors duration-300">
        <span className="text-sm font-medium">Read More</span>
        <FaArrowRight className="ml-2 text-sm" />
      </div>
    </Link>
  )
}

export default Post