import React, { useState } from 'react';
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';

const Header = () => {


    const [menuBtn, setMenuBtn] = useState(false);
 
    let mobileMenu;
    let menuMask;
    if (menuBtn) {

        mobileMenu =
            <div class="mobileNavbar flex d-flex">
                <div className="navLink">
                    <div className="socialLinks">
                        <ul>
                            <li><Link to="/about"><i className="far fa-file-alt"></i> <span>docs</span></Link></li>
                            <li><Link to="/" className="demoPages"><span>demo pages</span></Link></li>
                            <li><Link to="/"><i className="fab fa-facebook"></i> <span>share</span></Link></li>
                            <li><Link to="/"><i className="fab fa-twitter"></i><span>tweet</span></Link></li>
                            <li><Link to="/"><i className="fab fa-github"></i><span>star</span></Link></li>
                            <li><Button className='thm-btn'><i className="fas fa-arrow-alt-circle-down"></i> download</Button></li>
                        </ul>
                    </div>
                </div>
                {menuMask}
            </div>

        menuMask =
            <div onClick={() => setMenuBtn(false)}>
                {/* <button class="btnClose">
                    <span class="bar1"></span>
                    <span class="bar2"></span>
                    <span class="bar3"></span>
                </button> */}
            </div>
    }





    return (
        <>
            <header className="headerArea border-bottom">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <div className="navText">
                                <Link to="/">Notus NextJS</Link>
                                <Link to="/about" className='d-lg-inline d-none'><i className="far fa-file-alt"></i> docs</Link>
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
                            <button onClick={() => setMenuBtn(!menuBtn)} class="mobileMenuBtn">
                                <span class="bar1"></span>
                                <span class="bar2"></span>
                                <span class="bar3"></span>
                            </button>
                        </div>
                        <div className="col">
                            {mobileMenu}
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;
