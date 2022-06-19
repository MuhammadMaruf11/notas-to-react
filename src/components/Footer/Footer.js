import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <>
            <div className="footerArea">
                <div className="container pb-40 footer-border-bottom">
                    <div className="row">
                        <div className="col-xl-8 col-lg-8">
                            <div className="footerWrap">
                                <h3 className="titleText">
                                    Let's keep in touch!
                                </h3>
                                <p className="desc">
                                    Find us on any of these platforms, we respond 1-2 business days.
                                </p>
                            </div>
                            <div className="footerWrapper">
                                <div className="socialLinks">
                                    <ul>
                                        <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/"><i className="fab fa-facebook-square"></i></Link></li>
                                        <li><Link to="/"><i className="fab fa-dribbble"></i></Link></li>
                                        <li><Link to="/"><i className="fab fa-github"></i></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2">
                            <div className="footerWidget">
                                <h6 className="titleText">
                                    useful links
                                </h6>
                                <ul>
                                    <li><Link to="/">About Us</Link></li>
                                    <li><Link to="/">Blog</Link></li>
                                    <li><Link to="/">Github</Link></li>
                                    <li><Link to="/">free Products</Link></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2 col-lg-2">
                            <div className="footerWidget">
                                <h6 className="titleText">
                                    other resources
                                </h6>
                                <ul>
                                    <li><Link to="/">MIT License</Link></li>
                                    <li><Link to="/">Terms &amp; Conditions</Link></li>
                                    <li><Link to="/">Privacy Policy</Link></li>
                                    <li><Link to="/">Contact Us</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-30">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="copyRightText">
                                <span>Copyright © 2022 Notus NextJS by <Link to="/">Creative Tim</Link>.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
