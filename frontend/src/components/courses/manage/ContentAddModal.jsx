import React, { Component } from 'react';
import {
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    Label,
    Button,
    Nav,
    TabContent,
    TabPane,
    NavLink,
    NavItem
} from 'reactstrap';
import classnames from 'classnames'
import Dropzone from 'react-dropzone';
import FileViewer from 'react-file-viewer';
import { Redirect, withRouter } from 'react-router-dom';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

import { connect } from "react-redux";
import { 
  createNewContent 
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

const backdrop = {
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  background: 'black',
  opacity: 0.7
}


class ContentAddModal extends Component {
  constructor(props){
    super(props)
    
    this.state = {
      activeTab: "video",
      isOpen: false,
      text: {
        title: "",
        content: ""
      },
      video: {
        title: "",
        file: ""
      },
      img: {
        title: "",
        file: ""
      },
      file: {
        title: "",
        file: ""
      }
    }

  }

  onDrop = files => {
    let noop = Object.assign(files[0], {
        preview: URL.createObjectURL(files[0])
      })
    this.setState(prevState => ({
          video: {
            ...prevState.video,
            file: noop
          }
        }))
  }

  handleImgTitleChange = (e) => {
    const value = e.target.value
    this.setState(prevState => ({
          img: {
            ...prevState.img,
            title: value
          }
        }))
  }
  
  handleVideoTitleChange = (e) => {
    const value = e.target.value
    this.setState(prevState => ({
          video: {
            ...prevState.video,
            title: value
          }
        }))
  }

  handleFileTitleChange = (e) => {
    const value = e.target.value
    this.setState(prevState => ({
          file: {
            ...prevState.file,
            title: value
          }
        }))
  }

  handleTextTitleChange = (e) => {
    const value = e.target.value
    this.setState(prevState => ({
          text: {
            ...prevState.text,
            title: value
          }
        }))

  }

  onImgDrop = img => {
    let images = Object.assign(img[0], {
      preview: URL.createObjectURL(img[0])
    })
    this.setState(prevState => ({
          img: {
            ...prevState.img,
            file: images
          }
        }))
  }

  onFileDrop = file => {
    let files = Object.assign(file[0], {
      preview: URL.createObjectURL(file[0])
    })
    this.setState(prevState => ({
          file: {
            ...prevState.file,
            file: files
          }
        }))
  }

  handleTextContentChange = value => {
    this.setState(prevState => ({
          text: {
            ...prevState.text,
            content: value
          }
        }))
  }

  toggle = tab => {
    if(this.state.activeTab !== tab) {
      this.setState({ activeTab: tab })
    }
  }

  onSubmit = (e) => {
    let formData = new FormData();
    let data = this.state[this.state.activeTab]

    formData.append('title', data.title)
    if(data.file){
      formData.append('file', data.file)
    } else if(data.content) {
      formData.append('content', data.content)

    }
    
    
    const { activeTab } = this.state
    const sectionID = window.sectionID
    this.props.createNewContent(formData, this.props.courseId, sectionID, activeTab)
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state[this.state.activeTab])
  }

  modalClose = () => {
    this.setState({ isOpen: false })
    document.body.style.removeProperty("overflow")
  }

  modalOpen= () => {
    console.log(window.sectionID[0])
    this.setState({ isOpen: true })
    document.body.style.overflow = "hidden"
  }

  render(){
      const {content} = this.props

      if(content && content.id){
        this.modalClose()
        document.body.style.removeProperty("overflow")
        return <Redirect push to={{
          pathname:`/courses/me/manage/course/${this.props.courseId}/edit/`,
          state: {courseCreated: true}
        }} />
      }

      return (
        <>
          <div id="cardBackdrop" onClick={this.modalClose} style={this.state.isOpen ? backdrop : { display: "none"}} className={`d-flex justify-content-center${this.state.isOpen ? "" : " d-none"}`}> 
          </div>
          <button onClick={this.modalOpen } className="d-none" id="card-toggle">Card Toggle</button>
          <div style={{ zIndex: 9999, position: "fixed", top: "50%", left: "50%", right: 0, transform: 'translate(-50%, -50%)' }} className={`card--elevated card ${this.state.isOpen ? "" : "d-none"}`}>
            <Nav className="nav-tabs-card" tabs>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === "video" })} onClick={() => { this.toggle("video") }} data-toggle="tab">
                  <i className="material-icons text-muted">video_library</i>
                  Add a Video
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === "text" })} onClick={() => { this.toggle("text") }} data-toggle="tab">
                  <i className="material-icons text-muted">text_format</i>
                  Add Text
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === "image" })} onClick={() => { this.toggle("image") }} data-toggle="tab">
                  <i className="material-icons text-muted">image</i>
                  Add an Image
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className={classnames({ active: this.state.activeTab === "file" })} onClick={() => { this.toggle("file") }} data-toggle="tab">
                  <i className="material-icons text-muted">insert_drive_file</i>
                  Add a File
                </NavLink>
              </NavItem>
            </Nav>
          <TabContent style={{ height: "300px", overflowY: "scroll" }} className="card-body" activeTab={this.state.activeTab}>
            <TabPane tabId="video">
              <Form id="form-video" onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Row>
                    <Col sm="12" md={{ size: 8, offset: 2 }}>
                      <Label>Title:</Label>
                      <Input onChange={this.handleVideoTitleChange} value={this.state.video.title} className="col-md-offset-3" type="text" name="title" placeholder="Video title" required />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                      <Label>File:</Label>
                      <Dropzone accept="video/*" onDrop={this.onDrop} multiple={false}>
                        {({getRootProps, getInputProps}) =>
                          (
                            <section className="container">
                              <div style={baseStyle} {...getRootProps({className: "dropzone"})}>
                                <input name="file" {...getInputProps()} />
                                <p>Drag 'n' drop video files here, or click to select files</p>
                              </div>
                            </section>
                          )}
                      </Dropzone>

                    </Col>
                  </Row>
                </FormGroup>
              </Form>
              {
                this.state.video.file ?
                <FormGroup>
                  <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                      <Label>Preview:</Label>
                      <div className="img-fluid">

                        <FileViewer
                          fileType={ this.state.video.file ? this.state.video.file.type.split("/")[1]: "" }
                          filePath={this.state.video.file ? this.state.video.file.preview : ""} />          
                      
                      </div>
                    </Col>
                  </Row>
                </FormGroup> :
                ""
              }
            </TabPane>
            <TabPane tabId="text">
              <Form id="form-text" onSubmit={this.handleSubmit}>
                <FormGroup>
                  <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                      <Label>Title:</Label>
                      <Input onChange={this.handleTextTitleChange} value={this.state.text.title} type="text" name="video-title" placeholder="Title of Text" required />
                    </Col>
                  </Row>
                </FormGroup>

                <FormGroup>
                  <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                      <Label>Content:</Label>
                      <ReactQuill onChange={this.handleTextContentChange} style={{ height: "150px" }} placeholder="Content goes here ..." />
                    </Col>
                  </Row>
                </FormGroup>
              </Form>
            </TabPane>
            <TabPane tabId="image">
              <Form id="form-img" onSubmit={this.handleSubmit} >
                <FormGroup>
                  <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                      <Label>Title:</Label>
                      <Input value={this.state.img.title} onChange={this.handleImgTitleChange} type="text" name="title" placeholder="Image title" required />
                    </Col>
                  </Row>
                </FormGroup>
                <FormGroup>
                  <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                      <Label>Image:</Label>
                       <Dropzone accept="image/*" onDrop={this.onImgDrop} multiple={false}>
                        {({getRootProps, getInputProps}) =>
                          (
                            <section className="container">
                              <div style={baseStyle} {...getRootProps({className: "dropzone"})}>
                                <input name="file" {...getInputProps()} />
                                <p>Drag 'n' drop Image files here, or click to select files</p>
                              </div>
                            </section>
                          )}
                      </Dropzone>
                    </Col>
                  </Row>
                </FormGroup>
              </Form>
              {
                this.state.img.file ?
                <FormGroup>
                  <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                      <Label>Preview:</Label>
                      <div className="img-fluid">

                        <FileViewer
                          fileType={ this.state.img.file ? this.state.img.file.type.split("/")[1]: "" }
                          filePath={this.state.img.file ? this.state.img.file.preview : ""} />          
                      
                      </div>
                    </Col>
                  </Row>
                </FormGroup> :
                ""
              }
            </TabPane>
            <TabPane tabId="file">
                <Form id="form-file" onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Row>
                      <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label>Title:</Label>
                        <Input onChange={this.handleFileTitleChange} value={this.state.file.title} className="col-md-offset-3" type="text" name="title" placeholder="File title" required />
                      </Col>
                    </Row>
                  </FormGroup>
                  <FormGroup>
                    <Row>
                      <Col sm="12" md={{ size: 8, offset: 2 }}>
                        <Label>File:</Label>
                        <Dropzone onDrop={this.onFileDrop} multiple={false}>
                          {({getRootProps, getInputProps}) =>
                            (
                              <section className="container">
                                <div style={baseStyle} {...getRootProps({className: "dropzone"})}>
                                  <input name="file" {...getInputProps()} />
                                  <p>Drag 'n' drop files here, or click to select files</p>
                                </div>
                              </section>
                            )}
                        </Dropzone>
                      </Col>
                    </Row>
                  </FormGroup>
                </Form>
              {
                this.state.file.file ?
                <FormGroup>
                  <Row>
                    <Col sm="12" md={{ size: 10, offset: 1 }}>
                      <Label>Preview:</Label>
                      <div className="img-fluid" id="fileViewer">

                        <FileViewer
                          fileType={ this.state.file.file ? this.state.file.file.name.split(".")[1]: "" }
                          filePath={this.state.file.file ? this.state.file.file.preview : ""} />          
                      
                      </div>
                    </Col>
                  </Row>
                </FormGroup> :
                ""
              }
            </TabPane>

          </TabContent>
          <div className="card-footer d-flex align-items-center">
              <div className="ml-auto">
                <Button onClick={this.modalClose} type="button" className="btn btn-outline-accent" outline>
                  Close
                </Button><span> </span>
                <Button id="content-submit-btn" onClick={this.onSubmit} type="button" className="btn btn-success">
                  Add Content
                </Button>
              </div>
          </div>
          
          </div>
        </>
        );
  }
}

ContentAddModal.propTypes = {
  createNewContent: PropTypes.func.isRequired,
  content: PropTypes.array.isRequired,
};

const mapStateToProps = state => ({
  content: state.courses.contentDetail
});

export default withRouter(connect(
  mapStateToProps,
  { createNewContent }
)(ContentAddModal));