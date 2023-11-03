import '../styles.css'
import '../App.css'
import React from 'react';

export default function Resume(){
    let resumeExperience = [
        {
            org: "UC Berkeley Extension",
            title: "Full Stack Web Development",
            date: "March 2023 - October 2023",
            skills: [
                "Completed a rigorous 6-month program focused on full stack web development.",
                "Front End: HTML, CSS, JavaScript, jQuery, React.js, Bootstrap, TailwindCSS, Vite",
                "Back End: Node.js, Express.js, MySQL, MongoDB, GraphQL, REST, JSON, AJAX, HTTP",
                "Deployment: Heroku, Git, shell scripting, unit testing, linting, CI practices.",
                "Other: Group Decision making, timelines, figma, and agile development practices."
            ],
            additionalInfo: ""
        },
        {
            org: "UC Berkeley Extension",
            skills: ['']
        }
    ];
    return (
        <section className="resumeSection py-20  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 ">
          {resumeExperience.map((experience, index) => (
            <div key={index}>
                <div className="resumeHeader"> 
                    <h2 className="text-3xl text-center font-bold mb-0">{experience.org}</h2>
                    <h3 className="text-1xl text-center font-bold mb-0">{experience.title}</h3>
                    <p className="text-1xl text-center font-bold mb-0 border-b pb-4 ">({experience.date})</p>
                </div>
              <ul>
                {experience.skills.map((skill, skillIndex) => (
                  <li className="py-2 border-b" key={skillIndex}>{skill}</li>
                ))}
              </ul>
              <p>{experience.additionalInfo}</p>
            </div>
          ))}
        </section>
      );
    }


    // skills: [
    //     "Completed a rigorous 6-month program focused on full stack web development.",
    //     // "Gained proficiency in computer science concepts such as algorithms, time complexity, Big O notation, and data structures using JavaScript.",
    //     "Created and managed APIs with REST, JSON, AJAX, GraphQL, and HTTP.",
    //     "Handled data in MySQL and MongoDB, performing CRUD operations and managing databases.",
    //     "Developed responsive web applications utilizing HTML, CSS, JavaScript, jQuery, and React.js.",
    //     "Implemented server-side development emphasizing user authentication, template engines, and the MERN stack.",
    //     "Acquired skills in deployment using Heroku, Git, shell scripting, unit testing, linting, and CI practices."
    // ],