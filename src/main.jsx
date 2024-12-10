import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreatePost from './Pages/CreatePost'
import About from './Pages/About'
import Admin from './Pages/Admin'
import Post from './Pages/Post'
import Login from './Pages/Login'
import Register from './Pages/Register'

const Router = createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/create',
    element: <CreatePost/>
  },
  {
    path: '/about',
    element: <About/>
  },
  {
    path: '/login-admin',
    element: <Admin/>
  },
  {
    path: '/posts/:id',
    element: <Post/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/register',
    element: <Register/>
  }
])




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={Router}>
    <App />
    </RouterProvider>
  </StrictMode>,
)
