import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';

class Hero extends Component {
    render(){
        return (
          <div>
          <div className="mdk-box mdk-box--bg-gradient-primary bg-dark js-mdk-box position-relative overflow-hidden mb-0" data-effects="parallax-background blend-background">
                <div className="mdk-box__bg">
                  <div className="mdk-box__bg-front" style={{backgroundImage: './static/courses/images/1280_work-station-straight-on-view.jpg'}}>             
                  </div>
                </div>
                <div className="mdk-box__content">
                  <div className="container page__container py-64pt py-md-112pt">
                      <div className="row align-items-center text-center text-md-left">
                          <div className="col-md-6 col-lg-5 order-1 order-md-0">
                              <h1 className="text-white">Learn <span className="d-block d-md-inline-block text-scramble js-text-scramble">Development</span></h1>
                              <p className="lead mb-32pt mb-lg-48pt text-white">Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.</p>
                              <a href="#" className="btn btn-lg btn-white btn--raised mb-16pt">Browse Courses</a>
                             <p className="mb-0"><a href="#" className="text-white-70 text-underline"><strong>Are you a teacher?</strong></a></p>
                          </div>
                          <div className="col-md-6 col-lg-7 order-0 order-md-1 text-center mb-32pt mb-md-0">
                              <img src="./static/courses/images/macbook.png" alt="macbook" className="home-macbook" />
                          </div>
                      </div>
                  </div>
                  {/*<div className="hero container text-center py-112pt">
          <h1 className="text-white">Learn to Code</h1>
          <p className="lead measure-hero-lead mx-auto mb-48pt text-white">Business, Technology and Creative Skills taught by industry experts. Explore a wide range of skills with our professional tutorials.</p>
          <a href="library.html" className="btn btn-lg btn-outline-white">Browse Courses</a>
        </div>*/}
                </div>
              </div>
              <div className="bg-white border-bottom-2 py-16pt py-sm-24pt py-md-32pt ">
                <Container className="page__container">
                  <Row className="align-items-center">
                    <div className="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
                      <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
                        <i className="material-icons text-primary-light">subscriptions</i>
                      </div>
                      <div className="flex">
                        <p className="mb-0"><strong>8,000+ courses</strong></p>
                        <p className="text-black-70 mb-0">Explore a wide range of skills.</p>
                      </div>
                    </div>
                    <div className="d-flex col-md align-items-center border-bottom border-md-0 mb-16pt mb-md-0 pb-16pt pb-md-0">
                      <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
                        <i className="material-icons text-primary-light">verified_user</i>
                      </div>
                      <div className="flex">
                        <p className="mb-0"><strong>By Industry Experts</strong></p>
                        <p className="text-black-70 mb-0">Professional development from the best people.</p>
                      </div>
                    </div>
                    <div className="d-flex col-md align-items-center">
                      <div className="rounded-circle bg-primary w-64 h-64 d-inline-flex align-items-center justify-content-center mr-16pt">
                        <i className="material-icons text-primary-light">update</i>
                      </div>
                      <div className="flex">
                        <p className="mb-0"><strong>Unlimited Access</strong></p>
                        <p className="text-black-70 mb-0">Unlock Library and learn any topic with one subscription.</p>
                      </div>
                    </div>
                  </Row>
                </Container>
              </div>
                   
            </div>
          );
    }
  
}

export default Hero;     

