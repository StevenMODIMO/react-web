import React from 'react'
import { createRoot}from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Navbar from './components/navbar'
import Home from './routes/home'
import About from './routes/about'
import Projects from './routes/projects'

const AppLayOut = () => {
  return (
    <>
    <Navbar />
    <Outlet />
    </>
  )
}

const router = createBrowserRouter([
  {
    element: <AppLayOut />,
    path: '/',
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'projects',
        element: <Projects />
      }
    ]
  }
])


createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
