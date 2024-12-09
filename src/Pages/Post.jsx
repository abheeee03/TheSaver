import React, { useEffect, useState } from 'react'
import Navbar from './Components/Navbar'
import { db } from '../firebase/firebase'
import { doc, getDoc } from 'firebase/firestore'
import { useParams } from 'react-router-dom'
import LoadingSpinner from './Components/LoadingSpinner'

const Post = () => {
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const { id } = useParams()

  const getPost = async () => {
    try {
      const docRef = doc(db, "Posts", id)
      const docSnap = await getDoc(docRef)
      if (docSnap.exists()) {
        setPost(docSnap.data())
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
        <div className="bg-gray-900 min-h-screen p-10 flex justify-center items-center">
          <LoadingSpinner />
        </div>
      </>
    )
  }

  if (!post) {
    return (
      <>
        <Navbar />
        <div className="bg-gray-900 min-h-screen p-10 flex justify-center items-center">
          <p className="text-white text-xl">Post not found</p>
        </div>
      </>
    )
  }

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 min-h-screen p-10">
        <div className="max-w-3xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8">
          <h1 className="text-4xl font-bold mb-6 text-gray-900 dark:text-white">
            {post.Title}
          </h1>
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 whitespace-pre-wrap">
              {post.Desc}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Post