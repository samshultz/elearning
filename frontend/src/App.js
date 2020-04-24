import React, { Component } from 'react';

import { Provider } from "react-redux";
import store from "./store";

import {
    Switch,
    Route,
    withRouter
} from "react-router-dom";
import Header from './components/layouts/HeaderNav';
import Home from './components/layouts/Home';
import Footer from './components/layouts/Footer';
import MainNav from './components/layouts/MainNav';
import CoursesModal from './components/layouts/CoursesModal';
import Sidebar from './components/layouts/Sidebar';
import CourseDetail from './components/courses/CourseDetail';
import Content from './components/courses/Content';
import CourseList from './components/courses/manage/CourseList';
import CourseEdit from './components/courses/manage/CourseEdit';
import SignIn from './components/users/Signin';
import SignUp from './components/users/Signup';
import SignOut from './components/users/Signout';
import NavbarAuthPages from './components/layouts/NavbarAuthPages';
import ContentAdd from './components/courses/manage/ContentAdd';
import ContentEdit from './components/courses/manage/ContentEdit';
import CourseSectionAdd from './components/courses/manage/CourseSectionAdd';


class App extends Component {
  state = {
    changeHeader: false
  }


  render(){
    return (
     
        <Provider store={store}>
        
          <div className="preloader">
            <div className="sk-double-bounce">
              <div className="sk-child sk-double-bounce1"></div>
              <div className="sk-child sk-double-bounce2"></div>
            </div>
          </div>
          <div className="mdk-header-layout js-mdk-header-layout">
            {this.props.location.pathname.split("/").some(el => el==="accounts") ? <NavbarAuthPages /> : <Header />}
      
            <div className="mdk-header-layout__content page-content ">
              <Switch>
                <Route path="/courses/:id/" render={() => <CourseDetail />} exact />
                <Route path="/accounts/login/" render={() => <SignIn />} exact />
                <Route path="/accounts/signup/" render={() => <SignUp />} exact />
                <Route path="/accounts/logout/" render={() => <SignOut />} exact />
                <Route path="/courses/me/manage/" render={() => <CourseList />} exact />
                <Route path="/courses/me/manage/course/:course_id/edit/" render={(props) => <CourseEdit {...props} />} exact />
                <Route path="/courses/me/manage/course/:course_id/sections/add/" render={(props) => <CourseSectionAdd {...props} />} exact />
                <Route path="/courses/me/manage/course/:course_id/sections/:section_id/content/add/" render={(props) => <ContentAdd {...props} />} exact />
                <Route path="/courses/me/manage/course/:course_id/sections/:section_id/:model_name/content/:content_id/update/" render={(props) => <ContentEdit {...props} />} exact />
                <Route exact path="/courses/:course_id/sections/:section_id/contents/" render={() => <Content />} />
                <Route path="/" render={() => <Home />} />
                  
              </Switch>
              <Footer />
            </div>
          </div>
          <MainNav />
          <Sidebar />
          <CoursesModal />
          
        </Provider>
 
    );
  }
  
}

export default withRouter(App);