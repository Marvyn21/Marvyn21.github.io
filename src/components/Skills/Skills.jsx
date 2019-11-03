import React, { Component } from 'react';
import './Skills.css';

export class Skills extends Component {
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
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fab fa-python fa-5x"></i></div>
                                <h4 class="text-uppercase">Python</h4>
                                <p class="font-weight-normal">I am proficient in python web frameworks, data extraction and engineering, and general algorithms.</p>
                                Django
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "85%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Flask
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fab fa-js fa-5x"></i></div>
                                <h4 class="text-uppercase">Javascript</h4>
                                <p class="font-weight-normal">I am skilled in frontend design using Vanilla Js, React and redux</p>

                                React
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "75%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Redux
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "70%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Vanilla Js
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "78%" }} aria-valuenow="96" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fas fa-cogs fa-5x "></i></div>
                                <h4 class="text-uppercase">Data Science</h4>
                                <p class="font-weight-normal">I am skilled in using python to extract, process, visualize, and build predictive models from data</p>
                                Pandas
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "87%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Numpy
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "82%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Matplotlib
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "82%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Sk-Learn
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fas fa-database fa-5x"></i></div>
                                <h4 class="text-uppercase">Database</h4>
                                <p class="font-weight-normal">I have worked with both relational and object database management systems.</p>
                                PostgreSQL
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "92%" }} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                MySQL
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "85%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                SQLite
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "82%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                MongoDB
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                        </div>
                        <div className="row mx-auto text-center">
                            <div class="col-lg-3 col-md-6">
                                <div class="icon mb-3 mt-5"><i class="fab fa-aws fa-5x"></i></div>
                                <h4 class="text-uppercase">DevOps</h4>
                                <p class="font-weight-normal">I have some substantial knowledge in continous integration, server management, web hosting and automation.</p>
                                AWS
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "45%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                GCP
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "45%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Circle CI
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "45%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Heroku
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Code Climate
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "50%" }} aria-valuenow="70" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fas fa-code fa-5x"></i></div>
                                <h4 class="text-uppercase lined lined-compact">UI &amp; UX</h4>
                                <p class="font-weight-normal">I have a experience in developing user-friendly UIs, and using common templating engines.</p>
                                HTML
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "89%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                CSS & SASS
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "85%" }} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Templating engines
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                CSS frameworks(Bootstrap, Material & Semantic UI)
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "80%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fas fa-users-cog fa-5x"></i></div>
                                <h4 class="text-uppercase lined lined-compact">Collaboration</h4>
                                <p class="font-weight-normal">Using collaboration tools such as github, am able to work
                                 in a team amicably and develop a product using the agile methodology.</p>

                                Team Collaboration
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "97%" }} aria-valuenow="97" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>

                                Team Integration
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "98%" }} aria-valuenow="98" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>

                                Communication
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "96%" }} aria-valuenow="96" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Initiative
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "96%" }} aria-valuenow="96" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                            <div class="col-lg-3 col-md-6 ">
                                <div class="icon mb-3 mt-5"><i class="fas fa-cube fa-5x"></i></div>
                                <h4 class="text-uppercase lined lined-compact">Testing, Linting & Debugging</h4>
                                <p class="font-weight-normal">I write clean, linted and well tested code. I ensure
                                 I have a good maintenability rate, and a high test coverage.</p>
                                 Test Coverage
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "95%" }} aria-valuenow="95" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Linting
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "94%" }} aria-valuenow="94" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                                Bug fixing
                                    <div class="progress skill-bars">
                                    <div class="progress-bar bg-warning" role="progressbar" style={{ width: "90%" }} aria-valuenow="90" aria-valuemin="0" aria-valuemax="100">
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Skills
