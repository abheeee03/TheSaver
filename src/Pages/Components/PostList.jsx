import React, { useEffect, useState } from 'react'
import { db } from '../../firebase/firebase'
import { collection, getDocs, query, orderBy } from 'firebase/firestore'
import Post from './PostCard'
import LoadingSpinner from './LoadingSpinner'

const PostList = () => {
    const [postList, setpostList] = useState([])
    const [loading, setLoading] = useState(true)
    const postsCollectionRef = collection(db, "Posts")
    
    const getPosts = async () => {
        try {
            const q = query(postsCollectionRef, orderBy("createdAt", "desc"))
            const RawData = await getDocs(q)
            const data = RawData.docs.map((doc) => ({
                ...doc.data(),
                id: doc.id
            }))
            setpostList(data)
        } catch (error) {
            console.error("Error fetching posts:", error)
        } finally {
            setLoading(false)
        }
    }
    
    useEffect(() => {
        getPosts()
    }, [])
    
    if (loading) {
        return (
            <div className="min-h-[calc(100vh-64px)] flex justify-center items-center p-4">
                <LoadingSpinner />
            </div>
        )
    }

    if (postList.length === 0 && !loading) {
        return (
            <div className="min-h-[calc(100vh-64px)] flex justify-center items-center p-4">
                <p className="text-white text-xl">No posts found</p>
            </div>
        )
    }
    
    return (
        <div className="w-full p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-wrap gap-4 sm:gap-6">
                    {postList.map((post) => (
                        <Post 
                            key={post.id} 
                            id={post.id} 
                            Title={post.Title} 
                            Desc={post.Desc}
                        />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PostList