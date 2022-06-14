import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import { Images } from "../../utilities/Images";

const Header = () => {
    return (
        <>
            <header className="headerArea border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="navText">
                                <Link to="/">Notus NextJS</Link>
                                <Link to="/" className='d-lg-inline d-none'><i className="far fa-file-alt"></i> docs</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 d-lg-block d-none text-end">
                            <div className="navLink">
                                <Link to="/" className="demoPages">demo pages</Link>
                                <div className="socialLinks">
                                    <ul>
                                        <li><Link to="/"><i className="fab fa-facebook"></i></Link></li>
                                        <li><Link to="/"><i className="fab fa-twitter"></i></Link></li>
                                        <li><Link to="/"><i className="fab fa-github"></i></Link></li>
                                    </ul>
                                </div>
                                <Button className='thm-btn'><i className="fas fa-arrow-alt-circle-down"></i> download</Button>
                            </div>
                        </div>
                        <div className="col-6 d-lg-none d-block text-end">
                            <button class="mobileMenuBtn">
                                <span class="bar1"></span>
                                <span class="bar2"></span>
                                <span class="bar3"></span>
                            </button>
                        </div>
                        <div className="col">
                            <div class="mobileNavbar flex d-none">
                                <div className="navLink">
                                    <div className="socialLinks">
                                        <ul>
                                            <li><Link to="/"><i className="far fa-file-alt"></i> docs</Link></li>
                                            <li><Link to="/" className="demoPages">demo pages</Link></li>
                                            <li><Link to="/"><i className="fab fa-facebook"></i> share</Link></li>
                                            <li><Link to="/"><i className="fab fa-twitter"></i>tweet</Link></li>
                                            <li><Link to="/"><i className="fab fa-github"></i>star</Link></li>
                                        </ul>
                                    </div>
                                    <Button className='thm-btn'><i className="fas fa-arrow-alt-circle-down"></i> download</Button>
                                </div>
                                <button class="btnClose">
                                    <span class="bar1"></span>
                                    <span class="bar2"></span>
                                    <span class="bar3"></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
