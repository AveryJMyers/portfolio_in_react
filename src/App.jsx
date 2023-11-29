// package imports
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// pages
import Landing from './Pages/Landing'
import Projects from './Pages/Projects';
import SingleLanding from './Pages/SingleLanding';
import Resume from './Pages/Resume';
import About from './Pages/About';
import Contact from './Pages/Contact';
import LandingRestyle from './Pages/LandingRestyle';


// componets
import Header from './Components/Header'
import LogoAnimation from './Components/LogoAnimation';
import Cloud from './Components/Cloud';
function App() {
 
console.log("App.js")
// const base = '/portfolio_in_react'


return <>
<Router>
  <Routes>
    <Route path={`/`} element={<LandingRestyle/>} />
    <Route path={`/Projects`} element={<Projects />} />
    <Route path={`/Resume`} element={<Resume />} />
    <Route path={`/Contact`} element={<Contact />} />
    <Route path={`/About`} element={<About />} />
  </Routes>
</Router>
</>
}
  

export default App
