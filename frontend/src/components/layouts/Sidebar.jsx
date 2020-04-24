import React, { Component } from 'react';
import { Form, Input, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

class Sidebar extends Component {
    render(){
        return (
            <div className="mdk-drawer js-mdk-drawer" id="default-drawer">
              <div className="mdk-drawer__content">
                  <div className="sidebar sidebar-dark sidebar-left ps ps--active-y bg-dark" data-perfect-scrollbar>
                      <div className="sidebar-p-a sidebar-b-b sidebar-m-b pt-0">
                          <Link to="/" className="sidebar-brand">
                            <img className="sidebar-brand-icon" src="/static/courses/images/logo/white-100.svg" width="30" alt="Knowdemy" />
                            <span>Knowdemy</span>
                          </Link>
                          <Form action="library-filters.html" className="search-form search-form--black">
                              <Input type="text" className="form-control" placeholder="Search" />
                              <Button className="btn" type="submit" role="button"><i className="material-icons">search</i></Button>
                          </Form>

                      </div>

                      <ul className="sidebar-menu">
                          <li className="sidebar-menu-item active">
                              <a className="sidebar-menu-button" href="index.html">Home Page</a>
                          </li>
                          <li className="sidebar-menu-item active open">
                              <a className="sidebar-menu-button" data-toggle="collapse" href="#catalog_menu">
                                  Catalog
                                  <span className="ml-auto sidebar-menu-toggle-icon"></span>
                              </a>
                              <ul className="sidebar-submenu collapse show sm-indent" id="catalog_menu">
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="library.html">Library</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="library-featured.html">Featured</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="library-development.html">Development</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="library-filters.html">Explore</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="library-filters-list.html">Explore List</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="paths.html">Learning Paths</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="course.html">Course Details</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="lesson.html">Lesson Details</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="path.html">Path Details</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>

                      <div className="sidebar-heading">Pages</div>
                      <ul className="sidebar-menu">
                          <li className="sidebar-menu-item">
                              <a className="sidebar-menu-button" data-toggle="collapse" href="#student_menu">
                                  Student
                                  <span className="ml-auto sidebar-menu-toggle-icon"></span>
                              </a>
                              <ul className="sidebar-submenu collapse sm-indent" id="student_menu">
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-dashboard.html">Dashboard</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-my-courses.html">My Courses</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-quiz-results.html">My Quizzes</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-take-course.html">Take Course</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-take-lesson.html">Take Lesson</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-take-quiz.html">Take Quiz</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-quiz-result-details.html">Quiz Result</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-path-assessment.html">Skill Assessment</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-path-assessment-result.html">Skill Result</a>
                                  </li>
                              </ul>
                          </li>
                          <li className="sidebar-menu-item">
                              <a className="sidebar-menu-button" data-toggle="collapse" href="#instructor_menu">
                                  Instructor
                                  <span className="ml-auto sidebar-menu-toggle-icon"></span>
                              </a>
                              <ul className="sidebar-submenu collapse sm-indent" id="instructor_menu">
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="instructor-dashboard.html">Dashboard</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="instructor-courses.html">Manage Courses</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="instructor-quizzes.html">Manage Quizzes</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="instructor-edit-course.html">Edit Course</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="instructor-edit-quiz.html">Edit Quiz</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="instructor-earnings.html">Earnings</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="instructor-statement.html">Statement</a>
                                  </li>
                              </ul>
                          </li>
                          <li className="sidebar-menu-item">
                              <a className="sidebar-menu-button" data-toggle="collapse" href="#account_menu">
                                  Account
                                  <span className="sidebar-menu-badge badge badge-primary badge-notifications ml-auto">2</span>
                                  <span className="sidebar-menu-toggle-icon"></span>
                              </a>
                              <ul className="sidebar-submenu collapse sm-indent" id="account_menu">
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="pricing.html">Pricing</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="login.html">Login</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="signup.html">Signup</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="signup-payment.html">Payment</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="reset-password.html">Reset Password</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="change-password.html">Change Password</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-edit-account.html">Edit Account</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-edit-account-profile.html">Profile &amp; Privacy</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-edit-account-notifications.html">Email Notifications</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-edit-account-password.html">Account Password</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-billing.html">Subscription</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-billing-upgrade.html">Upgrade Account</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-billing-payment.html">Payment Information</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-billing-history.html">Payment History</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-billing-invoice.html">Invoice</a>
                                  </li>
                              </ul>
                          </li>
                          <li className="sidebar-menu-item">
                              <a className="sidebar-menu-button" data-toggle="collapse" href="#community_menu">
                                  Community
                                  <span className="ml-auto sidebar-menu-toggle-icon"></span>
                              </a>
                              <ul className="sidebar-submenu collapse sm-indent" id="community_menu">
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-discussions.html">Discussions</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-discussion.html">Discussion Details</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-discussions-ask.html">Ask Question</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="student-profile.html">Student Profile</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="instructor-profile.html">Instructor Profile</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>

                      <div className="sidebar-heading">Components</div>
                      <ul className="sidebar-menu">
                          <li className="sidebar-menu-item">
                              <a className="sidebar-menu-button" data-toggle="collapse" href="#components_menu">
                                  Components
                                  <span className="ml-auto sidebar-menu-toggle-icon"></span>
                              </a>
                              <ul className="sidebar-submenu collapse sm-indent" id="components_menu">
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-buttons.html">Buttons</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-charts.html">Charts</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-avatars.html">Avatars</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-forms.html">Forms</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-loaders.html">Loaders</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-tables.html">Tables</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-cards.html">Cards</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-icons.html">Icons</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-tabs.html">Tabs</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-alerts.html">Alerts</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-badges.html">Badges</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-progress.html">Progress</a>
                                  </li>
                                  <li className="sidebar-menu-item">
                                      <a className="sidebar-menu-button" href="ui-pagination.html">Pagination</a>
                                  </li>
                              </ul>
                          </li>
                      </ul>

                  </div>
              </div>
            </div>
          );
    }
  
}

export default Sidebar;