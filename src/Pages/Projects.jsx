
import '../styles.css'
import '../App.css'
import React from 'react';
import CardButton from '../Components/StyledButton';

export default function Projects(){

    const projects = [
        {
          name: 'Wedloc',
          description: 'Wedloc is a photo/video sharing app for wedding guests. Guests can upload photos/videos, add comments, like, and even livechat.',
          techsUsed: ['React.js', 'Node.js', 'MongoDB', 'GraphQL', 'Cloudinary', 'Socket.io', 'TailwindCSS', '+ more'],
          techUsed: [ 'nodeIcon.png', 'graphqlIcon.png', 'cloudinaryIcon.png', 'tailwindIcon.png'],
          type: 'Full Stack',
          img: 'wedloc.jpg'
        },
        {
          name: 'Task Titan',
          description: 'Task Titan is a three level task management app. Project admins can add users and assign task. Workers may view taks and comment on them. Clients may see the progress of their projects.',
          techsUsed: ['Node.js', 'Express.js', 'MySQL', 'Handlebars.js '],
          type: 'Full Stack',
          img: 'taskTitan.png'
        },
        {
          name: 'Loot Vault',
          description: 'Loot Vault is a site for gamers to find the best deals on their favorite games. Users can search for games and see the best deals from multiple sites.',
          techsUsed: ['HTML', 'CSS', 'Javascript', 'Bulma CSS', 'APIs '],
          type: 'Front End',
          img: 'lootVault.png'
        },
        {
          name: 'Tech Blog',
          description: 'A blog thats allows developers post, comment, and like posts.',
          techsUsed: ['Node.js', 'Express.js', 'MySQL', 'Handlebars.js', 'Sequlize'],
          type: 'Full Stack',
        },
        {
          name: 'Employee Directory',
          description: 'A command line application to manage a company\'s employee database, using Node.js, Inquirer, and MySQL.',
          techsUsed: ['Node.js', 'MySQL', ],
          type: 'Back End',
          img: 'photo'
        },
        {
          name: 'Weather Dashboard',
          description: 'A weather dashboard that allows users to search for a city and see the current weather and 5 day forecast.',
          techsUsed: ['HTML ', 'CSS', 'JavaScript', 'APIs '],
          type: 'Front End', 
        },
        {
          name: 'Javascript Quiz',
          description: 'A timed quiz that tests the users knowledge of javascript and tracks their high scores.',
          techsUsed: ['HTML', 'CSS', 'Javascript'],
          techUsed: ['htmlIcon.png', 'cssIcon.png', 'javascriptIcon.png'],
          type: 'Front End',
        }

      ];

    return (
      <section className="projectSection py-20">
        <div className=" cardContainer grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div key={index} className="border rounded boxShadow projectCards p-4">
              <div>
                <div className="flex justify-between">
                  <h2 className=" text-3xl font-bold mb-0  ">{project.name} </h2> 
                  <div className="flex ">
                    <CardButton>Github</CardButton>
                    <CardButton>Deployed Site</CardButton>
                  </div>
                </div>
                <h3 className=" text-1x1  border-b mb-4 pb-1 ">({project.type})</h3>
                <p className="border-b my-4 py-1 h-36 ">{project.description}</p>
                <div className="h-62">
                  <img className="w-full boxShadow projectPhoto rounded projectHover py-1 my-8 h-64 " src={`../photos/${project.img}`} alt={project.name} />
                </div>
                <div className="h-36">
                  <h4 className=" text-2xl py-1 font-bold">Tech Used:</h4>
                  {/* <p className="my-4 py-2">{project.techsUsed.join(', ')}</p> */}
                  <p className="grid grid-cols-2 w-80 ">
                    {project.techsUsed.map((tech, index) => (
                      <span key={index} className=" scaleHover rounded m-0.5 ">
                        {tech}
                      </span>
                    ))}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
}
        
