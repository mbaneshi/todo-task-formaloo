// src/components/App.js

import { Routes, Route } from 'react-router-dom'

import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import About from "./components/About";
import Home from "./components/Home";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route exact path="/dashborad" component={Dashboard} />
      <Route path="/signup" component={Signup} />
      <Route path="/login" component={Login} />
    </Routes>
  )
}
export default App; 
