import { 
  FETCH_COURSE, 
  INSTRUCTOR_COURSES, 
  FETCH_TOP_COURSES,
  FETCH_COURSE_SECTION_CONTENT ,
  NEW_CONTENT,
  FETCH_CATEGORIES,
  UPDATE_COURSE,
  NEW_SECTION,
  FETCH_CONTENT,
  UPDATE_CONTENT,
  DELETE_CONTENT
} from './types'
import axios from 'axios'

axios.defaults.baseURL = "http://localhost:8000"

const authToken = localStorage.getItem("auth-token")
if(authToken != null){
  console.log(authToken)
  axios.defaults.headers.common['Authorization'] = `Token ${authToken}`
}

export function getInstructorCreatedCourses() {
    return function(dispatch) {
      axios.get("/api/courses/me/created/")
        .then(res => dispatch({
            type: INSTRUCTOR_COURSES,
            payload: res.data
          })
        )
        .catch(err => dispatch({
            type: INSTRUCTOR_COURSES,
            payload: err.response
          })
        );
    }
}

export function getTopCourses() {
    return function(dispatch) {
      axios.get("/api/courses/top/")
        .then(res => dispatch({
            type: FETCH_TOP_COURSES,
            payload: res.data
          })
        )
        .catch(err => dispatch({
            type: FETCH_TOP_COURSES,
            payload: err.response
          })
        );
    }
}


export function getCourseDetail(pk) {
    return function(dispatch) {
      axios.get(`/api/courses/${pk}/detail/`)
        .then(res => dispatch({
            type: FETCH_COURSE,
            payload: res.data
          })
        )
        .catch(err => dispatch({
            type: FETCH_COURSE,
            payload: err.response
          })
        );
    }
}

export function getCourseSectionContent(courseID) {
    return function(dispatch) {
      axios.get(`/api/courses/${courseID}/all/content/`)
        .then(res => dispatch({
            type: FETCH_COURSE_SECTION_CONTENT,
            payload: res.data
          })
        )
        .catch(err => dispatch({
            type: FETCH_COURSE_SECTION_CONTENT,
            payload: err.response
          })
        );
    }
}

export function createNewContent(data, courseID, sectionID, modelName) {
    return function(dispatch) {
      axios.post(`/api/courses/${courseID}/sections/${sectionID}/${modelName}/content/create/`, 
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        )
        .then(res => dispatch({
            type: NEW_CONTENT,
            payload: res.data
          })
        )
        .catch(err => dispatch({
            type: NEW_CONTENT,
            payload: err.response
          })
        );
    }
}

export function createNewSection(data, courseID) {
    return function(dispatch) {
      axios.post(`/api/courses/${courseID}/sections/create/`, 
        data
        )
        .then(res => dispatch({
            type: NEW_SECTION,
            payload: res.data
          })
        )
        .catch(err => dispatch({
            type: NEW_SECTION,
            payload: err.response
          })
        );
    }
}

export function updateCourse(data, courseID) {
    return function(dispatch) {
      axios.patch(`/api/courses/${courseID}/edit/`, 
        data,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        }
        )
        .then(res => dispatch({
            type: UPDATE_COURSE,
            payload: res.data
          })
        )
        .catch(err => dispatch({
            type: UPDATE_COURSE,
            payload: err.response
          })
        );
    }
}

export function getAllCategories() {
    return function(dispatch) {
      axios.get(`/api/courses/categories/`)
        .then(res => dispatch({
            type: FETCH_CATEGORIES,
            payload: res.data
          })
        )
        .catch(err => dispatch({
            type: FETCH_CATEGORIES,
            payload: err.response
          })
        );
    }
}


export function deleteContent(courseID, sectionID, contentID) {
  return function(dispatch) {
    axios.delete(`/api/courses/${courseID}/sections/${sectionID}/content/${contentID}/delete/`)
      .then(res => dispatch({
          type: DELETE_CONTENT,
          payload: res.data
        })
      )
      .catch(err => dispatch({
          type: DELETE_CONTENT,
          payload: err.response
        })
      );
  }
}

export function getContentDetail(courseID, sectionID, modelName, objectID) {
  return function(dispatch) {
    axios.get(`/api/courses/${courseID}/sections/${sectionID}/${modelName}/content/${objectID}/update/`)
      .then(res => dispatch({
          type: FETCH_CONTENT,
          payload: res.data
        })
      )
      .catch(err => dispatch({
          type: FETCH_CONTENT,
          payload: err.response
        })
      );
  }
}

export function updateContent(courseID, sectionID, modelName, objectID, data) {
  return function(dispatch) {
    axios.patch(`/api/courses/${courseID}/sections/${sectionID}/${modelName}/content/${objectID}/update/`, data)
      .then(res => dispatch({
          type: UPDATE_CONTENT,
          payload: res.data
        })
      )
      .catch(err => dispatch({
          type: UPDATE_CONTENT,
          payload: err.response
        })
      );
  }
}