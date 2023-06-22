import { useState } from 'react'

import './App.css'
import { Outlet } from 'react-router-dom'
import Header from './Sheared/Header'
import Footer from './Sheared/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header></Header>
    <Outlet></Outlet>
    <Footer></Footer>
     
    
    </>
  )
}

export default App
