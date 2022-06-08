import React from 'react'
import laptop from '../../assets/img/projects/laptop.jpg';
import Doc from './Doc';
import Css from './Css';
import Javscript from './Javscript';

const Projects = () => {
    const cssComp = (<div className="projectWrapper">
        <div className="projectIcon">
            <i className="fas fa-sitemap"></i>
        </div>
        <div className="projectContent">
            <h5>CSS Components</h5>
            <p>
                Notus NextJS comes with a huge number of Fully Coded CSS components.
            </p>
        </div>
    </div>)

    const pagesComp = (<div className="projectWrapper">
        <div className="projectIcon">
            <i className="fas fa-newspaper"></i>
        </div>
        <div className="projectContent">
            <h5>Pages</h5>
            <p>
                This extension also comes with 3 sample pages. They are fully coded so you can start working instantly.
            </p>
        </div>
    </div>)

    const jsComp = (<div className="projectWrapper">
        <div className="projectIcon">
            <i className="fas fa-drafting-compass"></i>
        </div>
        <div className="projectContent">
            <h5>JavaScript Components</h5>
            <p>
                We also feature many dynamic components for React, NextJS, Vue and Angular.
            </p>
        </div>
    </div>)

    const docComp = (<div className="projectWrapper">
        <div className="projectIcon">
            <i className="fas fa-file-alt"></i>
        </div>
        <div className="projectContent">
            <h5>Documentation</h5>
            <p>
                Built by developers for developers. You will love how easy is to to work with Notus NextJS.
            </p>
        </div>
    </div>)




    return (
        <>
            <div className="projectArea">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="projectCard">
                                <div className="cardImg">
                                    <img src={laptop} alt="laptop-img" />
                                </div>
                                <div className="cardContent">
                                    <h4>Great for you awesome project</h4>
                                    <p>Putting together a page has never been easier than matching together pre-made components. From landing pages presentation to login areas, you can easily customise and built your pages.</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="projectWrap">
                                <div className="row">
                                    <div className="col-xl-6">
                                        <div>
                                            {cssComp}
                                        </div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div>{pagesComp}</div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div>{jsComp}</div>
                                    </div>
                                    <div className="col-xl-6">
                                        <div>{docComp}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Css cssComp={cssComp} />
            <Javscript jsComp={jsComp} />
            <Doc docComp={docComp} />
        </>
    )
}

export default Projects