import React, { Component } from "react";
import ReactGA from "react-ga";

export class Contact extends Component {
  render() {
    return (
      <section class="col-12">
        <div class="mx-auto">
          <div class="container">
            <header class="text-center">
              <h2 class="text-uppercase">Contact Me</h2>
              <hr className="normal-hr"></hr>
            </header>
            <div className="container-fluid">
              <div className="row">
                <div className="text-light col-md-4 text-left mt-5">
                  <i class="fas fa-phone fa-sm"></i>&nbsp;Mobile No: <a href="tel:+254-727-737-299">+254-727-737-299</a>
                  <br></br>
                  <i class="far fa-envelope fa-sm"></i>&nbsp;Email:
                  <a href="mailto:hesbonkiptoo5600@gmail.com">hesbonkiptoo5600@gmail.com</a>
                </div>
                <div className="col-md-4 text-md-center mt-5">
                  <a
                    href="https://github.com/Hesbon5600"
                    onClick={() =>
                      ReactGA.event({
                        category: "Viewing",
                        action: "Github Profile on footer"
                      })
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-light"
                  >
                    <i class="fab fa-github fa-2x p-1"></i>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/hesbon-kiptoo-maiyo/"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      ReactGA.event({
                        category: "Viewing",
                        action: "LinkedIn Profile on footer"
                      })
                    }
                  >
                    <i class="fab fa-linkedin fa-2x p-1"></i>
                  </a>
                  <a
                    href="https://stackoverflow.com/users/6531903/hesbon"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      ReactGA.event({
                        category: "Viewing",
                        action: "StackOverflow Profile on footer"
                      })
                    }
                  >
                    <i
                      class="fab fa-stack-overflow fa-2x p-1"
                      style={{ color: "orange" }}
                    ></i>
                  </a>
                </div>
                <div className="text-left text-light col-md-4 mt-5">
                  <i>
                    "Simplicity is the soul of efficiency."<br></br>
                    -– Austin Freeman
                  </i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="text-center text-light">
          &copy; {(new Date().getFullYear())}. Hesbon Kiptoo Maiyo
        </div>
        <br></br>
      </section>
    );
  }
}

export default Contact;
