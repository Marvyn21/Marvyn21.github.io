import React, { Component } from "react";
import "./Skills.css";

export class Skills extends Component {
  state = {
    skills: [
      {
        name: "Python",
        description:
          "I am proficient in python web frameworks, data extraction and engineering, and general algorithms.",
        icon: "fab fa-python fa-3x",
        skills: [
          {
            name: "Django",
            level: { width: "88%" },
          },
          {
            name: "Flask",
            level: { width: "85%" },
          },
        ],
      },
      {
        name: "Javascript",
        description:
          "I am skilled in frontend design using Vanilla Js, React and redux.",
        icon: "fab fa-js fa-3x",
        skills: [
          {
            name: "React",
            level: { width: "75%" },
          },
          {
            name: "Redux",
            level: { width: "82%" },
          },

          {
            name: "Vanilla Js",
            level: { width: "70%" },
          },
        ],
      },
      {
        name: "CI",
        description:
          "I have knowledge in continuous integration, using the following technologies.",
        icon: "fa fa-dot-circle-o fa-3x",

        skills: [
          {
            name: "CircleCI",
            level: { width: "78%" },
          },
          {
            name: "TravisCI",
            level: { width: "70%" },
          },
          {
            name: "Jenkins",
            level: { width: "45%" },
          },

          {
            name: "GitLabCI",
            level: { width: "70%" },
          },
        ],
      },
      {
        name: "CD",
        description:
          "I have knowledge in continuous deployment, using the following technologies.",
        icon: "fa fa-tasks fa-3x",

        skills: [
          {
            name: "GCP",
            level: { width: "80%" },
          },
          {
            name: "Heroku",
            level: { width: "80%" },
          },
          {
            name: "AWS",
            level: { width: "60%" },
          },

          {
            name: "Digital Ocean",
            level: { width: "80%" },
          },
        ],
      },
      {
        name: "DevOps",
        description:
          "I have experience working with the following technologies to ensure deployment automation.",
        icon: "fa fa-snowflake-o fa-3x",

        skills: [
          {
            name: "Kubernetes",
            level: { width: "75%" },
          },
          {
            name: "Docker",
            level: { width: "80%" },
          },
          {
            name: "Ansible",
            level: { width: "55%" },
          },
          {
            name: "TLS Configuration",
            level: { width: "60%" },
          },
        ],
      },
      {
        name: "Data Science",
        description:
          "I am skilled in using python to extract, process, visualize, and build predictive models from data.",
        icon: "fas fa-cogs fa-3x",
        skills: [
          {
            name: "Pandas",
            level: { width: "87%" },
          },
          {
            name: "Numpy",
            level: { width: "82%" },
          },

          {
            name: "Matplotlib",
            level: { width: "82%" },
          },
          {
            name: "Sk-Learn",
            level: { width: "80%" },
          },
        ],
      },
      {
        name: "UI & UX",
        description:
          "I have a experience in developing user-friendly UIs, and using common templating engines.",
        icon: "fas fa-code fa-3x",
        skills: [
          {
            name: "HTML5",
            level: { width: "87%" },
          },
          {
            name: "CSS & SASS",
            level: { width: "70%" },
          },

          {
            name: "Templating engines",
            level: { width: "82%" },
          },
          {
            name: "CSS frameworks(Bootstrap, Material & Semantic UI)",
            level: { width: "80%" },
          },
        ],
      },
      {
        name: "Databases",
        description:
          "I have worked with both relational and object database management systems.",
        icon: "fas fa-database fa-3x",
        skills: [
          {
            name: "PostgreSQL",
            level: { width: "97%" },
          },
          {
            name: "MySQL",
            level: { width: "85%" },
          },

          {
            name: "SQLite",
            level: { width: "82%" },
          },
          {
            name: "MongoDB",
            level: { width: "80%" },
          },
        ],
      },
      {
        name: "Collaboration",
        description:
          "I have a experience in developing user-friendly UIs, and using common templating engines.",
        icon: "fas fa-users-cog fa-3x",
        skills: [
          {
            name: "Team Collaboration",
            level: { width: "97%" },
          },
          {
            name: "Team Integration",
            level: { width: "98%" },
          },

          {
            name: "Communication",
            level: { width: "96%" },
          },
          {
            name: "Initiative",
            level: { width: "96%" },
          },
        ],
      },
      {
        name: "Testing, Linting & Debugging",
        description:
          "I write clean, linted and well tested code. I ensure I have a good maintainability rate, and a high test coverage.",
        icon: "fas fa-users-cog fa-3x",
        skills: [
          {
            name: "Test Coverage",
            level: { width: "97%" },
          },
          {
            name: "Linting",
            level: { width: "98%" },
          },

          {
            name: "Bug fixing",
            level: { width: "96%" },
          },
        ],
      },
    ],
  };
  render() {
    return (
      <section class="col-12">
        <div class="mx-auto">
          <div class="container">
            <header class="mb-5 text-center">
              <h2 class="text-uppercase">My Skills</h2>
              <hr className="normal-hr"></hr>
            </header>
            <div class="row text-center mx-auto">
              {this.state.skills.map((skill) => (
                <div class="col-lg-3 col-md-6 ">
                  <div class="icon mb-3 mt-5">
                    <i class={skill.icon}></i>
                  </div>
                  <h4 class="text-uppercase">{skill.name}</h4>
                  <p class="font-weight-normal">{skill.description}</p>
                  {skill.skills.map((individualSkill) => (
                    <div>
                      {individualSkill.name}
                      <div class="progress skill-bars">
                        <div
                          class="progress-bar bg-warning"
                          role="progressbar"
                          style={individualSkill.level}
                          aria-valuenow="95"
                          aria-valuemin="0"
                          aria-valuemax="100"
                        ></div>
                      </div>
                    </div>
                  ))}
                  <div></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Skills;
