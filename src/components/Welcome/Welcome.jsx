import React, { Component } from 'react';
import './Welcome.css';

export class Welcome extends Component {
    render() {
        return (
            <section className="intro text-center" id="title-section">
                <div className="title-text col-sm-10 col-sm-12 col-lg-12">

                    <div className="me mx-auto d-block">
                    </div>
                    <div style={{margin: "15%"}}></div>
                    <i className="font-italic">Hello there, </i> <br></br>
                    <i className="font-italic text-break">You have reached one, </i>
                    <h1 className="title">Hesbon Kiptoo Maiyo, &nbsp;
          <label className="typewrite" data-period="2000" data-type='[ "I am passionate","i care about results" ]'>
                            <span className="wrap"></span>
                        </label></h1>
                        <div className="col-md-4 text-center mt-2 mx-auto">
                                <i className="fas fa-phone fa-sm"></i>&nbsp;Mobile No: <a href="tel:+254-727-737-299">+254-727-737-299</a><br></br>
                                <i className="far fa-envelope fa-sm"></i>&nbsp;Email: <a href="mailto:hesbonkiptoo5600@gmail.com">hesbonkiptoo5600@gmail.com</a>
                            </div>
                        <div className="col-md-4 text-center mt-2 mx-auto">
                                <a href="https://github.com/Hesbon5600"  target="_blank" rel="noopener noreferrer" className="text-dark"><i className="fab fa-github-square fa-4x p-2" style={{color: 'silver'}}></i></a>

                                <a href="https://www.linkedin.com/in/hesbon-kiptoo-maiyo/"  target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-4x p-2"></i></a>
                                <a href="https://stackoverflow.com/users/6531903/hesbon"  target="_blank" rel="noopener noreferrer"><i className="fab fa-stack-overflow fa-4x p-2"  style={{color: 'orange'}}></i></a>

                            </div>
                </div>
                <i className="fas fa-arrow-circle-down fa-5x"></i>
            </section>
        )
    }
}

export default Welcome
