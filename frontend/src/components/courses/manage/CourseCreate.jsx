import React, { Component } from 'react';
import { 
  Container, 
  Col, 
  Row,
  Form,
  Input,
  Label ,
  FormGroup,
  Card,
  CardBody,
  CardHeader,
  ListGroup,
  ListGroupItem,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  FormText
} from 'reactstrap';
import { withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ReactTags from 'react-tag-autocomplete'
import { connect } from "react-redux";
import { 
  getCourseDetail, 
  getCourseSectionContent ,
  getAllCategories,
  updateCourse
} from "../../../actions/coursesActions";
import PropTypes from "prop-types";
import FileViewer from 'react-file-viewer';

import ContentAddModal from './ContentAddModal'
import CourseSection from './CourseSection'
import TagComponent from './TagComponent'



class CourseEdit extends Component {
  constructor(props){
    super(props)

    this.state = {
      difficulty: "beginner",
      title: "",
      overview: "",
      prerequisites: "",
      learning_goals: "",
      category: "",
      difficulty_level: "",
      price: 0,
      tags: [],
      intro_video_save: ""
    }
    this.contentModal = ""
  }

  static getDerivedStateFromProps(nextProps, prevState){
    if(prevState.tags.length < 1){
      if(nextProps.course && nextProps.course !== undefined && nextProps.course.tags){
        let tags = []
        let course = nextProps.course
        for(let i=0; i<course.tags.length; ++i){
          tags.push({id: i+1, name: course.tags[i]})
        }
        return {...course, tags }
      }
    } else{

      return null
    }
  }

  componentDidMount() {
    const { course_id } = this.props.match.params
    this.props.getCourseDetail(course_id)
    this.props.getCourseSectionContent(course_id)
    this.props.getAllCategories()
    
  }

  componentDidUpdate(prevProps){
    if(this.props.location.state !== prevProps.location.state){
      if(this.props.location.state.courseCreated){
        const { course_id } = this.props.match.params
        this.contentModal = <ContentAddModal courseId={course_id} />
        this.props.getCourseDetail(course_id)
        this.props.getCourseSectionContent(course_id)
      }
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    let tags = ""
    let data = this.state

    let formData = new FormData();
    
    Object.entries(data).map(item => {
      if(item[0] !== "sections" || item[0] !== 'tags' || item[0 !== 'intro_video']) {

        formData.append(item[0], item[1])
      } 
      if(item[0] === 'intro_video' && data.intro_video.startsWith("blob")){
        formData.append(item[0], data.intro_video_save)
      }
    })
    this.state.tags.map((item, index) => {
      tags +=item.name
      if(index !== data.tags.length - 1){
        tags += ","
      }
    
    })
    formData.append('tags', tags)
    
    this.props.updateCourse(formData, this.props.match.params.course_id)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
    
  }

  handleIntroVideoChange = e => {
    this.setState({intro_video_save: e.target.files[0], intro_video: URL.createObjectURL(e.target.files[0])})
    
  }

  handlePrerequisiteChange = (value) => {
    this.setState({ prerequisites : value })
  }

  handleLearninGoalsChange = (value) => {
    this.setState({ learning_goals : value })
  }
  
  setDifficultyValue = (e) => {
    this.setState({difficulty: e.target.value})
  }

  onDelete (i) {
    const tags = this.state.tags.slice(0)
    tags.splice(i, 1)
    this.setState({ tags })
  }
 
  onAddition (tag) {
    const tags = [].concat(this.state.tags, tag)
    this.setState({ tags })
  }

  render() {
    const instructor = JSON.parse(localStorage.getItem("userData"))
    let { course, content, categories } = this.props
    console.log(this.props.updatedCourse)
    return (
      <>
        
        <div className="mt-5 bg-gradient-primary border-bottom-white py-32pt">
          <Container className="d-flex flex-column flex-md-row align-items-center text-center text-md-left">
            <img src="/static/courses/images/illustration/teacher/128/white.svg" width="104" className="mr-md-32pt mb-32pt mb-md-0" alt="instructor" />
            <div className="flex mb-32pt mb-md-0">
              <h2 className="text-white mb-0">{`${instructor.first_name} ${instructor.last_name}`}</h2>
              <p className="lead text-white-50 d-flex align-items-center">Instructor <span className="ml-16pt d-flex align-items-center"><i className="material-icons icon-16pt mr-4pt">opacity</i> 2,300 IQ</span></p>
            </div>
            <a href="student-edit-account.html" className="btn btn-outline-white">Edit account</a>
          </Container>
        </div>
        <Form onSubmit={this.handleSubmit}>
         <div className="page-section bg-white border-bottom-2">
          <Container className="page__container">
            <Row className="align-items-center">
              <Col md="8">
                <h4>Course title</h4>
                <FormGroup>
                  <Input onChange={this.handleChange} type="text" name="title" bsSize="lg" defaultValue={this.state.title} placeholder="Course title" required />
                </FormGroup>
                <FormGroup>
                  <h4>Overview</h4>
                    <Input onChange={this.handleChange} type="textarea" name="overview" defaultValue={this.state.overview} placeholder="Course Overview goes here..."/>
                </FormGroup>
                <FormGroup>
                  <h4>Course Prerequisites</h4>
                  <ReactQuill name="prerequisites" onChange={this.handlePrerequisiteChange} className="rounded-top" style={{ height: "150px" }} value={this.state.prerequisites} placeholder="what is required before taking the course..." />
                </FormGroup>
                <br />
                <FormGroup>
                  <h4>Learning goals</h4>
                  <ReactQuill name="learning_goals" onChange={this.handleLearninGoalsChange} style={{ height: "150px" }} value={this.state.learning_goals} placeholder="What will the student benefit from taking this course..." />
                </FormGroup>
              </Col>
              <Col md="4">
                <Card className="m-0">
                  <CardHeader className="text-center">
                    <Input type="submit" className="btn btn-accent" value="Save Course" />
                  </CardHeader>
                  <ListGroup flush={true}>
                    <ListGroupItem className="d-flex">
                      <a className="flex" href="#"><strong>Save Draft</strong></a>
                      <i className="material-icons text-muted">check</i>
                    </ListGroupItem>
                    
                    { this.props.location.pathname.split("/").some(el => el==="edit") ?
                        <ListGroupItem>
                          <a href="" className="text-danger"><strong>Delete Course</strong></a>
                        </ListGroupItem> :
                        ""
                    }    
                  </ListGroup>
                </Card>
              </Col>
            </Row>
          </Container>
         </div>
        
        <Container className="page__container page-section">
          <Row>
            <Col md="8" id="course-sections" style={{ height: "740px", overflowY: "auto"}} >
              <div className="mb-heading d-flex align-items-center">
                <h4 className="flex mb-0">Sections</h4>
                <a href="#" className="text-underline">Change order</a>
              </div>
              {
                course && course.sections ?
                  course.sections.map(
                    (item, key) => <CourseSection sectionLength={course.sections.length} content={content} courseID={course.id} section={item} key={item.id} /> 
                  )
                  :
                  ""
              }

              <a href="#" className="btn btn-outline-secondary mb-24pt mb-sm-0">Add Section</a>
            </Col>
            <Col md="4">
              <div className="mb-heading d-flex align-items-center">
                <h4 className="flex mb-0">Main Video</h4>
                <a href="#" className="text-underline" onClick={(e) => { e.preventDefault(); document.getElementById("intro_video_upload").click()}}>Edit</a>
                <Input type="file" id="intro_video_upload" name="intro_video" onChange={this.handleIntroVideoChange} className="d-none" />
              </div>
              <Card>
                <FileViewer
                  fileType="mp4"
                  filePath={this.state.intro_video} />          
                      
                
              </Card>
              <div className="mb-heading d-flex align-items-center">
                <h4 className="flex mb-0">Course Options</h4>
                <a href="#" className="text-underline">Add</a>
              </div>
              <Card className="card">
                <CardBody>
                  <FormGroup>
                    <Label>Category</Label>
                    <Input onChange={this.handleChange} type="select" name="category" className="custom-select" value={this.state.category}>
                      {
                        categories ?
                          categories.map(
                            (item, key) => <option value={item.name.toLowerCase()}>{item.name}</option>) :
                          <option value="">No categories</option>
                      }
                      
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Difficulty Level</Label>
                    <Input onChange={this.setDifficultyValue} type="select" name="difficulty_level" className="custom-select" value={this.state.difficulty_level}>
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </Input>
                  </FormGroup>
                  <FormGroup>
                    <Label>Price</Label>
                    <Row>
                      <Col md="8">
                        <InputGroup className="form-inline">
                          <InputGroupAddon addonType="prepend"><InputGroupText>$</InputGroupText></InputGroupAddon>
                          <Input name="price" type="number" onChange={this.handleChange} value={this.state.price} />
                        </InputGroup>
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Label>Tags</Label>
                    <ReactTags
                      tags={this.state.tags}
                      onDelete={this.onDelete.bind(this)}
                      onAddition={this.onAddition.bind(this)}
                      tagComponent={TagComponent}
                      allowNew={true}
                      classNames={{selectedTag: "badge badge-primary badge-filter", searchInput: 'form-control'}} />
                    <FormText color="muted">Separate tags with space or comma.</FormText>
                  </FormGroup>
                </CardBody>
              </Card>
            </Col>
          </Row>
        
        <ContentAddModal courseId={this.props.match.params.course_id} />
        {this.contentModal}
        </Container>
        </Form>
        
      </>
    )
  }
}

CourseEdit.propTypes = {
  getCourseDetail: PropTypes.func.isRequired,
  getCourseSectionContent: PropTypes.func.isRequired,
  course: PropTypes.object.isRequired,
  content: PropTypes.array.isRequired,
  categories: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  course: state.courses.courseDetail,
  content: state.courses.content,
  categories: state.courses.categories,
  updatedCourse: state.courses.course
});

export default withRouter(connect(
  mapStateToProps,
  { getCourseDetail, getCourseSectionContent, getAllCategories, updateCourse }
)(CourseEdit));