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

// componets
import Header from './Components/Header'
import LogoAnimation from './Components/LogoAnimation';
import Cloud from './Components/Cloud';
function App() {
return <>
   <div>
      <Router>
        <Routes>
          <Route path="/" element={<SingleLanding />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/About" element={<About />} />
          {/* Add other routes as needed */}
        </Routes>
      </Router>
    </div>
</>
}
  

export default App
