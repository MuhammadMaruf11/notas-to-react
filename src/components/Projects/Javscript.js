import React from 'react'
import { Link } from "react-router-dom";
import jsComp from '../../utilities/Images/jsCompImg'

const Javscript = (props) => {
    return (
        <>
            <div className="jsArea">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl- col-lg-6 col-md-6">
                            <div className="jsCompImg">
                                <div className="row">
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="jsCompWrap svelt">
                                            <div className="compImages">
                                                <img className="img1" src={jsComp.svelte} alt="" />
                                            </div>
                                            <Link to='/about'>Svelte</Link>
                                        </div>
                                        <div className="jsCompWrap react">
                                            <div className="compImages">
                                                <img className="img3" src={jsComp.react} alt="" />
                                            </div>
                                            <Link to='/about'>JavaScript</Link>
                                        </div>
                                        <div className="jsCompWrap next">
                                            <div className="compImages">
                                                <img className="img5" src={jsComp.next} alt="" />
                                            </div>
                                            <Link to='/about'>ReactJs</Link>
                                        </div>
                                    </div>
                                    <div className="col-xl-6 col-lg-6">
                                        <div className="jsCompWrap js">
                                            <div className="compImages">
                                                <img className="img2" src={jsComp.js} alt="" />
                                            </div>
                                            <Link to='/about'>Angular</Link>
                                        </div>
                                        <div className="jsCompWrap angular">
                                            <div className="compImages">
                                                <img className="img4" src={jsComp.angular} alt="" />
                                            </div>
                                            <Link to='/about'>NextJs</Link>
                                        </div>
                                        <div className="jsCompWrap vue">
                                            <div className="compImages">
                                                <img className="img6" src={jsComp.vue} alt="" />
                                            </div>
                                            <Link to='/about'>Vue.js</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-6">
                            <div className="jsCompContent">
                                {props.jsComp}
                                <div className="jsCompWrapper">
                                    <p>In order to create a great User Experience some components require JavaScript. In this way you can manipulate the elements on the page and give more options to your users.</p>
                                    <div className="jsBtns">
                                        <span className="jsBtn">ALERTS</span>
                                        <span className="jsBtn">DROPDOWNS</span>
                                        <span className="jsBtn">MENUS</span>
                                        <div className="d-block d-md-none py-2"></div>
                                        <span className="jsBtn">MODALS</span>
                                        <span className="jsBtn">NAVBARS</span>
                                        <div className='py-2 d-lg-block d-none'></div>
                                        <span className="jsBtn">POPOVERS</span>
                                        <div className="d-block d-md-none py-2"></div>
                                        <span className="jsBtn">TABS</span>
                                        <span className="jsBtn">TOOLTIPS</span>
                                    </div>
                                </div>
                                <div className="viewBtn">
                                    <Link to='/About'>View All <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Javscript