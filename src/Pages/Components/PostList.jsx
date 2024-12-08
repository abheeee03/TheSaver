import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import { collection, getDocs } from 'firebase/firestore'
import Post from './Post';


const PostList = () => {

    const [postList, setpostList] = useState([]);
    const postsCollectionRef = collection(db, "Posts")
    
    
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
    <div>Posts:
    {postList.map((post) => (
        <Post key={post.id} Title={post.Title} Desc={post.Desc} />
    ))} </div>
  )
}

export default PostList