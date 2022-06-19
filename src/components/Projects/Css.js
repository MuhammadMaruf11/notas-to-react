import React from 'react'
import { Link } from "react-router-dom";
import cssComp from '../../utilities/Images/cssCompImg'

const Css = (props) => {
    return (
        <>
            <div className="cssArea fix">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-xl-6 col-lg-6 col-md-5 col-12">
                            <div className='cssCompContent pb-xs-150'>
                                {props.cssComp}
                                <div className="cssBtns">
                                    <span className="cssBtn">BUTTONS</span>
                                    <span className="cssBtn">INPUTS</span>
                                    <span className="cssBtn">LABELS</span>
                                    <span className="cssBtn">MENUS</span>
                                    <span className="cssBtn">NAVBARS</span>
                                    <div className='py-2 d-lg-block d-none'></div>
                                    <span className="cssBtn">PAGINATION</span>
                                    <span className="cssBtn">PROGRESSBARS</span>
                                    <span className="cssBtn">TYPOGRAPHY</span>
                                </div>
                                <div className="viewBtn pb-xs-70">
                                    <Link to='/About'>View All <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i> </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6 col-lg-6 col-md-7 col-12 pb-xs-120">
                            <div className="cssCompImg pb-xs-120">
                                <img className="compImages img1" src={cssComp.regular} alt="" />
                                <img className="compImages img2" src={cssComp.github} alt="" />
                                <img className="compImages img3" src={cssComp.revision} alt="" />
                                <img className="compImages img4" src={cssComp.services} alt="" />
                                <img className="compImages img5" src={cssComp.romina} alt="" />
                                <img className="compImages img6" src={cssComp.indigo} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Css