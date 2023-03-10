// src/components/App.js
import { Routes, Route } from 'react-router-dom'
// import supabaseClient from './supabaseClient'
import Signup from './components/Signup'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import About from "./components/About";
import Home from "./components/Home";
function App() {

  console.log(process.env.REACT_APP_SUPABASE_URL)
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="signup" element={<Signup />} />
      <Route path="login" element={<Login />} />
    </Routes>
  )
}
export default App; 
