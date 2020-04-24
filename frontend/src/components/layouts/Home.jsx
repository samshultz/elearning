import React, { Component } from 'react';
import Hero from './Hero';
import TopCourses from '../courses/TopCourses';
import HomePaths from './HomePaths';
import Feedback from './Feedback';


class Home extends Component {
    render(){
        return (
          <div>
              <Hero />
              <TopCourses />
              <HomePaths />
              <Feedback />
          </div>
          );
    }
  
}

export default Home;