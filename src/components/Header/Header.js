import React from 'react';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
// import { Images } from "../../utilities/Images";

const Header = () => {
    return (
        <>
            <header className="header-area border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="navText">
                            <Link to="/">Notus NextJS</Link>
                            <Link to="/"><i className="far fa-file-alt"></i> docs</Link>
                            </div>
                        </div>
                        <div className="col-xl-6 text-end">
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
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
