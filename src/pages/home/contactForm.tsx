import React from 'react';

function ContactForm(props) {
    return (
        <section className="pt-8 pt-md-11 pb-8 pb-md-14 ">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="card card-border border-primary shadow-light-lg">
                            <div className="card-body">
                                <form>
                                    <div className="row">
                                        <div className="col-12 col-md-6">

                                            <div className="form-group mb-5">
                                                <label className="form-label" htmlFor="applyName">Full name</label>
                                                <input className="form-control" id="applyName" type="text"
                                                       placeholder="Full name" />
                                            </div>

                                        </div>
                                        <div className="col-12 col-md-6">

                                            <div className="form-group mb-5">
                                                <label className="form-label" htmlFor="applyEmail">Email</label>
                                                <input className="form-control" id="applyEmail" type="text"
                                                       placeholder="hello@domain.com" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row d-none">
                                        <div className="col-12 col-md-6">

                                            <div className="form-group mb-5">
                                                <label className="form-label">Medical Documents</label>
                                                <input className="form-control" id="applyCover" type="file" />
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">


                                            <div className="form-group mb-5">
                                                <label className="form-label" htmlFor="applyMessage">Why is Landkit
                                                    important to you?</label>
                                                <textarea className="form-control" id="applyMessage"
                                                          placeholder="Let us know!" spellCheck="false"></textarea>
                                            </div>

                                        </div>
                                    </div>
                                    <div className="row align-items-center">
                                        <div className="col-12 col-md">
                                            <button className="btn btn-primary mb-6 mb-md-0 lift">
                                                Apply now <i className="fe fe-arrow-right ms-3"></i>
                                            </button>

                                        </div>
                                        <div className="col-12 col-md-auto">

                                            <p className="fs-sm text-muted mb-0">
                                                Application will be send securely and remain private
                                            </p>

                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactForm;
