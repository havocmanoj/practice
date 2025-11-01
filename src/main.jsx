import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './Login.jsx'
import HomePage from './Home.jsx'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import NotFound from './NotFound.jsx';
import Counter from './Counter.jsx';
import Post from './Post.jsx';

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
      errorElement: <NotFound/>
    },
    {
      path: "/login",
      element: <Login/>
    },
     {
      path: "/counter",
      element: <Counter/>
    },
     {
      path: "/post/:id",
      element: <Post/>
    }

]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
//npm install react-router-dom
