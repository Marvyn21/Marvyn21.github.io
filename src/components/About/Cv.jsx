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
        company: "Ignite Binary",
        title: "Software Engineer",
        location: "Nairobi",
        from: "June, 2020",
        to: "Present",
        projects: [
          {
            from: "June, 2020",
            to: "Present",
            descriptions: [
              "At Ignite, I am a member of the back-end team of a product called Vitea. This is a personal health software that presents various benefits in assisting health enterprises to automate processes, increase productivity, and facilitate workflow management, as well as help patients, track their health history at a personal level.",

              "The software contains real-time, patient medical records that make information available instantly and securely to authorized users. It also contains the medical and treatment histories of patients, the software will go beyond standard clinical data collected in a provider’s office and can be inclusive of a broader view of a patient’s care with great benefits to the medical institutions and patients. ",

              "Contain a patient’s medical history, diagnoses, medications, treatment plans, immunization dates, allergies, radiology images, and laboratory and test results. Allows access to evidence-based tools that providers can use to make decisions about a patient’s care. Automate and streamline medical providers' workflow. Allows access to a pool of approved and registered doctors (serve as doctors database) Allows on-demand consulting",

              "I successfully prioritize product requirements and set realistic expectations in regards to development and timeline.",

            ],
            technologies: ["Python, Flask", "Redis", "PostgreSQL"]
          },
        ]
      },
      {
        company: "Actuarial Services (E.A) Ltd",
        title: "Software Engineer",
        location: "Nairobi",
        from: "February, 2020",
        to: "July",
        projects: [
          {
            from: "February, 2020",
            to: "April, 2020",
            descriptions: [
              "I was part of a team that worked on a product called Post Retirement Medical Fund.  This is a product that helps to foresee the medical expenses after retirement. The stacks used is Python Django.",

              "This product increased the productivity and efficiency of the insurance department by about 20%. The customization nature of the product also earned the company revenue after selling it to other companies such as the Retirement Benefits Authority, and Search Results Kenya Bureau of Standards.",

              "I successfully prioritized product requirements and set realistic expectations in regards to development and timeline.",

              "I oversaw all aspects of design and development, and offered design solutions when necessary."
            ],
            technologies: ["Python, Django", "Redis", "PostgreSQL"]
          },
        ]
      },
      {
        company: "Route Money",
        title: "Software Engineer",
        location: "Nairobi",
        from: "December, 2019",
        to: "April, 2020",
        projects: [
          {
            from: "December, 2019",
            to: "April, 2020",
            descriptions: [
              "At Route, I was part of a backend team that designed the Route API. Route is a product that aims at reducing the hustle of transferring funds across different platforms. Such transactions include bank to bank transactions, bank to mobile transactions, among others.",

              "I worked to support the company mission and adhered to company protocol at all times.",

              "I Managed back-end development for the Route API which is implemented in Django REST Framework and the deployment is done on Google Kubernetes Engine. I configured the CI/CD pipeline using CircleCI and github. I also monitored the health of the cluster to ensure that It's always at the optimal state."
            ],
            technologies: ["Python, DRF", "Kubernetes", "Docker", "PostgreSQL", "Google Kubernetes Engine", "Promethius", "Grafana"]
          },
        ]
      },
      {
        company: "Andela",
        title: "Software Engineer",
        location: "Nairobi",
        from: "December, 2018",
        to: "October, 2019",
        projects: [
          {
            from: "December, 2018",
            to: "March, 2019",
            descriptions: [
              "I was part of a team that worked on a product called Authors Haven.  This is a social platform that allowed authors to create articles as well as reading them. The stacks used are; Python Django for the back-end and React-Redux for the front-end."
            ],
            technologies: ["Python, Django(DRF)", "React-Redux", "Heroku", "PostgreSQL"]
          },
          {
            from: "March, 2019",
            to: "October, 2019",
            descriptions: [
              "At Andela, I was a member of the back-end team of a product called Activo. This product aims at managing Andela assets. As a result, not only did the efficiency of the operations team improved by 8% but also their workload was reduced by 30% The stack used to create the Activo-API is Python Flask RESTplus.",

              "I worked as an active member of the team for 3 months, after which I advanced and rejoined the team as a Technical coordinator.",
              "Developed a Slack bot to help with the booking of seats in the Andela Lagos Campus. This increased the utilization by 15% and reduced the operations team task by 10%.",

              "I am proud to say that I facilitated the advancement of 6 junior engineers to an intermediate level.",

              "As a technical coordinator at Activo, I was also in charge of merging all PRs to staging. During this time, the overall output by the team improved by 6%.",

              "I also participated in making a major release to production. The bulk asset upload release allowed the ops team members to mass upload assets. This eased their work by  around 20%."
            ],
            technologies: ["Python, Flask(FlaskRESTPlus)", "PostgreSQL", "Slack API"]
          },
        ]
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
          Hesbon Kiptoo Maiyo,
          <label className="text-dark">&nbsp;&nbsp;Software Engineer</label>
          <br></br>
          Email: hesbonkiptoo5600@gmail.com
          <br></br>
          Mobile No. +254-727-737-299
          <br></br>
          Languages: English, Kiswahili
          <br></br>
          Nationality: Kenyan
          <br></br>
          <div className="col-md-6 text-center mt-2 mx-auto">
            <a
              href="https://github.com/Hesbon5600"
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
              href="https://www.linkedin.com/in/hesbon-kiptoo-maiyo/"
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
              href="https://stackoverflow.com/users/6531903/hesbon"
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
          Bachelor of Science in Information Technology, Multimedia University
          of Kenya, Nairobi
          <br></br>
          <i className="p-2" style={{ fontSize: "11px" }}>
            September, 2015 - Present
          </i>
          <p className="pl-2 text-dark">
            This course has helped to build my understanding of a wide range of
            software, and technological ICT skills required by the industry
          </p>
        </div>

        <hr></hr>
        <div className="text-left text-sm">
          <h6>
            <b>Hobbies</b>
          </h6>
          <p className="pl-2 text-dark">
            Playing pool, Swimming, Watching movies
          </p>
        </div>

        <hr></hr>
        <div className="text-left text-sm">
          <h6>
            <b>References</b>
          </h6>
          <div className="container row">
            <div className="col-6 text-dark">
              Samuel Afolaranmi<br></br>
              Software Engineer at Andela<br></br>
              sammysgame.dev@gmail.com<br></br>
              +234-806-466-731-7
            </div>
            <div className="col-6 text-dark">
              Kevin Nzioka<br></br>
              Software Engineer at Andela<br></br>
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
