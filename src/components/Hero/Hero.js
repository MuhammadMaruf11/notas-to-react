import React from 'react'

const Hero = () => {
    return (
        <>
            <div className="heroArea mt-65">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="hero-text-wrap">
                                <h1 className="hero-title">Notus NextJS - A beautiful extension for Tailwind CSS.</h1>
                                <p className="desc">
                                    Notus NextJS is Free and Open Source. It does not change any of the CSS from Tailwind CSS. It features multiple HTML elements and it comes with dynamic components for ReactJS, Vue and Angular.
                                </p>
                                <button className='hero-btn get-btn'>get started</button>
                                <button className='hero-btn github-btn'>github star</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero