
import '../styles.css'
import '../App.css'
import React from 'react';
import ProjectButton from '../Components/HoverButton';
import StyledButton from '../Components/StyledButton';
import HoverButton from '../Components/HoverButton';
import Header from '../Components/Header';
import LandingNav from '../Components/LandingNav';


export default function Projects(){

    const projects = [
        {
          name: 'Wedloc',
          description: 'Wedloc is a photo/video sharing app for wedding guests. Guests can upload photos/videos, add comments, like, and even livechat.',
          techsUsed: ['React', 'Node', 'MongoDB', 'GraphQL', 'Cloudinary', 'Socket.io', 'TailwindCSS', '+ more'],
          techUsed: [ 'nodeIcon.png', 'graphqlIcon.png', 'cloudinaryIcon.png', 'tailwindIcon.png'],
          type: 'Full Stack',
          deployedUrl: 'https://wedloc-84c89e3ae29d.herokuapp.com/',
          githubUrl: 'https://github.com/markthos/wedloc',
          img: 'wedloc.jpg'
        },
        {
          name: 'Task Titan',
          description: 'Task Titan is a three level task management app. Project admins can add users and assign task. Workers may view taks and comment on them. Clients may see the progress of their projects.',
          techsUsed: ['Node', 'Express', 'MySQL', 'Handlebars'],
          type: 'Full Stack',
          deployedUrl: 'https://task-titan-bec51c55ebe5.herokuapp.com/',
          githubUrl: 'https://github.com/markthos/Task-Titan',
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
          deployedUrl: 'https://torvec.github.io/project_1_Loot_Vault/',
          githubUrl: 'https://github.com/Torvec/project_1_Loot_Vault',
          img: 'techBlog.png'
        },
        // {
        //   name: 'Employee Directory',
        //   description: 'A command line application to manage a company\'s employee database, using Node.js, Inquirer, and MySQL.',
        //   techsUsed: ['Node.js', 'MySQL', ],
        //   type: 'Back End',
        //   img: 'photo'
        // },
        // {
        //   name: 'Weather Dashboard',
        //   description: 'A weather dashboard that allows users to search for a city and see the current weather and 5 day forecast.',
        //   techsUsed: ['HTML ', 'CSS', 'JavaScript', 'APIs '],
        //   type: 'Front End', 
        // },
        // {
        //   name: 'Javascript Quiz',
        //   description: 'A timed quiz that tests the users knowledge of javascript and tracks their high scores.',
        //   techsUsed: ['HTML', 'CSS', 'Javascript'],
        //   techUsed: ['htmlIcon.png', 'cssIcon.png', 'javascriptIcon.png'],
        //   type: 'Front End',
        // }

      ];


    return (
        <section className='projectSection'>
        <LandingNav></LandingNav>
        <div className="projectSection py-20 sm:mx-20 md:mx-40 lg:mx-60 ">
          <div className=" cardContainer grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className=" shadow rounded  projectCards p-4">
                <div className="cardHeader border-b my-1  pb-4 items-center text-center flex justify-between">
                    <div className="cardHeaderLeft text-start">
                      <h2 className=" text-3xl font-bold mb-0  ">{project.name} </h2> 
                      <h3 className=" text-1x1 ">({project.type})</h3>
                    </div>
                    <div className="flex justify-end cardHeaderRight w-1/2 ">
                      <StyledButton type="project" className='githubButton' redirect={project.githubUrl}>Github</StyledButton>
                      <StyledButton type="project" redirect={project.deployedUrl} className='deployedButton'>Deployed</StyledButton>
                    </div>
                </div>
                  <p className=" h-36 my-4 pb-1 ">{project.description}</p>
                  <div className="h-62">
                    <a href={project.deployedUrl} >
                      <img className="w-full shadow projectPhoto  rounded projectHover my-4  border-b h-64 " src={`../photos/${project.img}`} alt={project.name} />
                    </a>
                  </div>
                  <div className="h-36">
                    <h4 className=" text-2xl py-1 font-bold">Tech Used:</h4>
                    {/* <p className="my-4 py-2">{project.techsUsed.join(', ')}</p> */}
                    <p className="grid grid-cols-3  ">
                      {project.techsUsed.map((tech, index) => (
                        <span key={index} className=" scaleHover rounded m-0.5 ">
                          {tech}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
            ))}
          </div>
        </div>
        </section>
    );
}
        
