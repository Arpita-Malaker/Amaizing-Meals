import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Pages/Home.jsx';
import Blogs from './Pages/Blogs.jsx';
import DetailRecipe from './Pages/DetailRecipe.jsx';
import AuthProvider from './Provider/AuthProvider.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';

import RegisterNew from './Pages/RegisterNew.jsx';
import Login from './Pages/Login.jsx';
import PrivateRoute from './PrivateRoute/PrivateRoute.jsx';
import AboutUs from './Pages/AboutUs.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement:<ErrorPage></ErrorPage>,
    children: [

      {
        path: '/',
        element: <Home></Home>
      },
      

      {
        path: '/detailrecipe/:id',
        element: <PrivateRoute><DetailRecipe></DetailRecipe></PrivateRoute>,
        loader: ({ params }) => fetch('https://assignment-10-server-arpita-malaker.vercel.app/chefsInfo')
      },
      {path:'/login',
      element:<Login></Login>,
    

      },

      
      {
        path:'/registernew',
        element:<RegisterNew></RegisterNew>
},

      {
        path: '/blog',
        element: <Blogs></Blogs>

      },

      {
        path: '/aboutus',
        element: <AboutUs></AboutUs>

      }
    ]

  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <AuthProvider>
       <RouterProvider router={router} />
    </AuthProvider>

  {/* <RouterProvider router={router} /> */}
    

  </React.StrictMode>,
)
