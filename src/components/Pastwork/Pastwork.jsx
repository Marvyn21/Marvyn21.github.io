import React, { Component } from "react";
import "./Pastwork.css";
import ReactGA from "react-ga";

export class Pastwork extends Component {
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
                Web Apps
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
                <div class="col-xl-4 col-lg-4 col-md-6 mb-4">
                  <div class="bg-light rounded shadow-sm">
                    <a href="https://res.cloudinary.com/dsw3onksq/image/upload/v1572770470/Activo_q9rfgc.png">
                      <img
                        src="https://res.cloudinary.com/dsw3onksq/image/upload/v1572770470/Activo_q9rfgc.png"
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
                          Activo API
                        </a>
                      </h5>
                      <p class="small text-dark">
                        {" "}
                        The activo-api is the backbone of an application for
                        managing physical assets of the organisation. The
                        project enables centralised management of assets of the
                        organisation.
                      </p>
                      <p class="small text-muted mb-0">Key technologies</p>
                      <ul class="small text-muted ml-3">
                        <li>Python</li>
                        <li>Flask RESTplus</li>
                        <li>Postgres, Redis, Celery</li>
                        <li>Slack Bot</li>
                      </ul>
                      <div class="d-flex align-items-center justify-content-between rounded-pill bg-dark px-3 py-2 mt-4">
                        <p class="small mb-0">
                          <i class="fab fa-python mr-2"></i>
                          <i class="fas fa-database mr-2"></i>{" "}
                          <span class="font-weight-bold">
                            <a
                              href="https://github.com/andela/activo-api"
                              className="text-light"
                              onClick={() =>
                                ReactGA.event({
                                  category: "Visit Repo",
                                  action: "Activo Repo"
                                })
                              }
                            >
                              Private Repo
                            </a>
                          </span>
                        </p>
                        <a
                          href="https://activo.andela.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="badge badge-info px-3 rounded-pill font-weight-normal"
                          onClick={() =>
                            ReactGA.event({
                              category: "Visit Site",
                              action: "Activo Site"
                            })
                          }
                        >
                          Visit Site
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div class="col-xl-4 col-lg-4 col-md-6 mb-4">
                  <div class="bg-white rounded shadow-sm">
                    <a href="https://res.cloudinary.com/dsw3onksq/image/upload/v1572771669/authors_f81tgd.png">
                      <img
                        src="https://res.cloudinary.com/dsw3onksq/image/upload/v1572771669/authors_f81tgd.png"
                        alt=""
                        class="img-fluid card-img-top"
                      />
                    </a>
                    <div class="p-4">
                      <h5>
                        {" "}
                        <a
                          href="https://ah-shakas-frontend-staging.herokuapp.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="text-dark"
                        >
                          Authors Haven
                        </a>
                      </h5>
                      <p class="small text-dark">
                        {" "}
                        A platform whereby authors and article writers are able
                        to express themselves freely and reach out to their
                        target audience.
                      </p>
                      <p class="small text-muted mb-0">Key technologies</p>
                      <ul class="small text-muted ml-3">
                        <li>React, Redux</li>
                        <li>Cloudinary, Semantic UI, Google places</li>
                        <li>Postgres, Django, DRF</li>
                        <li>PT, slack and github team collaboration</li>
                        <li>CI/CD on travis & heroku</li>
                      </ul>
                      <div class="d-flex align-items-center justify-content-between rounded-pill bg-dark px-3 py-2 mt-4">
                        <p class="small mb-0">
                          <i class="fab fa-python mr-2"></i>
                          <i class="fab fa-react mr-2"></i>{" "}
                          <span class="font-weight-bold">
                            <a
                              href="https://github.com/andela/ah-fulldeck-frontend"
                              className="text-light"
                              onClick={() =>
                                ReactGA.event({
                                  category: "Visit Repo",
                                  action: "Full deck Repo"
                                })
                              }
                            >
                              Github Repo
                            </a>
                          </span>
                        </p>
                        <a
                          href="https://ah-shakas-frontend-staging.herokuapp.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="badge badge-info px-3 rounded-pill font-weight-normal"
                          onClick={() =>
                            ReactGA.event({
                              category: "Visit Repo",
                              action: "Full deck site"
                            })
                          }
                        >
                          Visit Site
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="col-xl-4 col-lg-4 col-md-6 mb-4">
                  <div class="bg-white rounded shadow-sm">
                    <a href="https://res.cloudinary.com/dsw3onksq/image/upload/v1572773935/best-seller_nyapns.png">
                      <img
                        src="https://res.cloudinary.com/dsw3onksq/image/upload/v1572773935/best-seller_nyapns.png"
                        alt=""
                        class="img-fluid card-img-top"
                      />
                    </a>
                    <div class="p-4">
                      <h5>
                        {" "}
                        <a
                          href="https://best-seller-hesbon.herokuapp.com/docs"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="text-dark"
                        >
                          Best seller
                        </a>
                      </h5>
                      <p class="small text-dark">
                        {" "}
                        An e-commerce application built using React that enables
                        users shop for goods in the plaform.
                      </p>
                      <p class="small text-muted mb-0">Key technologies</p>
                      <ul class="small text-muted ml-3">
                        <li>React, Redux</li>
                        <li>MYSQL, Django, DRF</li>
                        <li>Stripe</li>
                      </ul>
                      <div class="d-flex align-items-center justify-content-between rounded-pill bg-dark px-3 py-2 mt-4">
                        <p class="small mb-0">
                          <i class="fab fa-python mr-2"></i>
                          <i class="fas fa-database mr-2"></i>
                          <span class="font-weight-bold">
                            <a
                              href="https://github.com/Hesbon5600/best-seller"
                              className="text-light"
                              onClick={() =>
                                ReactGA.event({
                                  category: "Visit Repo",
                                  action: "Best seller Repo"
                                })
                              }
                            >
                              Github Repo
                            </a>
                          </span>
                        </p>
                        <a
                          href="https://best-seller-hesbon.herokuapp.com/docs"
                          target="_blank"
                          rel="noopener noreferrer"
                          class="badge badge-info px-3 rounded-pill font-weight-normal"
                          onClick={() =>
                            ReactGA.event({
                              category: "Visit Repo",
                              action: "Best seller site"
                            })
                          }
                        >
                          Visit Site
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
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
                  href="https://github.com/Hesbon5600"
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

export default Pastwork;
