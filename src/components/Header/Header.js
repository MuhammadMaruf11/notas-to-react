import React from 'react';
import { Button } from "react-bootstrap";
// import { Images } from "../../utilities/Images";

const Header = () => {
    return (
        <>
            <header className="header-area border-bottom">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="navText">
                            <a href="index.html">Notus NextJS</a>
                            <a href="/"><i className="far fa-file-alt"></i> docs</a>
                            </div>
                        </div>
                        <div className="col-xl-6 text-end">
                            <div className="navLink">
                            <a href="/" className="demoPages">demo pages</a>
                            <div className="socialLinks">
                                <ul>
                                    <li><a href="/"><i className="fab fa-facebook"></i></a></li>
                                    <li><a href="/"><i className="fab fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fab fa-github"></i></a></li>
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
