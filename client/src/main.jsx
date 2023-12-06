import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './Header'
import Footer from './Footer'
import Home from './Home'
import Login from './Login'
import Profile from './Profile'
import AdminStud from './Admin-students'
import AdminAct from './Admin-actvities'
import AddActivity from './AddActivity'
import App from './App'
import StudRow from './components/StudRow'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter> 
    <Header/>
    <App/>
    <Footer/>
    </BrowserRouter>
  </React.StrictMode>,
)
