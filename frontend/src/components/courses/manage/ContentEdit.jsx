import React, { Component } from 'react';
import {
    Row,
    Breadcrumb,
    BreadcrumbItem,
    Container,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button
} from 'reactstrap';
import classnames from 'classnames'
import Dropzone from 'react-dropzone';
import FileViewer from 'react-file-viewer';
import { Link, Redirect, withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { connect } from "react-redux";
import { 
    getContentDetail,
    updateContent 
} from "../../../actions/coursesActions";
import PropTypes from "prop-types";

import '../../../index.css'


const baseStyle = {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: 2,
    borderRadius: 2,
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#fafafa',
    color: '#bdbdbd',
    outline: 'none',
    transition: 'border .24s ease-in-out'
  };


class ContentEdit extends Component {
    state = {
        title: ""
    }

    componentDidMount(){
        const { course_id, section_id, model_name, content_id } = this.props.match.params
        this.props.getContentDetail(course_id, section_id, model_name, content_id)
    }

    static getDerivedStateFromProps(nextProps, prevState){
        if(!prevState.title){

            if(nextProps.content && nextProps.content.title !== prevState.title){
              if(nextProps.content.file) {
  
                  return {title: nextProps.content.title, file: nextProps.content.file }
              } else {
                  return {title: nextProps.content.title, content: nextProps.content.content }
  
              }
            }
        } else {
            return null
        }
        
      }

    onDrop = files => {
        let noop = Object.assign(files[0], {
            preview: URL.createObjectURL(files[0])
          })
        this.setState(prevState => ({
              file: noop
            }))
        
      }
    
    handleTitleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
        console.log(this.state)
    }

    handleContentChange = (e) => {
        this.setState({content: e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        let formData = new FormData();
        let data = this.state
    
        formData.append('title', data.title)
        if(data.file){
            // Only send file if the file field was change(i.e if new file was uploaded)
            if(typeof data.file !== 'string'){
                formData.append("file", data.file)
            }
        } else if(data.content) {
          formData.append('content', data.content)
    
        }
        const { course_id, section_id, model_name, content_id } = this.props.match.params
        this.props.updateContent(course_id, section_id, model_name, content_id, formData)
    }

    render() {
        const { content, updatedContent } = this.props
        console.log(content)
        const { model_name } = this.props.match.params
        const fileTypeList = ['video', 'image', 'file']

        if(updatedContent && updatedContent.id){
            return <Redirect push to={{
              pathname:`/courses/me/manage/course/${this.props.match.params.course_id}/edit/`
            }} />
            delete this.props.updatedContent
          }
        console.log(this.props.updatedContent)

        return (
            <>
                <div className="mt-5 bg-gradient-primary border-bottom-white py-32pt">
                    <Container className="d-flex flex-column flex-md-row align-items-center text-center text-md-left">
                    <img src="/static/courses/images/illustration/teacher/128/white.svg" width="104" className="mr-md-32pt mb-32pt mb-md-0" alt="instructor" />
                    <div className="flex mb-32pt mb-md-0">
                        <h2 className="text-white mb-0">Edit "{content ? content.title: ""}"</h2>
                        <p className="lead text-white-50 d-flex align-items-center">Content Edit <span className="ml-16pt d-flex align-items-center"><i className="material-icons icon-16pt mr-4pt">opacity</i> 2,300 IQ</span></p>
                    </div>
                    <a href="student-edit-account.html" className="btn btn-outline-white">Edit account</a>
                    </Container>
                </div>

                <Container className="page__container">
                    <Breadcrumb className="breadcrumb m-0">
                        <BreadcrumbItem><Link to="/courses/me/manage/">Home</Link></BreadcrumbItem>
                        <BreadcrumbItem><Link to={`/courses/me/manage/course/${this.props.match.params.course_id}/edit/`}>{content ? content.course: ""}</Link></BreadcrumbItem>
                        <BreadcrumbItem>{content ? content.section: ""}</BreadcrumbItem>
                        <BreadcrumbItem>{content ? content.title: ""}</BreadcrumbItem>
                        <BreadcrumbItem active>Edit</BreadcrumbItem>
                    </Breadcrumb>
                </Container>
                <Container className="page__container page-section">
                    <div className="card card-body mb-32pt">
                        <Row>
                            <Col md="4">
                                <h4 className="card-title">Preview</h4>
                                <p className="text-70">
                                    {
                                        this.state.file ? 
                                        
                                        <FileViewer
                                            fileType={ typeof this.state.file === "string" ? this.state.file.split(".")[1] : this.state.file.type.split("/")[1]}
                                            filePath={typeof this.state.file === "string" ? this.state.file : this.state.file.preview} /> : ""
                                    }
                                </p>
                            </Col>
                            <Col md="6" className="d-flex align-items-center">
                                <Form className="flex" onSubmit={this.handleSubmit}>
                                    <FormGroup>
                                        <Label className="form-label" htmlfor="exampleInputEmail1">Title:</Label>
                                        <Input type="text" onChange={this.handleTitleChange} defaultValue={this.state.title} name="title" placeholder="Title of the content .." />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label className="form-label" for="exampleInputPassword1">{fileTypeList.indexOf(model_name) > -1 ? "File" : "Content"}:</Label>
                                        {
                                            fileTypeList.indexOf(model_name) > -1 ?

                                        <Dropzone accept={model_name === "video" ? "video/*" : model_name === "image" ? "image/*" : ""} onDrop={this.onDrop} multiple={false}>
                                            {({getRootProps, getInputProps}) =>
                                            (
                                                <section className="container">
                                                <div style={baseStyle} {...getRootProps({className: "dropzone"})}>
                                                    <input name="file" {...getInputProps()} />
                                                    <p>Drag 'n' drop video files here, or click to select files</p>
                                                </div>
                                                </section>
                                            )}
                                        </Dropzone> :
                                        <Input type="textarea" onChange={this.handleContentChange} defaultValue={this.state.content} name="content" />
                                        }
                                    </FormGroup>
                                    <Button type="submit" className="btn btn-primary">Submit</Button>
                                </Form>
                            </Col>
                        </Row>
                    </div>
                </Container>
            </>
        )
    }
}

ContentEdit.propTypes = {
    getContentDetail: PropTypes.func.isRequired,
    updateContent: PropTypes.func.isRequired
  };
  
  const mapStateToProps = state => ({
    content: state.courses.SingleContent,
    updatedContent: state.courses.updatedContent
  });
  
  export default withRouter(connect(
    mapStateToProps,
    { getContentDetail, updateContent }
  )(ContentEdit));