import { 
    FETCH_COURSES,
    FETCH_COURSE, 
    NEW_COURSE, 
    INSTRUCTOR_COURSES,
    FETCH_TOP_COURSES,
    FETCH_COURSE_SECTION_CONTENT,
    NEW_CONTENT,
    FETCH_CATEGORIES,
    UPDATE_COURSE,
    NEW_SECTION,
    FETCH_CONTENT,
    UPDATE_CONTENT,
    DELETE_CONTENT
} from "../actions/types"

const initialState = {
  courses: [],
  course:{}
}

export default function(state=initialState, action){
    switch(action.type){
        case INSTRUCTOR_COURSES:
          return {
            ...state,
            instructorCourseList: action.payload
          };
        case FETCH_TOP_COURSES:
          return {
            ...state,
            response: action.payload
          };
        case FETCH_COURSE:
          return {
            ...state,
            courseDetail: action.payload
          }
        case FETCH_COURSE_SECTION_CONTENT:
          return {
            ...state,
            content: action.payload
          }
        case NEW_CONTENT:
          return {
            ...state,
            contentDetail: action.payload
          }
        case NEW_SECTION:
          return {
            ...state,
            NewSection: action.payload
          }
        case FETCH_CATEGORIES:
          return {
            ...state,
            categories: action.payload
          }
        case UPDATE_COURSE:
          return {
            ...state,
            course: action.payload
          }
        case DELETE_CONTENT:
          
          return {
            ...state,
            courseDeleted: action.payload
          }
        case FETCH_CONTENT:
          return {
            ...state,
            SingleContent: action.payload
          }
        case UPDATE_CONTENT:
          return {
            ...state,
            updatedContent: action.payload
          }
        default:
            return state
    }
}