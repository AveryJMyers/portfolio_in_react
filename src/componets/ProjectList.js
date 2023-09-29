import React from 'react'
import ProjectList from './Project'

export default function ProjectList({ projects }) {
  return (
    projectList.map( project => {
      return <ProjectList projectList={ projects }/>
    })
  )
}
