// package imports
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';

// pages
import Landing from './Pages/Landing'
import Projects from './Pages/Projects';

// componets
import Header from './Components/header'
import LogoAnimation from './Components/LogoAnimation';

function App() {
return <>
  <div>
    <Header/>
    <Landing/>
    <Projects/>
  </div>
</>
}
  

export default App
