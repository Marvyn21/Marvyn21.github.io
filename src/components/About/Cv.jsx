import React from "react";

class Cv extends React.Component {
  state ={
    bio: "Innovative Programmer and Internet Entrepreneur striving to make the world a more unified and connected place. A creative thinker, adept in software development, and working with modern technologies",
    attributes: ["Good communication skills", "Effective team player and leader", "Prompt action on feedback & attention to detail"],
    skills: ["Patterns (MVC), REST APIs", "Testing & linting", "CI/CD", "Team leadership"],
    ProfessionalSkills: [
      {
        name: "Python",
        level: {width: "87%"}
      },
      {
        name: "Flask",
        level: { width: "90%" }
      },
      {
        name: "Django",
        level: {width: "87%"}
      },
      {
        name: "Docker",
        level: {width: "83%"}
      },
      {
        name: "Kubernetes",
        level: {width: "80%"}
      },
      {
        name: "PostgreSQL",
        level: {width: "85%"}
      },
      {
        name: "MySQL",
        level: {width: "80%"}
      },
      {
        name: "GCP",
        level: {width: "78%"}
      },
      {
        name: "AWS",
        level: {width: "75%"}
      },
      {
        name: "Digital Ocean",
        level: {width: "84%"}
      },
      {
        name: "Git",
        level: {width: "90%"}
      },
      {
        name: "Heroku",
        level: {width: "84%"}
      },
    ],
    employmentHistory: [
      {
        company: "TechnoServe Group",
        title: "Software Developer",
        location: "Remote",
        from: "August, 2021",
        to: "March, 2023",
        projects: [
          {
            from: "August, 2021",
            to: "March, 2023",
            descriptions: [
              "As part of a team, I created a web application for the company that reduced the time it took to complete a specific development task from 3 days to 2 days, resulting in a 30% reduction in development time. Utilizing API integration and Redux state management, I improved user satisfaction scores by 20%.",
              "Working closely with a team of developers and designers, I developed modular front-end user-interfaces and back-end services using JavaScript, Node.js, and React. Additionally, I optimized database schemas with normalized data to improve system performance. To upgrade application performance by 30%, I implemented multithreading and optimized SQL queries, resulting in faster execution through parallel processing techniques.",
            ],
            technologies: ["JavaScript (ReactJS)", "Flask", "Django", "Redux", "API Integration"],
          },
        ]
      },
      {
        company: "Digital Dive Web Solutions",
        title: "Frontend Developer",
        location: "Nairobi, Kenya",
        from: "01/2020",
        to: "06/2021",
        projects: [
          {
            from: "01/2020",
            to: "06/2021",
            descriptions: [
              "Developed highly interactive single page applications utilizing modern web technologies such as HTML/CSS, and JavaScript (ReactJS), and adhering to web accessibility and design standards.",
              "Improved site stability and increased user engagement by increasing unit test coverage by 30% through implementing automated testing processes. Wrote unit tests and performed code reviews, troubleshooted and debugged issues as they arose, and optimized application performance to improve user experience. These efforts resulted in increased stability and performance of the organization's digital products, leading to greater user engagement and satisfaction.",
            ],
            technologies: ["HTML/CSS", "JavaScript (ReactJS)", "Unit Testing", "Web Accessibility"],
          },
        ],
      },
    ]
  }
  render() {
    return (
      <div className="p-4 text-dark">
        <img
          src="https://res.cloudinary.com/dp5j2kwic/image/upload/v1692777423/a3vome9swyqloopzyzo6.png"
          width="150"
          height="150"
          className="rounded mx-auto d-block img-responsive"
          alt=""
        />
        <br></br>
        <br></br>
        <div className="text-center">
          Marvyn Kiplagat Rogony,
          <label className="text-dark">&nbsp;&nbsp;Software Engineer</label>
          <br></br>
          Email: marvynrogony@gmail.com
          <br></br>
          Mobile No. +254-719-127-027
          <br></br>
          Languages: English, Kiswahili
          <br></br>
          Nationality: Kenyan
          <br></br>
          <div className="col-md-6 text-center mt-2 mx-auto">
            <a
              href="https://github.com/Marvyn21"
              target="_blank"
              rel="noopener noreferrer"
              className="text-dark"
            >
              <img
                width="40"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTZDQ1nLIpshq9ubfuv20tS28rc3i-rxyJMod0A_V-_5caaB34N"
                alt=""
              />
            </a>
            <a
              href="https://www.linkedin.com/in/marvyn-rogony/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="40"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQfrhZWlM-4YJTffhpEWnZQI1cfU8JUI4OnE9JwMPuKexfzuT4v"
                alt=""
              />
            </a>
            <a
              href="https://stackoverflow.com/users/21072496/marvyn-kiplagat" 
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                width="40"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTgKY90PcGBlcFiOt_7vgJI7kphQgEGGW05vmQW1w50ofZI1J1q"
                alt=""
              />
            </a>
          </div>
        </div>

        <hr></hr>

        <div className="text-left text-sm">
          <h6>
            <b>Profile</b>
          </h6>
          <p className="p-2 text-dark">
            {this.state.bio}
          </p>
        </div>
        <hr></hr>

        <div className="text-left text-sm">
          <h6>
            <b>Skills</b>
          </h6>
          <div className="container-fluid row">
            <div className="col-6 p-1">
              Personal Attributes
              <hr className="normal-hr-2"></hr>
              <ul className="pl-4">
                {this.state.attributes.map(attribute =>(<li>{attribute}</li>))}
              </ul>
              Other Skills
              <hr className="normal-hr-2"></hr>
              <ul className="pl-4">
              {this.state.skills.map(skill =>(<li>{skill}</li>))}
              </ul>
            </div>
            <div className="col-6 p-1">
              Professional skills
              <hr className="normal-hr-2"></hr>
              {this.state.ProfessionalSkills.map(skill =>(
              <div>
              {skill.name}
              <div class="progress" style={{ height: "6px" }}>
                <div
                  class="progress-bar bg-dark"
                  role="progressbar"
                  style={skill.level}
                  aria-valuenow="95"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
              </div>
              ))}

            </div>
          </div>

          <div className="text-left text-sm page-break">
            <hr></hr>
            <h6>
              <b>Employment History</b>
            </h6>
            {this.state.employmentHistory.map(employment => (
              <div>
            <hr className="bold-hr-3"></hr>

            <strong>{employment.title} at {employment.company}, {employment.location}</strong><br></br>
            <h6 className="text-uppercase text-secondary small">{employment.from} - {employment.to}</h6>

            <br></br>
            {employment.projects.map(project =>(
            <div>
            <i className="p-2" style={{ fontSize: "11px" }}>
              {project.from} - {project.to}
            </i>
            {project.descriptions.map(description=>(
              <div>
              <p className="pl-2 text-dark">
                {description}
            </p>
              </div>
            ))}
              <p className="pl-1 h6 text-lg">Technologies used:</p>
              <ul className="pl-4">
              {project.technologies.map(technology =>(<li>{technology}</li>))}
            </ul>
            <hr className="normal-hr-2"></hr>
            </div>
              ))}
              </div>
            ))}
          </div>
        </div>

        <hr></hr>
        <div className="text-left text-sm">
          <h6>
            <b>Education</b>
          </h6>
          Bachelor of Science in Applied Computing, KCA University
          of Kenya, Nairobi
          <br></br>
          <i className="p-2" style={{ fontSize: "11px" }}>
            May, 2019 - Dec 2022
          </i>
          <p className="pl-2 text-dark">
            This course has helped to build my understanding of a wide range of
            software, and technological ICT skills required by the industry
          </p>
        </div>

        <hr></hr>

        <hr></hr>
        <div className="text-left text-sm">
          <h6>
            <b>References</b>
          </h6>
          <div className="container row">
            <div className="col-6 text-dark">
              Kevin Nzioka<br></br>
              Software Engineer at Microsoft<br></br>
              caveincicad@gmail.com<br></br>
              +254-706-228-321
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Cv;

// import React from "react";

// class Cv extends React.Component {
//   state = {
//     bio: "Highly skilled software developer with a focus on frontend development, with experience in building web applications using ReactJS, Flask, and Django frameworks. Excellent problem-solving skills and a passion for delivering high-quality products. Strong collaboration skills, with the ability to work in a team and communicate effectively.",
//     attributes: ["Good communication skills", "Effective team player and leader", "Prompt action on feedback & attention to detail"],
//     skills: ["Patterns (MVC), REST APIs", "Testing & linting", "CI/CD", "Team leadership"],
//     ProfessionalSkills: [
//       {
//         name: "JavaScript (ReactJS, NodeJS)",
//         level: { width: "87%" },
//       },
//       {
//         name: "Python (Django, Flask)",
//         level: { width: "90%" },
//       },
//       // ... (other skills)
//     ],
//     employmentHistory: [
//       {
//         company: "TechnoServe Group",
//         title: "Software Developer",
//         location: "Remote",
//         from: "08/2021",
//         to: "03/2023",
//         projects: [
//           {
//             from: "08/2021",
//             to: "03/2023",
//             descriptions: [
//               "As part of a team, I created a web application for the company that reduced the time it took to complete a specific development task from 3 days to 2 days, resulting in a 30% reduction in development time. Utilizing API integration and Redux state management, I improved user satisfaction scores by 20%.",
//               "Working closely with a team of developers and designers, I developed modular front-end user-interfaces and back-end services using JavaScript, Node.js, and React. Additionally, I optimized database schemas with normalized data to improve system performance. To upgrade application performance by 30%, I implemented multithreading and optimized SQL queries, resulting in faster execution through parallel processing techniques.",
//             ],
//             technologies: ["JavaScript (ReactJS)", "Flask", "Django", "Redux", "API Integration"],
//           },
//         ],
//       },
//       {
//         company: "Digital Dive Web Solutions",
//         title: "Frontend Developer",
//         location: "Nairobi, Kenya",
//         from: "01/2020",
//         to: "06/2021",
//         projects: [
//           {
//             from: "01/2020",
//             to: "06/2021",
//             descriptions: [
//               "Developed highly interactive single page applications utilizing modern web technologies such as HTML/CSS, and JavaScript (ReactJS), and adhering to web accessibility and design standards.",
//               "Improved site stability and increased user engagement by increasing unit test coverage by 30% through implementing automated testing processes. Wrote unit tests and performed code reviews, troubleshooted and debugged issues as they arose, and optimized application performance to improve user experience. These efforts resulted in increased stability and performance of the organization's digital products, leading to greater user engagement and satisfaction.",
//             ],
//             technologies: ["HTML/CSS", "JavaScript (ReactJS)", "Unit Testing", "Web Accessibility"],
//           },
//         ],
//       },
//       // ... (other employment history)
//     ],
//     // ... (rest of your state)
//   };

//   render() {
//     return (
//       <div className="p-4 text-dark">
//         {/* ... (profile picture and contact information) */}
//         <br />
//         <br />

//         <div className="text-left text-sm">
//           <h6>
//             <b>Profile</b>
//           </h6>
//           <p className="p-2 text-dark">{this.state.bio}</p>
//         </div>
//         <hr />

//         <div className="text-left text-sm">
//           <h6>
//             <b>Skills</b>
//           </h6>
//           <div className="container-fluid row">
//             {/* ... (personal attributes and other skills) */}
//             <div className="col-6 p-1">
//               Professional skills
//               <hr className="normal-hr-2" />
//               {this.state.ProfessionalSkills.map((skill) => (
//                 <div>
//                   {skill.name}
//                   <div
//                     className="progress"
//                     style={{ height: "6px" }}
//                   >
//                     <div
//                       className="progress-bar bg-dark"
//                       role="progressbar"
//                       style={skill.level}
//                       aria-valuenow="95"
//                       aria-valuemin="0"
//                       aria-valuemax="100"
//                     ></div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="text-left text-sm page-break">
//             <hr />
//             <h6>
//               <b>Employment History</b>
//             </h6>
//             {this.state.employmentHistory.map((employment) => (
//               <div>
//                 <hr className="bold-hr-3" />

//                 <strong>
//                   {employment.title} at {employment.company},{" "}
//                   {employment.location}
//                 </strong>
//                 <br />
//                 <h6 className="text-uppercase text-secondary small">
//                   {employment.from} - {employment.to}
//                 </h6>

//                 <br />
//                 {employment.projects.map((project) => (
//                   <div>
//                     <i
//                       className="p-2"
//                       style={{ fontSize: "11px" }}
//                     >
//                       {project.from} - {project.to}
//                     </i>
//                     {project.descriptions.map(
//                       (description) => (
//                         <div>
//                           <p className="pl-2 text-dark">
//                             {description}
//                           </p>
//                         </div>
//                       )
//                     )}
//                     <p className="pl-1 h6 text-lg">
//                       Technologies used:
//                     </p>
//                     <ul className="pl-4">
//                       {project.technologies.map(
//                         (technology) => (
//                           <li>{technology}</li>
//                         )
//                       )}
//                     </ul>
//                     <hr className="normal-hr-2" />
//                   </div>
//                 ))}
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* ... (rest of your components) */}
//       </div>
//     );
//   }
// }

// export default Cv;
