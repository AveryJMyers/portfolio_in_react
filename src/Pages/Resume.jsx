import '../styles.css'
import '../App.css'
import React from 'react';
import LandingNav from '../Components/LandingNav';


export default function Resume(){


  let codingExperience = [
    {
      Location: "UC Berkeley Extension Bootcamp",
      title: "Full Stack Web Development",
      date: "(March 2023 - October 2023)",
      skills: [
        "Completed 18 real world like projects, including 3 group projects, and 15 individual projects.",
        "Front End: HTML, CSS, JavaScript, jQuery, React.js, Bootstrap, TailwindCSS, Vite",
        "Back End: Node.js, Express.js, MySQL, MongoDB, GraphQL, REST, JSON, AJAX, HTTP",
        "Deployment: Heroku, Git, shell scripting, unit testing, linting, CI practices.",
        "Other: Group Decision making, timelines, figma, and agile development practices."
      ],
    },
    {
      location: "Wedloc Application",
      title: "Full-Stack Developer",
      date: "(October 2023)",
      skills: [
        "Tested GraphQL queries and mutations using Apollo sandbox.",
        "Created a GraphQL server using Apollo Server and Express.",
        "Created a GraphQL schema using typeDefs and resolvers.",
        "Connected server to client using mutations and queries.",
        "Created a MongoDB database using Mongoose.",
      ]
    },
    {
      location: "Task Titan Application",
      title: "Full-Stack Developer",
      date: "(May 2023)",
      skills: [
        "Designed Models, seeded data, and created routes for a three level task management app.",
        "Implemented back-end routes for creation, deletion, editing, and adding users to projects.",
        "Created a MySQL database and used Sequelize to interact with the database.",
        "Created a RESTful API using Express.js and Node.js.",
        "Created a front-end using Handlebars.js and Bulma CSS.",
      ]
    }
  ];




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
        },
        {
            org: "Kennedy Holdings Inc.",
            title: 'Warehouse Manager',
            date: '(2014-Present)',
            skills: ['Oversaw and optimized in-house shipping logistics, including stocking, delivery, and pick-up processes, enhancing operational workflow.', 'Led and motivated a small team, ensuring efficient inventory management and timely fulfillment of orders.','Created a detailed sales presentation for the CEO, effectively communicating product value and competitive positioning.', 'Sourced new products through extensive research and networking at national and international food shows, diversifying the product portfolio.'],
        },
        {
          org: "Wedloc Application",
          title: "Full-Stack Developer",
          date: "(October 2023)",
          skills: [
            "Conducted comprehensive testing of GraphQL queries and mutations using Apollo Sandbox.",
            "Established a GraphQL server using Apollo Server and Express, enabling efficient data retrieval and manipulation.",
            "Designed and implemented a well-structured GraphQL schema using typeDefs and resolvers, ensuring data consistency and smooth interactions.",
            "Seamlessly connected the server to the client application using GraphQL mutations and queries, enhancing real-time data exchange",
            "Created and managed a MongoDB database using Mongoose, optimizing data storage and retrieval.",
          ]
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
        },
        {
          org:'Task Titan',
          title: 'Back-End Developer',
          date: '2023',
          skills: ['Designed Models, seeded data, and created routes for a three level task management app.', 'Implemented back-end routes for creation, deletion, editing, and adding users to projects.', 'Created a MySQL database and used Sequelize to interact with the database.', 'fadssf afkskfa fakf sfka faksf ad fkda fk af kadkf af kak fa fa fk da kfs'],
        },
        {
          org:'Keller Williams Realty)',
          title: "Independent Contractor",
          date: '(2019-2021)',
          skills: ['Collaborated effectively with a team of realtors, contributing to a cooperative work environment and successful joint ventures', 'Applied creative problem-solving to overcome transaction hurdles, displaying an ability to innovate solutions under pressure', 'Coordinated transactions from start to finish, ensuring a seamless process for all parties involved and showcasing organizational skills.'],
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
        <>
        <LandingNav></LandingNav>
          <section className='resumeSection py-20  mx-64  '>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 justify-start  ">
              {resumeExperience.map((experience, index) => (
                <div key={index} className="flex py-3 px-1 boxShadowOnly rounded flex-col  ">
                    <div className="resumeHeader ml-2 text-start "> 
                        <h2 className="text-2xl font-bold mb-0">{experience.org}</h2>
                        <h3 className="text-1xl font-bold  mb-0">{experience.title}</h3>
                        <p className="text-1xl mb-0 flex-grow border-b pb-4 ">{experience.date}</p>
                    </div>
                  <ul className="ml-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <li className="p-1 text-12 border-b " key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                  <p>{experience.additionalInfo}</p>
                </div>
              ))}
            </div>
          </section>
          </>
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


    // <section className='resumeSection mx-64 py-10 '>
    //       <div className="py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 justify-start  py-10   ">
    //         {resumeExperience.map((experience, index) => (
    //           <div key={index} className="flex flex-col  ">
    //               <div className="resumeHeader ml-2 text-start "> 
    //                   <h2 className="text-2xl font-bold mb-0">{experience.org}</h2>
    //                   <h3 className="text-1xl font-bold  mb-0">{experience.title}</h3>
    //                   <p className="text-1xl mb-0 flex-grow border-b pb-4 ">{experience.date}</p>
    //               </div>
    //             <ul className="ml-2">
    //               {experience.skills.map((skill, skillIndex) => (
    //                 <li className="py-2 border-b " key={skillIndex}>{skill}</li>
    //               ))}
    //             </ul>
    //             <p>{experience.additionalInfo}</p>
    //           </div>
    //         ))}
    //       </div>
    //     </section>