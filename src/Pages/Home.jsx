import React from 'react'
import PostList from './Components/PostList'

const Home = () => {
  return (
    <main className="min-h-[calc(100vh-64px)] bg-gray-900">
      <PostList />
    </main>
  )
}

export default Home