import React, { useRef } from 'react'
import { db } from '../firebase/firebase'
import { collection, addDoc } from 'firebase/firestore'


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
    <div>
        <input type="text" ref={Title}  />
        <textarea ref={Desc} ></textarea>
        <button onClick={()=>CreatePost()}>Create Post</button>
    </div>
  )
}

export default CreatePost