import React from 'react';

const Footer = () => {
    return (
        <>
            <div className="footerArea">
                <div className="container pb-40 footer-border-bottom">
                    <div className="row">
                        <div className="col-xl-8">
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
                                        <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                        <li><a href="/"><i className="fab fa-facebook-square"></i></a></li>
                                        <li><a href="/"><i className="fab fa-dribbble"></i></a></li>
                                        <li><a href="/"><i className="fab fa-github"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="footer-widget">
                                <h6 className="titleText">
                                    useful links
                                </h6>
                                <ul>
                                    <li><a href="/">About Us</a></li>
                                    <li><a href="/">Blog</a></li>
                                    <li><a href="/">Github</a></li>
                                    <li><a href="/">free Products</a></li>
                                </ul>
                            </div>
                        </div>
                        <div className="col-xl-2">
                            <div className="footer-widget">
                                <h6 className="titleText">
                                    other resources
                                </h6>
                                <ul>
                                    <li><a href="/">MIT License</a></li>
                                    <li><a href="/">Terms &amp; Conditions</a></li>
                                    <li><a href="/">Privacy Policy</a></li>
                                    <li><a href="/">Contact Us</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container pt-30">
                    <div className="row">
                        <div className="col-12 text-center">
                            <div className="copyRightText">
                                <span>Copyright © 2022 Notus NextJS by <a href="/">Creative Tim</a>.</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;
