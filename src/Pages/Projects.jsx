
import '../styles.css'
import '../App.css'
import React from 'react';
import ProjectButton from '../Components/HoverButton';
import StyledButton from '../Components/StyledButton';
import HoverButton from '../Components/HoverButton';
import Header from '../Components/Header';
import LandingNav from '../Components/LandingNav';
import MobileNav from '../Components/MobileNav';

import Wedloc from '../Photos/wedloc.jpg';
import LootVault from '../Photos/lootVault.png';
import TechBlog from '../Photos/techBlog.png';
import TaskTitan from '../Photos/taskTitan.png';



export default function Projects(){

    const projects = [
        {
          name: 'Wedloc',
          description: "Wedloc is a cutting-edge web application tailored for wedding events. It offers a dynamic platform for guests, photographers, and videographers to collectively share and engage with wedding media. The app facilitates the organization and display of wedding photos and videos, creating a more interactive and memorable experience. Its user-friendly interface and innovative features make it an essential tool for capturing and reliving the cherished moments of wedding events.",
          techsUsed: ['React', 'Node', 'MongoDB', 'GraphQL', 'Cloudinary', 'Socket.io', 'TailwindCSS', '+ more'],
          techUsed: [ 'nodeIcon.png', 'graphqlIcon.png', 'cloudinaryIcon.png', 'tailwindIcon.png'],
          type: 'Full Stack',
          deployedUrl: 'https://wedloc-84c89e3ae29d.herokuapp.com/',
          githubUrl: 'https://github.com/markthos/wedloc',
          img: Wedloc 
        },
        {
          name: 'Task Titan',
          description: "Task-Titan is an innovative project management web app, perfect for team collaboration. It provides project managers with tools to create, track, and update tasks efficiently. Team members can interact through comments and status updates, improving team coordination and project transparency. This web app, developed during the UC Berkeley Full Stack Web Development Bootcamp and finished in August 2023, is especially useful for handling multiple projects, streamlining task management and enhancing team productivity.",
          techsUsed: ['Node', 'Express', 'MySQL', 'Handlebars'],
          type: 'Full Stack',
          deployedUrl: 'https://task-titan-bec51c55ebe5.herokuapp.com/',
          githubUrl: 'https://github.com/markthos/Task-Titan',
          img: TaskTitan
        },
        {
          name: 'Loot Vault',
          description: 
            "Loot Vault, developed during the UC Berkeley Full Stack Web Development Bootcamp, is a sleek web application for budget-conscious gamers. It features a responsive design and simple navigation, enabling users to easily find the best deals on games. Integrating APIs like RAWG and CheapShark, it offers updated lists of top-rated and free games. Completed in June 2023, this project showcases practical utility and innovative design, making it an impressive showcase of the team's skills.",
          techsUsed: ['HTML', 'CSS', 'Javascript', 'Bulma CSS', 'APIs '],
          type: 'Front End',
          img: LootVault
        },
        {
          name: 'Tech Blog',
          description: 
          "The Tech Blog is a CMS-style platform designed for developers, mimicking Wordpress. It allows tech enthusiasts to publish and discuss blog posts on technical subjects. Built from the ground up and hosted on Heroku, it follows the MVC architecture, using Handlebars.js for templates, Sequelize as the ORM, and express-session for authentication. Key features include post creation and commenting, a dashboard for content management, and secure login. This blog serves as a hub for developers to exchange ideas and stay updated on tech trends.",
          techsUsed: ['Node.js', 'Express.js', 'MySQL', 'Handlebars.js', 'Sequlize'],
          type: 'Full Stack',
          deployedUrl: 'https://torvec.github.io/project_1_Loot_Vault/',
          githubUrl: 'https://github.com/Torvec/project_1_Loot_Vault',
          img: TechBlog
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
        {window.innerWidth <= 700 ? (
          <MobileNav /> // Display MobileNav on screens with width less than or equal to 1024px
        ) : (
          <LandingNav /> // Display LandingNav on screens with width greater than 1024px
        )}
        <div className="projectSection mb-10 sm:mx-20 md:mx-40 lg:mx-60 ">
          <div className=" cardContainer grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-12">
            {projects.map((project, index) => (
              <div key={index} className=" shadow rounded  projectCards p-4">
                <div className="cardHeader pb-5 border-b my-1 items-center text-center flex justify-between">
                    <div className="cardHeaderLeft text-start">
                      <h2 className="text-2xl text-black font-bold mb-0  ">{project.name} </h2> 
                      <h3 className=" text-1x1 ">({project.type})</h3>
                    </div>
                    <div className="flex justify-end cardHeaderRight w-1/2 ">
                      <StyledButton type="project" className='githubButton' redirect={project.githubUrl}>Git</StyledButton>
                      <StyledButton type="project" redirect={project.deployedUrl} className='deployedButton'>App</StyledButton>
                    </div>
                </div>
                  <p className=" h-64 my-4 pb-1 text-black ">{project.description}</p>
                  <div className="h-62">
                    <a href={project.deployedUrl} >
                      <img className="w-full shadow projectPhoto  rounded projectHover my-4 pb-5 h-64 mb-5" src={project.img} alt={project.name} />
                    </a>
                  </div>
                  <div className="h-36">
                    <h4 className=" text-2xl py-1 font-bold text-black">Tech Used:</h4>
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
        

