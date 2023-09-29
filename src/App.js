
import { useState } from 'react';
import './App.css';
import ProjectList from './componets/ProjectList'

function App() {
  const [projects, setProjects] = useState(['challenge1','challenge2'])
  return (
    <>
    <ProjectList projectList={projects}/>
    <h1> !dlroW olleH</h1>
    </>
  )
}

export default App;
 