import React, { Component } from 'react';
import { Container, Row, Col, Card, Media } from 'reactstrap';


class Feedback extends Component {
  render(){
    return (
      <div className="page-section">
          <Container className="page__container">
            <div className="page-headline text-center">
              <h2>Feedback</h2>
              <p className="lead measure-lead mx-auto text-black-70">What other students turned professionals have to say about us after learning with us and reaching their goals.</p>
            </div>

            <div className="position-relative carousel-card">
              <Row className="d-block js-mdk-carousel" id="carousel-feedback">
                <a className="carousel-control-next js-mdk-carousel-control mt-n24pt" href="#carousel-feedback" role="button" data-slide="next">
                  <span className="carousel-control-icon material-icons" aria-hidden="true">keyboard_arrow_right</span>
                  <span className="sr-only">Next</span>
                </a>
                <div className="mdk-carousel__content">
                  <Col md="6" xs="12">
                    <Card className="card--elevated card-body">
                      <blockquote className="mb-0">
                        <p className="text-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio reiciendis iusto id, doloribus optio soluta laborum nobis dolor tempore velit porro maiores eveniet voluptas officia ipsa magnam aliquam. Perferendis?</p>
                        <div className="media">
                          <div className="media-left">
                            <img src="./static/courses/images/people/110/guy-1.jpg" width="40" alt="avatar" className="rounded-circle" />
                          </div>
                          <div className="media-body media-middle">
                            <p className="mb-0"><a href="" className="text-body"><strong>Umberto Kass</strong></a></p>
                            <div className="rating">
                              <span className="rating__item"><span className="material-icons">star</span></span>
                              <span className="rating__item"><span className="material-icons">star</span></span>
                              <span className="rating__item"><span className="material-icons">star</span></span>
                              <span className="rating__item"><span className="material-icons">star</span></span>
                              <span className="rating__item"><span className="material-icons">star_border</span></span>
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </Card>
                  </Col>
                  <Col md="6" xs="12">
                    <Card className="card--elevated card-body">
                      <blockquote className="mb-0">
                        <p className="text-70">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia distinctio reiciendis iusto id, doloribus optio soluta laborum nobis dolor tempore velit porro maiores eveniet voluptas officia ipsa magnam aliquam. Perferendis?</p>
                        <div className="media">
                          <div className="media-left">
                            <img src="./static/courses/images/people/110/guy-2.jpg" width="40" alt="avatar" className="rounded-circle" />
                          </div>
                          <div className="media-body media-middle">
                            <p className="mb-0"><a href="" className="text-body"><strong>Umberto Kass</strong></a></p>
                            <div className="rating">
                              <span className="rating__item"><span className="material-icons">star</span></span>
                              <span className="rating__item"><span className="material-icons">star</span></span>
                              <span className="rating__item"><span className="material-icons">star</span></span>
                              <span className="rating__item"><span className="material-icons">star</span></span>
                              <span className="rating__item"><span className="material-icons">star_border</span></span>
                            </div>
                          </div>
                        </div>
                      </blockquote>
                    </Card>
                  </Col>
                </div>
              </Row>
              </div>
          </Container>
      </div>
    )
  }
}

export default Feedback;