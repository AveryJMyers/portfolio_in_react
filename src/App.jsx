// package imports
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';

// pages
import Landing from './Pages/Landing'
import Projects from './Pages/Projects';

// componets
import Header from './Components/Header'
import LogoAnimation from './Components/LogoAnimation';
import Cloud from './Components/Cloud';

function App() {
return <>
  <div>
    <Header/>
    <Cloud/>
    <Landing/>
    <Projects/>
  </div>
</>
}
  

export default App
