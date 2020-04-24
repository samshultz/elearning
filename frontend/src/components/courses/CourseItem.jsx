import React, { Component } from 'react';
import { 
  Card, 
  CardTitle,
  Col, 
  Row,
  Media,
  Popover
} from 'reactstrap';

import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";
import { text_truncate } from '../../utils'


class CourseItem extends Component {
  constructor(props){ 
    super(props)
    this.handleClick = this.handleClick.bind(this)
    this.CardClick = this.CardClick.bind(this)
    
    this.state = {
      popoverOpen: false
    }
  }

  CardClick(e){
    e.preventDefault()
  }

  handleClick(e){
    this.setState(state => ({
      popoverOpen: !state.popoverOpen
    }));
    
  }

  render(){
    const { course } = this.props
    console.log(course)
    const { popoverOpen } = this.state;

    if(popoverOpen) {
      let dael = document.getElementById(`${this.props.SID}`)
      dael.dataset.opened = ""

    }
    // const url_split = course.url.split("/")
    // const course.pk = 4 //url_split[url_split.length - 3]
    
    return (
      <Col xs="12" sm="6" md="4" lg="3">
        <Card className={`card--elevated card-course js-overlay overlay mdk-reveal js-mdk-reveal${popoverOpen ? ' overlay--show' : ''} overlay--duserselect`} data-partial-height="40" data-domfactory-upgraded="mdk-reveal,overlay" data-toggle="popover" data-trigger="click" style={{ height: "198px" }} data-original-title={course.title}  id={this.props.SID} onClick={this.CardClick}>
          <a href="" className="js-image" data-position="center" data-height="auto" data-domfactory-upgraded="image" onClick={this.CardClick} style={{ display: "block", position: "relative", overflow: "hidden", backgroundImage: "url(/static/assets/images/paths/angular_430x168.png)", backgroundSize: "cover", backgroundPosition: "center center", height: "168px" }}>
            <img src={`/static/courses/images/paths/swift_430x168.png`} alt="course"/>
            <span className="overlay__content">
              <span className="overlay__action d-flex flex-column text-center">
                <i className="material-icons">play_circle_outline</i>
                <small>Preview course</small>
              </span>
            </span>
          </a>
          {/*<span className="corner-ribbon corner-ribbon--default-right-top corner-ribbon--shadow bg-accent text-white">NEW</span>*/}

          <div className="mdk-reveal__content" style={{transform: popoverOpen ? "translateY(-70px)": "translateY(0px)" }}>
            
            <div className="card-body">
              <div className="d-flex">
                <div className="flex">
                  <CardTitle tag="a" href="" onClick={this.CardClick}>{ text_truncate(course.title, 37) }</CardTitle>
                  <small className="text-50 font-weight-bold mb-4pt">{ `${course.instructor.first_name} ${course.instructor.last_name}` }</small>
                </div>
                <a href="" className="ml-4pt material-icons text-accent card-course__icon-favorite">favorite</a>
              </div>
              <div className="d-flex">
                <div className="rating flex">
                  <span className="rating__item"><span className="material-icons">star</span></span>
                  <span className="rating__item"><span className="material-icons">star</span></span>
                  <span className="rating__item"><span className="material-icons">star</span></span>
                  <span className="rating__item"><span className="material-icons">star</span></span>
                  <span className="rating__item"><span className="material-icons">star_border</span></span>
                </div>
                <small className="text-50">6 hours</small>
              </div>
            </div>
          </div>
        
        </Card>
        <div className="popoverContainer d-none">
        <Popover trigger="legacy" placement="right" target={this.props.SID} isOpen={popoverOpen} toggle={this.handleClick} data-opened>
          <Col>
          <Media className="mt-4 mx-2">
            <Media left>
              <img src="/static/courses/images/paths/swift_40x40@2x.png" width="40" height="40" alt="Angular" className="rounded" />
            </Media>
            <Media body>
              <CardTitle tag="div" className="mb-0">{ course.title }</CardTitle>
              <p className="lh-1 mb-0">
                <span className="text-black-50 small">with</span>
                <span className="text-black-50 small font-weight-bold"> { `${course.instructor.first_name} ${course.instructor.last_name}`}</span>
              </p>
            </Media>
          </Media>

          <p className="my-16pt mx-2 text-black-70">{ course.overview }</p>

          <div className="mb-16pt mx-2">
            <div className="d-flex align-items-center">
              <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
              <p className="flex text-black-50 lh-1 mb-0"><small>Fundamentals of working with Angular</small></p>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
              <p className="flex text-black-50 lh-1 mb-0"><small>Create complete Angular applications</small></p>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
              <p className="flex text-black-50 lh-1 mb-0"><small>Working with the Angular CLI</small></p>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
              <p className="flex text-black-50 lh-1 mb-0"><small>Understanding Dependency Injection</small></p>
            </div>
            <div className="d-flex align-items-center">
              <span className="material-icons icon-16pt text-black-50 mr-8pt">check</span>
              <p className="flex text-black-50 lh-1 mb-0"><small>Testing with Angular</small></p>
            </div>
          </div>

          <Row className="align-items-center mb-4 mx-2">
            <Col xs="auto">
              <div className="d-flex align-items-center mb-4pt">
                <span className="material-icons icon-16pt text-black-50 mr-4pt">access_time</span>
                <p className="flex text-black-50 lh-1 mb-0"><small>6 hours</small></p>
              </div>
              <div className="d-flex align-items-center mb-4pt">
                <span className="material-icons icon-16pt text-black-50 mr-4pt">play_circle_outline</span>
                <p className="flex text-black-50 lh-1 mb-0"><small>12 lessons</small></p>
              </div>
              <div className="d-flex align-items-center">
                <span className="material-icons icon-16pt text-black-50 mr-4pt">assessment</span>
                <p className="flex text-black-50 lh-1 mb-0"><small>{ course.difficulty_level }</small></p>
              </div>
            </Col>
            <Col className="text-right">
              {this.props.location.pathname.split("/").some(el => el==="me") ? 
                <Link to={`/courses/me/manage/course/${course.pk}/edit/`} className="btn btn-primary">Edit</Link> : 
              <Link to={`/courses/${course.pk}/`} className="btn btn-primary">Watch trailer</Link>
              }
            </Col>
          </Row>
          </Col>
        </Popover>
        </div>
      </Col>
    )
  }
}

CourseItem.propTypes = {
  course: PropTypes.object.isRequired
};
export default withRouter(CourseItem);