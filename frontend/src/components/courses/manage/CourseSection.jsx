import React, { Component } from 'react';
import {
  Card,
  CardHeader,
  CardTitle,
  ListGroup,
  ListGroupItem,
  Button
} from 'reactstrap';

import { connect } from "react-redux";
import { 
  deleteContent,
  getCourseSectionContent
} from "../../../actions/coursesActions";

import { Link, withRouter } from 'react-router-dom';
import PropTypes from "prop-types";

class CourseSection extends Component{
  state = {
    isHovered: ""
  }
  
  componentDidUpdate(prevProps){
    if(this.props.courseDeleted){
      if(this.props.courseDeleted.Deleted !== prevProps.courseDeleted.Deleted){
        const { courseID } = this.props
        this.props.getCourseSectionContent(courseID)
      }
    }
    
  }

  handleMouseEnter = e => {
    
    this.setState({ isHovered: e.target.id})
  }

  handleMouseLeave = e => {
    this.setState({ isHovered: ""})
  }

  onDelete = (course_id, section_id, content_id) => {
    this.props.deleteContent(course_id, section_id, content_id)
    
  }

  render(){
    const { section, content, sectionLength, courseID } = this.props
    console.log(content)
    return (
      <>
        <Card className="stack">
          <CardHeader>
            <CardTitle tag="h4" order={`${section ? section.order : 0}`} className="mb-0">{ section ? section.title : "" }</CardTitle>
          </CardHeader>
          <ListGroup flush={true}>
            {
              sectionLength > 0 ?
                content === undefined ?
                <div className="card mx-auto">
                  
                  <div className="card-body p-24pt is-loading is-loading-lg">
                    Loading course sections
                  </div>
                </div> :
                content.filter(item => item.section_id === section.id).
                map(
                  (item, key) => 
                  (<ListGroupItem key={key} onMouseEnter={this.handleMouseEnter} onMouseLeave={this.handleMouseLeave}
                  id={`hover-section-${item.section_id}-${key}`}>

                  { item.item ?
                      item.item.model_name === "video" ?
                        <span className="material-icons icon-16pt icon--left text-body">
                          play_circle_outline
                        </span> :
                      item.item.model_name === "file" ?
                        <span className="material-icons icon-16pt icon--left text-body">
                          attach_file
                        </span> :
                      item.item.model_name === "image" ?
                        <span className="material-icons icon-16pt icon--left text-body">
                          image
                        </span>:
                      item.item.model_name === "text" ?
                      <span className="material-icons icon-16pt icon--left text-body">
                        note
                      </span>:
                      ""
                    :
                    ""
                  }
                    {item.item ? item.item.title: ""}
                    {
                      this.state.isHovered === `hover-section-${item.section_id}-${key}` ?
                      <div className="float-right action-buttons">
                      <button type="button" className="btn btn-outline-accent btn-rounded" title={item.item.title} onClick={() => this.onDelete(this.props.match.params.course_id, section.id, item.id)}>
                        <i className="material-icons">close</i>
                      </button>
                      <Link type="button" to={`/courses/me/manage/course/${this.props.match.params.course_id}/sections/${section.id}/${item.item.model_name}/content/${item.id}/update/`} className="btn btn-outline-success btn-rounded">
                      <i className="material-icons">edit</i> 
                      </Link>
                      
                    </div> :
                    ""
                    }
                    
                  </ListGroupItem>

                ))
                :
              <ListGroupItem>
                No module created yet. Click the button below to create a module<br />
              </ListGroupItem>
            }
              {
                sectionLength > 0 ?

                  <ListGroupItem>
                  Add new content to this module by clicking any of the button below:
                  <br />
                  <Link to={`/courses/me/manage/course/${courseID}/sections/${section.id}/content/add/`} className="btn btn-accent">
                    Add content 
                  </Link>             
                  
                </ListGroupItem>:
                ""
              }
          </ListGroup>
        </Card>
      </>
    )
  }
}

CourseSection.propTypes = {
  section: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired,
  deleteContent: PropTypes.func.isRequired,
  getCourseSectionContent: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  courseDeleted: state.courses.courseDeleted || {'Deleted': ""},
  content: state.courses.content
});

export default withRouter(connect(
  mapStateToProps,
  { deleteContent, getCourseSectionContent }
)(CourseSection));

