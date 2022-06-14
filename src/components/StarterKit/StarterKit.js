import React from 'react'

const StarterKit = () => {
    return (
        <>
            <div className="starterArea">
                <div className="container">
                    <div className="starterDiv">
                    <div className="row">
                        <div className="col">
                            <div className="starterWrap">
                                <div className="emoji">😍</div>
                                <h2>Do you love this Starter Kit?</h2>
                                <p>Cause if you do, it can be yours now. Hit the buttons below to navigate to get the Free version for your next project. Build a new web app or give an old project a new look!</p>
                                <div className="starterBtns">
                                <button className='hero-btn get-btn'>get started</button>
                                <button className='hero-btn github-btn'><i className="fab fa-github"></i>help with a star</button>
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

export default StarterKit