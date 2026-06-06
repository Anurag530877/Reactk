import React from 'react';
import ReactDOM from 'react-dom/client'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import HomePage from './Home';
import About from './About';
import Counter from './Counter';
import Contact from './Contact';
import Features from './Feature';
import Services from './Service';
import LoginPage from './Login';
import RegisterPage from './Register';
import Dashboard from './Admin/Deshboard';
import AdminLogin from './Admin/Adminlogin';
import Courses from './Admin/Course';
import AddCourse from './Admin/Addcourses';
import './style.css'
import { HelmetProvider } from 'react-helmet-async';
import Hero from './Hero';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <BrowserRouter>
 <Routes>
    <Route path='/' element={<HomePage/>}/>
    <Route path='login' element={<LoginPage/>}/>
      <Route path='register' element={<RegisterPage/>}/>
    <Route path='/hero' element={<Hero/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/feature' element={<Features/>}/>
      <Route path='/dashboard' element={<Dashboard/>}/>
         <Route path='/adminlogin' element={<AdminLogin/>}/>
           <Route path='/course' element={<Courses/>}/>
          < Route path='/addcourse' element={<AddCourse/>}/>
 </Routes>
 </BrowserRouter>
);
