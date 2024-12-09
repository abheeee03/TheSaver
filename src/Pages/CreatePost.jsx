import React, { useRef } from 'react'
import { db } from '../firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'
import Navbar from './Components/Navbar';


const CreatePost = () => {

    const Title = useRef('');
    const Desc = useRef('');

    const postsCollectionRef = collection(db, "Posts")
    const CreatePost = async ()=>{
        await addDoc(postsCollectionRef, {
            Title: Title.current.value,
            Desc: Desc.current.value,
            createdAt: new Date()
        })
        Title.current.value = ''
        Desc.current.value = ''
        alert('post created')
    }


  return (
    <>
    <Navbar/>
    <div className='bg-gray-900 p-10 min-h-screen'>
      <div className='max-w-3xl mx-auto'>
        <div className="mb-6">
            <label htmlFor="default-input" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Title Here</label>
            <input type="text" ref={Title} placeholder='Enter Description in short...' className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
        </div>        
        <div className="mb-6">
          <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Describe...</label>
          <textarea id="message" ref={Desc} rows="7" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Write Any Message or Description Here"></textarea>
        </div>
        <div className="flex justify-end">
          <button 
            type="button" 
            className="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
            onClick={CreatePost}
            >
            Create Post
          </button>
        </div>
      </div>
    </div>
            </>
  )
}

export default CreatePost