import React from 'react'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Login from './pages/Login'
import Register from './pages/Register'

const App = () => {
  return (
   <Router>
    <Navbar />
     <Routes>
      <Route path='/' element={<Home/>} />
      <Route path='/Login' element={<Login/>} />
      <Route path='/Register' element={<Register/>} /> 
     </Routes>
   </Router>
  )
}

export default App
