import React, {Fragment} from 'react';

function Process(props) {
    const mainMedia = process.env.PUBLIC_URL + "/img/illustrations/illustration-7.png";
    return (
        <Fragment >
            <div className="section bg-black pt-12 pt-md-15 pb-8 pb-md-11">
                <div className="container">
                    <div className="row justify-content-between align-items-center mb-5">
                        <div className="col-12 col-md-4 order-md-2 text-center mt-5">
                            <img className="img-fluid w-75 w-md-100 mb-6 mb-md-0"
                                 style={{maxWidth:"50%"}}
                                 src={mainMedia} alt="..." />

                        </div>
                        <div className="col-12 col-md-7 order-md-1">
                            <h2 className="text-white" style={{maxWidth:"450px"}}>
                                   We start with your needs and deliver a full banking solution.
                            </h2>

                            <div className="lead text-muted-80 mb-0">
                                Once you provide us with your company’s basic information, we handle the remainder of
                                the process without questions.
                            </div>

                        </div>
                    </div>

                    <div className="row">
                        <div className="col-2">
                            <a className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1"
                               href="#!">
                                <span>1</span>
                            </a>
                        </div>
                        <div className="col-10">
                            <h3 className="text-white">
                                Fill out your intro survey
                            </h3>
                            <p className="text-muted-80 mb-6 mb-md-0">
                                We start with a short 3-step online survey to help us determine the best banking
                                solution for your specific startup.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <a className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1"
                               href="#!">
                                <span>2</span>
                            </a>
                        </div>
                        <div className="col-10">
                            <h3 className="text-white">
                                Fill out your intro survey
                            </h3>
                            <p className="text-muted-80 mb-6 mb-md-0">
                                We start with a short 3-step online survey to help us determine the best banking
                                solution for your specific startup.
                            </p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <a className="btn btn-sm btn-rounded-circle btn-gray-400-10 disabled opacity-1"
                               href="#!">
                                <span>3</span>
                            </a>
                        </div>
                        <div className="col-10">
                            <h3 className="text-white">
                                Fill out your intro survey
                            </h3>
                            <p className="text-muted-80 mb-6 mb-md-0">
                                We start with a short 3-step online survey to help us determine the best banking
                                solution for your specific startup.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="position-relative" style={{height:"4rem"}}>
                <div className="shape shape-top shape-fluid-x shape-flip-x svg-shim text-black">
                    <svg viewBox="0 0 2880 250" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 0h2880v125h-720L720 250H0V0z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </Fragment>
    );
}

export default Process;
