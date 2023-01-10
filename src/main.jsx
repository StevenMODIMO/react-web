import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "./routes/Home";
import About from "./routes/about";
import Projects from "./routes/projects";
import Contact from './routes/contact'
import Index from "./routes";

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    children: [
      { index: true, element: <Index />},
      {
        path: 'about',
        element: <About />
      },
      {
        path: 'projects',
        element: <Projects />
      },
      {
        path: 'contact',
        element: <Contact />
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
