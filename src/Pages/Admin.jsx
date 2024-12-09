import React, { useEffect, useState } from 'react'
import {db} from '../firebase/firebase'
import { collection, deleteDoc, getDoc, getDocs } from 'firebase/firestore'
import Post from './Components/PostCard';
import LoadingSpinner from './Components/LoadingSpinner';


const Admin = () => {

    const [postList, setpostList] = useState([]);
    const postsCollectionRef = collection(db, "Posts")
    
    const deletePost = async (id) => {
        const doc = await getDoc(postsCollectionRef, id)
        await deleteDoc(doc)
    }

    const getPosts = async () => {
        const RawData = await getDocs(postsCollectionRef)
        const data = RawData.docs.map((doc) => ({
            ...doc.data(),
            id: doc.id
        }))
        setpostList(data)
    }
    
    useEffect(() => {
      getPosts()      
    }, [postList])
    
    
    return (
        <div className='flex flex-wrap gap-6 justify-center items-start min-h-screen'>
            {postList.length === 0 ? (
                <LoadingSpinner />
            ) : (
                postList.map((post) => (
                    <Post key={post.id} Title={post.Title} Desc={post.Desc} />
                ))
            )}
        </div>
    )
}

export default Admin