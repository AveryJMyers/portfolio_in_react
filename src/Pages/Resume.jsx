import '../styles.css'
import '../App.css'
import React from 'react';

export default function Resume(){
    let resumeExperience = [
        {
          org: "UC Berkeley Extension",
          title: "Full Stack Web Development",
          date: "(March 2023 - October 2023)",
          skills: [
              "Completed 18 real world like projects, including 3 group projects, and 15 individual projects.",
              "Front End: HTML, CSS, JavaScript, jQuery, React.js, Bootstrap, TailwindCSS, Vite",
              "Back End: Node.js, Express.js, MySQL, MongoDB, GraphQL, REST, JSON, AJAX, HTTP",
              "Deployment: Heroku, Git, shell scripting, unit testing, linting, CI practices.",
              "Other: Group Decision making, timelines, figma, and agile development practices."
        ],
          additionalInfo: ""
        },
        {
            org: "Kennedy Holdings Inc.",
            title: 'Warehouse Manager',
            date: '(2014-Present)',
            skills: ['Oversaw and optimized in-house shipping logistics, including stocking, delivery, and pick-up processes, enhancing operational workflow.', 'Led and motivated a small team, ensuring efficient inventory management and timely fulfillment of orders.','Created a detailed sales presentation for the CEO, effectively communicating product value and competitive positioning.', 'Sourced new products through extensive research and networking at national and international food shows, diversifying the product portfolio.'],
            additionalInfo: ''
        },
        // {
        //     org: "UC Berkeley Extension",
        //     title: "Full Stack Web Development",
        //     date: "(March 2023 - October 2023)",
        //     skills: [
        //         "Completed 18 real world like projects, including 3 group projects, and 15 individual projects.",
        //         "Front End: HTML, CSS, JavaScript, jQuery, React.js, Bootstrap, TailwindCSS, Vite",
        //         "Back End: Node.js, Express.js, MySQL, MongoDB, GraphQL, REST, JSON, AJAX, HTTP",
        //         "Deployment: Heroku, Git, shell scripting, unit testing, linting, CI practices.",
        //         "Other: Group Decision making, timelines, figma, and agile development practices."
        //   ],
        //   additionalInfo: ""
        // },
        {
          org:'Cedarland Real Estate',
          title: "Buyer's Agent",
          date: '(2021-2023)',
          skills: ['Collaborated effectively with a team of realtors, contributing to a cooperative work environment and successful joint ventures', 'Applied creative problem-solving to overcome transaction hurdles, displaying an ability to innovate solutions under pressure', 'Coordinated transactions from start to finish, ensuring a seamless process for all parties involved and showcasing organizational skills.'],
          additionalInfo: ''
        },
        // {
        //   org:'',
        //   title: '',
        //   date: '',
        //   skills: [],
        //   additionalInfo: ''
        // },

    ];
    // py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10
    return (
      <section className='resumeSection '>
          {/* <div className='' >
              <h2 className="text-2xl w-full font-bold mb-0">Avery Myers</h2>
              <h3 className="text-1xl w-full  font-bold mb-0">Gig Harbor, WA</h3>
              <h3 className="text-1xl font-bold mb-0">Full Stack Web Developer</h3>
              <h3 className="text-1xl font-bold mb-0">(360)-509-8887</h3>
          </div> */}
          <div className=" flex-wrap justify-start py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10">
            {resumeExperience.map((experience, index) => (
              <div key={index} className=" ">
                  <div className="resumeHeader"> 
                      <h2 className="text-2xl text-center font-bold mb-0">{experience.org}</h2>
                      <h3 className="text-1xl text-center font-bold  mb-0">{experience.title}</h3>
                      <p className="text-1xl text-center mb-0 border-b pb-4 ">{experience.date}</p>
                  </div>
                <ul>
                  {experience.skills.map((skill, skillIndex) => (
                    <li className="py-2 border-b" key={skillIndex}>{skill}</li>
                  ))}
                </ul>
                <p>{experience.additionalInfo}</p>
              </div>
            ))}
          </div>
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