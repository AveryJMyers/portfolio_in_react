import '../styles.css'
import '../App.css'
import React from 'react';
import LandingNav from '../Components/LandingNav';
import MobileNav from '../Components/MobileNav';
import { useForm, ValidationError } from '@formspree/react';



export default function Resume(){

  const [state, handleSubmit] = useForm("xbjvbqyv");
  if (state.succeeded) {
      return <p>Thanks for joining!</p>;

  }

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
              "Completed 18 projects mirroring real-world scenarios, enhancing practical coding and development skills.",
              "Group Projects (3 total): Collaborated with diverse teams to develop complex web applications. Responsibilities included brainstorming, design, coding, and debugging. Projects involved using Agile methodologies and Git for version control.",
              "Front End Development: Created user-friendly interfaces using HTML, CSS, JavaScript, jQuery, and React.js. Focused on responsive design principles and optimized for different devices using Bootstrap and TailwindCSS.",
              "Back End Development: Built server-side logic using Node.js and Express.js. Managed data using MySQL and MongoDB. Implemented RESTful services, GraphQL APIs, and AJAX calls for dynamic content.",
        
        ],
        },
        {
            org: "Kennedy Holdings Inc.",
            title: 'Warehouse Manager',
            date: '(2014-Present)',
            skills: [
              'Conceptualized and executed a persuasive pitch strategy for the Owner, culminating in the successful negotiation and closure of a business deal exceeding 7 figures.', 
              'Actively represented the company at national and international trade shows, engaging in B2B networking to broaden industry connections and foster new opportunities.', 
              'Efficiently managed in-house shipping and inventory, ensuring streamlined logistics and precise inventory levels to bolster the sales process.',
              "Played a pivotal role in a successful product rebranding initiative, collaborating with cross-functional teams to rejuvenate the brand identity, encompassing logo redesign, messaging, and visuals, significantly enhancing our product's market image."
          ],
        },
        {
          org: "Wedloc Application",
          title: "Full-Stack Developer",
          date: "(October 2023)",
          skills: [
            "Played a pivotal role in developing 'WedLoc', a unique platform for wedding photographers and videographers to organize and showcase media.",
            "Focused on backend development: Established a GraphQL server using Apollo Server and Express for efficient data handling.",
            "Designed a robust GraphQL schema with typeDefs and resolvers, ensuring consistent and smooth data interactions.",
            "Integrated GraphQL queries and mutations for seamless client-server communication, facilitating real-time data exchange.",
            "Contributed to frontend development: Implemented features like media comments, real-time chat, and event sharing for an interactive user experience.",
          ]
        },
        {
          org:'Cedarland Real Estate',
          title: "Buyer's Agent",
          date: '(2021-2023)',
          skills: [
            'Managed a comprehensive CRM ensuring exceptional client relations and efficient follow-ups.',
            'Skillfully conducted cold calling to convert prospects provided by a third party into viable leads, enhancing client acquisition.',
            'Efficiently organized timelines and managed communications with multiple points of contact, ensuring seamless transaction processes.',
            'Performed detailed comparative market assessments, providing clients with valuable insights for informed real estate decisions.',
            'Developed and implemented creative solutions for deal closures, navigating through various challenges to achieve successful outcomes.'
            ],
        },
        {
          org:'Task Titan',
          title: 'Back-End Developer',
          date: 'Aug 2023',
          skills: [
            'Developed and structured the backend architecture for Task Titan, a complex task management application, by designing models, seeding data, and creating efficient routes.',
            "Implemented robust back-end routes for user interactions such as project creation, deletion, editing, and user assignment, enhancing the application's functionality and user experience.",
            'Designed and managed a MySQL database, utilizing Sequelize for database interactions, ensuring smooth data handling and storage solutions.',
            'Developed a multi-tier user access system to enhance app security and functionality, ensuring role-specific permissions and data protection.'
        ],
        },
        {
          org:'Keller Williams Realty',
          title: "Independent Contractor",
          date: '(2019-2021)',
          skills: [
            'Conducted open houses as a primary method for lead generation, demonstrating strong interpersonal skills and an effective sales approach.',
            'Managed client interactions and follow-ups using Salesforce, ensuring efficient client relationship management and record keeping.',
            'Engaged in door-to-door outreach to expand client base, showcasing persistence and effective communication skills in direct marketing.',
            'Gained practical real estate insights and expertise through collaboration with experienced agents.',
            'Performed Comparative Market Analyses (CMAs) to provide accurate property valuations, highlighting market analysis skills.'
        ],
        },
    ];

    return (
        <>
        {/* <LandingNav></LandingNav> */}
        {window.innerWidth <= 700 ? (
            <MobileNav /> // Display MobileNav on screens with width less than or equal to 1024px
            ) : (
            <LandingNav /> // Display LandingNav on screens with width greater than 1024px
            )}
          <section className='resumeSection mb-10 sm:mx-20 md:mx-40 lg:mx-60 '>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-10 justify-start  ">
              {resumeExperience.map((experience, index) => (
                <div key={index} className="flex py-3 px-1  shadow rounded flex-col  ">
                    <div className="resumeHeader ml-2 text-start "> 
                        <h2 className="text-2xl font-bold text-black mb-0 uppercase">{experience.org}</h2>
                        <h3 className="text-1xl font-bold mb-0 uppercase">{experience.title}</h3>
                        <p className="text-1xl mb-0 flex-grow  border-b pb-4 uppercase ">{experience.date}</p>
                    </div>
                  <ul className="ml-2">
                    {experience.skills.map((skill, skillIndex) => (
                      <li className="p-1 text-12 border-b  last:border-b-0 text-black" key={skillIndex}>{skill}</li>
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