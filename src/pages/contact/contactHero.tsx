import React, {Fragment} from 'react';
import './contact.scss';

function ContactHero(props) {
    const bgUrl = process.env.PUBLIC_URL + "/img/covers/cover-5.jpg"
    console.log(bgUrl);
    return (
        <Fragment>
        <section
                className="py-10 py-md-14 overlay overlay-black overlay-60 bg-cover"
                style={{backgroundImage:`url(${bgUrl})`}}>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-md-10 col-lg-8 text-center">
                        <h1 className="display-2 fw-bold text-white">
                            We’re Here to Help.
                        </h1>
                        <p className="lead text-white-75 mb-0">
                            We always want to hear from you! Let us know how we can
                            best help you and we'll do our very
                            best.
                        </p>

                    </div>
                </div>
            </div>
        </section>
            <div className="position-relative">
                <div className="shape shape-bottom shape-fluid-x svg-shim text-light">
                    <svg viewBox="0 0 2880 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M0 48h2880V0h-720C1442.5 52 720 0 720 0H0v48z" fill="currentColor"></path>
                    </svg>
                </div>
            </div>
        </Fragment>
    );
}

export default ContactHero;
