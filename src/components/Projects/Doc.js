import React from 'react'
import doc from '../../assets/img/doc/documentation.png'

const Doc = (props) => {
    return (
        <>
            <div className="complexArea">
                <div className="container">
                    <div className="row">
                        <div className="col-xl-6">
                            <div className="docCompContent">
                                {props.docComp}
                                <div className="docWrapper">
                                    <p><i className="fas fa-fingerprint"></i>Built by Developers for Developers</p>
                                    <p><i className="fab fa-html5"></i>Carefully crafted code for Components</p>
                                    <p><i className="far fa-paper-plane"></i>Dynamic Javascript Components</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-6">
                            <div className="docImg">
                                <img src={doc} alt="doc-img" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doc