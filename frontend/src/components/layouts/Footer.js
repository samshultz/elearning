import React, { Component } from 'react';


class Footer extends Component {
    render(){
        return (
            <div className="js-fix-footer bg-white border-top-2">
                        <div className="container page-section py-lg-48pt">
                            <div className="row">
                                <div className="col-md-8">
                                    <div className="row">
                                        <div className="col-6 col-md-4 mb-24pt mb-md-0">
                                            <h4 className="text-70">Learn</h4>
                                            <nav className="nav nav-links nav--flush flex-column">
                                                <a className="nav-link" href="library.html">Library</a>
                                                <a className="nav-link" href="library-featured.html">Featured</a>
                                                <a className="nav-link" href="library-filters.html">Explore</a>
                                                <a className="nav-link" href="paths.html">Learning Paths</a>
                                            </nav>
                                        </div>
                                        <div className="col-6 col-md-4 mb-24pt mb-md-0">
                                            <h4 className="text-70">Join us</h4>
                                            <nav className="nav nav-links nav--flush flex-column">
                                                <a className="nav-link" href="pricing.html">Pricing</a>
                                                <a className="nav-link" href="{% url 'account_login">Login</a>
                                                <a className="nav-link" href="{% url 'account_signup">Sign Up</a>
                                                <a className="nav-link" href="signup-payment.html">Payment</a>
                                            </nav>
                                        </div>
                                        <div className="col-6 col-md-4 mb-32pt mb-md-0">
                                            <h4 className="text-70">Community</h4>
                                            <nav className="nav nav-links nav--flush flex-column">
                                                <a className="nav-link" href="student-discussions.html">Discussions</a>
                                                <a className="nav-link" href="student-discussions-ask.html">Ask Question</a>
                                                <a className="nav-link" href="student-profile.html">Student Profile</a>
                                                <a className="nav-link" href="instructor-profile.html">Instructor Profile</a>
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-4 text-md-right">
                                    <p className="text-70 brand justify-content-md-end">
                                        <img className="brand-icon" src="/static/courses/images/logo/black-70@2x.png" width="30" alt="Tutorio" /> Tutorio
                                    </p>
                                    <p className="text-muted mb-0 mb-lg-16pt">Tutorio is an online learning platform that helps anyone achieve their personal and professional goals.</p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-footer page-section py-lg-32pt">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-2 col-sm-4 mb-24pt mb-md-0">
                                        <p className="text-white-70 mb-8pt"><strong>Follow us</strong></p>
                                        <nav className="nav nav-links nav--flush">
                                            <a href="#" className="nav-link mr-8pt"><img src="/static/courses/images/icon/footer/facebook-square@2x.png" width="24" height="24" alt="Facebook" /></a>
                                            <a href="#" className="nav-link mr-8pt"><img src="/static/courses/images/icon/footer/twitter-square@2x.png" width="24" height="24" alt="Twitter" /></a>
                                            <a href="#" className="nav-link mr-8pt"><img src="/static/courses/images/icon/footer/vimeo-square@2x.png" width="24" height="24" alt="Vimeo" /></a>
                                            <a href="#" className="nav-link"><img src="/static/courses/images/icon/footer/youtube-square@2x.png" width="24" height="24" alt="YouTube" /></a>
                                        </nav>
                                    </div>
                                    <div className="col-md-6 col-sm-4 mb-24pt mb-md-0 d-flex align-items-center">
                                        <a href="" className="btn btn-outline-white">English <span className="icon--right material-icons">arrow_drop_down</span></a>
                                    </div>
                                    <div className="col-md-4 text-md-right">
                                        <p className="mb-8pt d-flex align-items-md-center justify-content-md-end">
                                            <a href="" className="text-white-70 text-underline mr-16pt">Terms</a>
                                            <a href="" className="text-white-70 text-underline">Privacy policy</a>
                                        </p>
                                        <p className="text-white-50 mb-0">Copyright 2019 &copy; All rights reserved.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
          );
    }
  
}

export default Footer;