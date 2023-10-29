
import '../styles.css'
import '../App.css'
import React from 'react';

export default function Projects(){

    const projects = [
        {
          name: 'Wedloc',
          description: 'Wedloc is a photo/video sharing app for wedding guests. Guests can upload photos/videos, add comments, like, and even livechat.',
          techsUsed: ['React.js ', 'Node.js ', 'MongoDB ', 'GraphQL ', 'Cloudinary ', 'Socket.io ', 'TailwindCSS ', '+ more '],
          type: 'Full Stack',
          img: 'wedloc.jpg'
        },
        {
          name: 'Task Titan',
          description: 'Task Titan is a three level task management app. Project admins can add users and assign task. Workers may view taks and comment on them. Clients may see the progress of their projects.',
          techsUsed: ['Node.js ', 'Express.js ', 'MySQL ', 'Handlebars.js '],
          type: 'Full Stack',
          img: 'taskTitan.png'
        },
        {
          name: 'Loot Vault',
          description: 'Loot Vault is a site for gamers to find the best deals on their favorite games. Users can search for games and see the best deals from multiple sites.',
          techsUsed: ['html ', 'css ', 'javascript ', 'Bulma CSS ', 'APIs '],
          type: 'Front End',
          img: 'photo'
        },
        {
          name: 'Tech Blog',
          description: 'A blog thats allows developers post, comment, and like posts.',
          techsUsed: ['Node.js ', 'Express.js ', 'MySQL ', 'Handlebars.js ', 'Sequlize'],
          type: 'Full Stack',
        },
        {
          name: 'Employee Directory',
          description: 'A command line application to manage a company\'s employee database, using Node.js, Inquirer, and MySQL.',
          techsUsed: ['Node.js ', 'MySQL ', 'Inquirer '],
          type: 'Back End',
          img: 'photo'
        },
        {
          name: 'Weather Dashboard',
          description: 'A weather dashboard that allows users to search for a city and see the current weather and 5 day forecast.',
          techsUsed: ['html ', 'css ', 'javascript ', 'APIs '],
          type: 'Front End', 
        },
        {
          name: 'Javascript Quiz',
          description: 'A timed quiz that tests the users knowledge of javascript and tracks their high scores.',
          techsUsed: ['html ', 'css ', 'javascript '],
          type: 'Front End',
        }

      ];

    return (
      <section className="projectSection py-20">
        <div className=" cardContainer grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="border projectCards p-4">
              <div>
                <h2 className=" text-3xl font-bold ">{project.name} </h2>
                <h3 className=" text-1x1 border-b mb-4 pb-4">({project.type})</h3>
                <p className="border-b my-4 py-4">{project.description}</p>
                <img className="w-full h-auto border-b my-4 py-4" src={`../photos/${project.img}`} alt={project.name} />
                <p className="my-4 py-4">Techs Used: {project.techsUsed}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}
        
