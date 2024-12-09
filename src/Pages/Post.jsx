import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { db } from '../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useParams, Link } from 'react-router-dom'
import LoadingSpinner from './Components/LoadingSpinner'
import { FaArrowLeft } from 'react-icons/fa'

const Post = () => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const getPost = async () => {
    try {
      const docRef = doc(db, "Posts", id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setPost({ ...docSnap.data(), id: docSnap.id })
      } else {
        console.log("No such document!")
      }
    } catch (error) {
      console.error("Error fetching post:", error)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    getPost()
  }, [id])

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="bg-gray-900 min-h-screen p-4 sm:p-6 lg:p-8 flex justify-center items-center">
          <LoadingSpinner />
        </div>
      </>
    )
  }

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="bg-gray-900 min-h-screen p-4 sm:p-6 lg:p-8 flex flex-col items-center justify-center">
          <p className="text-white text-xl mb-4">Post not found</p>
          <Link 
            to="/"
            className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors duration-300"
          >
            <FaArrowLeft className="mr-2" />
            Back to Home
          </Link>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen">
        <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
          <div className="max-w-3xl mx-auto">
            <Link 
              to="/"
              className="inline-flex items-center text-blue-500 hover:text-blue-400 transition-colors duration-300 mb-6"
            >
              <FaArrowLeft className="mr-2" />
              Back to Posts
            </Link>
            
            <article className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 sm:p-8 lg:p-10">
              <header className="mb-6 sm:mb-8">
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white">
                  {post.Title}
                </h1>
                {post.createdAt && (
                  <time className="block mt-3 text-sm text-gray-600 dark:text-gray-400">
                    {new Date(post.createdAt.toDate()).toLocaleDateString('en-US', {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric'
                    })}
                  </time>
                )}
              </header>
              
              <div className="prose dark:prose-invert max-w-none">
                <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg whitespace-pre-wrap leading-relaxed">
                  {post.Desc}
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post