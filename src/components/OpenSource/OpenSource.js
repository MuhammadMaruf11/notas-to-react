import React from 'react'
import { Link } from "react-router-dom";

const OpenSource = () => {
    return (
        <>
            <div className="openArea fix">
                <div className="container">
                    <div className="row pt-md-200 mt-md-200 pt-xs-100"></div>
                    <div className="row">
                        <div className="col-xl-6 col-lg-5 col-md-6">
                            <div className="openContent">
                                <div className="projectWrapper">
                                    <div className="projectIcon">
                                        <i className="fas fa-code-branch text-xl"></i>
                                    </div>
                                    <div className="projectContent">
                                        <h2>Open Source</h2>
                                        <p>Since <Link to='/about'>Tailwind CSS</Link> is an open source project we wanted to continue this movement too. You can give this version a try to feel the design and also test the quality of the code!</p>
                                        <p>Get it free on Github and please help us spread the news with a Star!</p>
                                    </div>
                                </div>
                                <div className="githubBtn">
                                    <Link to='/about'>github star</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-7 col-md-6">
                            <div className="githubIcon">
                                <i className="fab fa-github"></i>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OpenSource