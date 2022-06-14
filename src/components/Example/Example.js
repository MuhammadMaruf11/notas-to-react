import React from 'react'
import example from '../../utilities/Images/exampleImg'

const Example = () => {
    return (
        <>
            <div className="exampleArea">
                <div className="bgGray"></div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="sectionTitle">
                                <h2>Beautiul Example Pages</h2>
                                <p>Notus NextJS is a completly new product built using our past experience in web templates. Take the examples we made for you and start playing with them.</p>
                            </div>
                        </div>
                    </div>
                    <div className="pageImages">
                        <div className="row">
                            <div className="col-xl-4 col-lg-4">
                                <div className="pageWrapper">
                                    <div className="title">Login Page</div>
                                    <div className="pageImg loginImg">
                                        <img src={example.login} alt="login-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="pageWrapper">
                                    <div className="title">Profile Page</div>
                                    <div className="pageImg profileImg">
                                        <img src={example.profile} alt="login-img" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-4">
                                <div className="pageWrapper">
                                    <div className="title">Landing Page</div>
                                    <div className="pageImg landingImg">
                                        <img src={example.landing} alt="login-img" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Example