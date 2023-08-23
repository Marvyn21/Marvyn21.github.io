import React, { Component } from "react";
import "./Pastwork.css";
import ReactGA from "react-ga";

export class PastWork extends Component {
  state = {
    projects: [
      {
        name: "Templates Random Restaurant",
        description:
          "Restaurant Website Template This is a responsive restaurant website template built using HTML, Bootstrap, CSS, and JavaScript. This template is suitable for a restaurant, cafe, or any food-related business.",
        link: "https://random-restaurant-by-marvyn.netlify.app/",
        image:
          "https://res.cloudinary.com/dp5j2kwic/image/upload/v1692781352/gphibjupgz4wwjkup4bh.png",
        technologies: [
          "JavaScript, ",
          "HTML/CSS",
          "CI/CD on CircleCI",
          "Kubernetes, Docker & Helm",
          "Digital Ocean",
          "Google Kubernetes Engine",
          "PT, Slack and Github team collaboration",
        ],
        icons: [
          "fab fa-python mr-3",
          "fa fa-snowflake-o mr-3",
          "fas fa-database mr-3",
        ],
        repo: "https://github.com/Marvyn21/Restaurant-Template",
        privateRepo: true,
      },
      {
        name: "Manage TaskSync",
        description:
          "TaskSync: a web app for software teams to manage tasks and team goals. Plan, assign, and track tasks collaboratively.",
        link: "https://managewebpage.netlify.app/",
        image:
          "https://res.cloudinary.com/dp5j2kwic/image/upload/v1692781364/tch0qviaswexrbfnii6v.png",
        technologies: [
          "JavaScript",
          "HTML/CSS",
          "Postgres",
          "Redis",
          "Celery",
        ],
        icons: [
          "fab fa-python mr-3",
          "fa fa-free-code-camp mr-3",
          "fas fa-database mr-3",
        ],
        repo: "https://github.com/Marvyn21/Manage-WebPage",
        privateRepo: true,
      },

      {
        name: "Daily Scoop",
        description:
          "This JS application fetches/display articles from News API using HTML/CSS/JS. Simple use of News API for web news. Expand with categories/UI tweaks. Site uses saurav.tech's API, incl. business, entertainment, health, science, sports, tech categories. Click navbar to view related articles.",
        link: "https://marvyn21.github.io/Phase-1-Project-News-App/",
        image:
          "https://res.cloudinary.com/dp5j2kwic/image/upload/v1692781383/ob9xge54fxqofmp4sxzs.png",
        technologies: [
          "Javascript, vanilla JS",
          "Postgres",
          "CI/CD on GitLab",
          "Redis, Celery",
        ],
        icons: [
          "fab fa-python mr-3",
          "fa fa-html5 mr-3",
          "fas fa-database mr-3",
        ],
        repo: "https://github.com/Marvyn21/Phase-1-Project-News-App",
        privateRepo: true,
      },
      {
        name: "My-EStore",
        description:
          "Responsive e-commerce store built using HTML, CSS, JavaScript and Bootstrap",
        link: "https://marvyn21.github.io/My-E-Store/",
        image:
          "https://res.cloudinary.com/dp5j2kwic/image/upload/v1692781340/a6b2u3h2ksj9i0imyppb.png",
        technologies: [
          "JavaScript",
          "HTML/CSS",
          "Postgres",
          "CI/CD on GitHub",
          "Redis",
        ],
        icons: [
          "fab fa-python mr-3",
          "fa fa-flask mr-3",
          "fa fa-heartbeat mr-3",
        ],
        repo: "https://github.com/Marvyn21/My-E-Store",
        privateRepo: true,
      },
      {
        name: "EventGo",
        description:
          "Elevate Your Events: Streamline event management with our Python-Flask and ReactJS platform. Effortlessly organize, promote, and sell tickets for various events, providing an exceptional experience for event organizers and attendees.",
        link: "https://eventgo.onrender.com/",
        image:
          "https://res.cloudinary.com/dp5j2kwic/image/upload/v1692781322/vfdnmtrzdvwpjdysajvc.png",
        technologies: [
          "Python, Flask",
          "FlaskRestPlus",
          "Postgres",
          "CI/CD on GitHub",
          "Redis",
        ],
        icons: [
          "fab fa-python mr-3",
          "fa fa-flask mr-3",
          "fa fa-heartbeat mr-3",
        ],
        repo: "https://github.com/Sarah-Wambui/Event-Ticketing-App",
        privateRepo: true,
      },
      {
        name: "Authors Haven",
        description:
          "A platform whereby authors and article writers are able to express themselves freely and reach out to their target audience.",
        link: "https://ah-shakas-frontend-staging.herokuapp.com/",
        image:
          "https://res.cloudinary.com/dsw3onksq/image/upload/v1572771669/authors_f81tgd.png",
        technologies: [
          "Python, Django REST Framework",
          "Postgres",
          "CI/CD on travis & heroku",
          "React, Redux",
          "Cloudinary, Semantic UI, Google places",
          "PT, Slack and Github team collaboration",
        ],
        icons: [
          "fab fa-python mr-3",
          "fab fa-react mr-3",
          "fas fa-database mr-3",
        ],
        repo: "https://github.com/andela/ah-fulldeck-fronten",
        privateRepo: false,
      }
    ],
  };
  render() {
    return (
      <div>
        <div class="p-5 p-work rounded mb-5">
          <br></br>
          <br></br>
          <header class="mb-5 text-center">
            <h2 class="text-uppercase">My Past Work</h2>
            <hr className="normal-hr"></hr>
          </header>
          <ul
            id="myTab2"
            role="tablist"
            class="nav nav-tabs nav-pills with-arrow lined flex-column flex-sm-row text-center"
          >
            <li class="nav-item flex-sm-fill">
              <a
                id="home2-tab"
                data-toggle="tab"
                href="#home2"
                role="tab"
                aria-controls="home2"
                aria-selected="true"
                class="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0 active"
              >
                Recent Work
              </a>
            </li>
            <li class="nav-item flex-sm-fill">
              <a
                id="profile2-tab"
                data-toggle="tab"
                href="#profile2"
                role="tab"
                aria-controls="profile2"
                aria-selected="false"
                class="nav-link text-uppercase font-weight-bold mr-sm-3 rounded-0"
              >
                Others
              </a>
            </li>
          </ul>
          <div id="myTab2Content" class="tab-content">
            <div
              id="home2"
              role="tabpanel"
              aria-labelledby="home-tab"
              class="tab-pane fade py-5 show active"
            >
              <div class="row">
                {this.state.projects.map((project) => (
                  <div class="col-xl-4 col-lg-4 col-md-6 mb-4">
                    <div class="bg-light rounded shadow-sm">
                      <a href={project.link}>
                        <img
                          src={project.image}
                          alt="Activo"
                          class="img-fluid card-img-top"
                        />
                      </a>
                      <div class="p-4">
                        <h5>
                          {" "}
                          <a
                            href="https://activo.andela.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            class="text-dark"
                          >
                            {project.name}
                          </a>
                        </h5>
                        <p class="small text-dark"> {project.description}</p>
                        <p class="small text-muted mb-0">Key technologies</p>
                        <ul class="small text-muted ml-3">
                          {project.technologies.map((technology) => (
                            <li>{technology}</li>
                          ))}
                        </ul>
                        <div class="d-flex align-items-center justify-content-between rounded-pill bg-dark px-3 py-2 mt-4">
                          <p class="small mb-0">
                            {project.icons.map((icon) => (
                              <i class={icon}></i>
                            ))}
                            <span class="font-weight-bold">
                              <a
                                href={project.repo}
                                className="text-light"
                                onClick={() =>
                                  ReactGA.event({
                                    category: "Visit Repo",
                                    action: "Activo Repo",
                                  })
                                }
                              >
                                {project.privateRepo
                                  ? "Private Repo"
                                  : "Public Repo"}
                              </a>
                            </span>
                          </p>
                          <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            class="badge badge-info px-3 rounded-pill font-weight-normal"
                            onClick={() =>
                              ReactGA.event({
                                category: "Visit Site",
                                action: "Activo Site",
                              })
                            }
                          >
                            Visit Site
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div
              id="profile2"
              role="tabpanel"
              aria-labelledby="profile-tab"
              class="tab-pane fade px-4 py-5"
            >
              <p className="text-center">
                Check out more projects on my github account:
                <br></br>
                <a
                  href="https://github.com/Marvyn21"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-light text-center mx-auto"
                >
                  <i class="fab fa-github-square fa-4x p-2 text-center"></i>
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default PastWork;
