// package imports
import './App.css'
import React from 'react';
import ReactDOM from 'react-dom';

// pages
import Landing from './Pages/Landing'

// componets
import Header from './Components/header'
import LogoAnimation from './Components/LogoAnimation';

function App() {
return <>
  <div>
    <Header/>
    <Landing/>
  </div>
</>
}
  

export default App
