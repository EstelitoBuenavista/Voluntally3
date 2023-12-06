import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import AdminStud from './Admin-students'
import AdminAct from './Admin-actvities'
import AddActivity from './AddActivity'
import AddStudent from './AddStudent'
import Register from './Register'
import { Routes, Route, Link } from 'react-router-dom';

function App() {

    return (
      <>
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="Register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/StudAdmin" element={<AdminStud />} />
        <Route path="/ActAdmin" element={<AdminAct />} />
        <Route path="/AddActivity" element={<AddActivity />} />
        <Route path="/AddStudent" element={<AddStudent />} />
        </Routes>
      </>
    )
  }

  export default App