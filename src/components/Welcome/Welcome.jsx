import React, { Component } from 'react';
import './Welcome.css';

export class Welcome extends Component {
    render() {
        return (
            <section className="intro text-center" id="title-section">
                <div className="title-text col-sm-10 col-sm-12 col-lg-12">
                    <div>
                        <img src="https://res.cloudinary.com/dw675k0f5/image/upload/v1571944755/DSC_0448.jpg"
                            width="200"
                            height="200"
                            className="rounded-circle mx-auto d-block img-responsive"
                            alt="" />
                        <div class="rank-label-container">
                            <label htmlFor="file-upload" class="rank-label">
                                <img src="https://res.cloudinary.com/dw675k0f5/image/upload/v1570648506/flag.png" width="20" alt="" />
                            </label>
                        </div>
                    </div>
                    <i>Oh! Hello, Nice to meet you</i>
                    <h1 className="title">Hi there, &nbsp;
          <label class="typewrite" data-period="2000" data-type='[ "Am James Savali.", "Am passionate.", "Am Creative." ]'>
                            <span class="wrap"></span>
                        </label></h1>
                        <div className="col-md-4 text-center mt-2 mx-auto">
                                <i className="fas fa-phone fa-sm"></i>&nbsp;Mobile No: +254708197333<br></br>
                                <i class="far fa-envelope fa-sm"></i>&nbsp;Email: savalijey@gmail.com
                            </div>
                        <div className="col-md-4 text-center mt-2 mx-auto">
                                <a href="https://github.com/dev-jey"  target="_blank" rel="noopener noreferrer" className="text-dark"><i class="fab fa-github-square fa-4x p-2" style={{color: 'silver'}}></i></a>

                                <a href="https://www.linkedin.com/in/devjey/"  target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin fa-4x p-2"></i></a>
                                <a href="https://stackoverflow.com/users/10687724/jey-savali/"  target="_blank" rel="noopener noreferrer"><i class="fab fa-stack-overflow fa-4x p-2"  style={{color: 'orange'}}></i></a>
                                
                            </div>
                </div>
                <i className="fas fa-arrow-circle-down fa-5x"></i>
            </section>
        )
    }
}

export default Welcome
