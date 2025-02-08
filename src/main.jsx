import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import User from './components/Transform/Transform.jsx'
import Fitness from './components/Fitness/Fitness.jsx'
import Contact from './components/Contact/Contact.jsx'
import Transform from './components/Transform/Transform.jsx'
import Login from './components/Login/Login.jsx'

const basename = import.meta.env.VITE_BASENAME || '/';
console.log('Router basename:', basename); 

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home />}/>
      <Route path='about' element={<About />} />
      <Route path='Fitness' element={<Fitness />} />
      <Route path='Contact' element={<Contact />} />
      <Route path='Transform' element={<Transform />} />
      <Route path='Login' element={<Login />} />
      <Route path='user/' element={<User />} >
        <Route path=':userid' element={<User />} />
      </Route>      
    </Route>
  ),
  { basename }
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
