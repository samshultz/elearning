import React, { Component } from 'react';
import { 
    Navbar, 
    Nav, 
    NavLink, 
    NavItem,  
    DropdownMenu, 
    DropdownItem,
    Container 
} from 'reactstrap';

class MainNav extends Component {
    render(){
        return (
            <Navbar className="navbar-mini bg-dark d-none d-md-flex p-0" expand="sm" color="dark" dark fixed="bottom" id="demo-navbar">
                <Container fluid={true}>
                    <Nav className="flex-nowrap" navbar>
                        <NavItem className="dropup active">
                            <NavLink href="#" className="dropdown-toggle" data-toggle="dropdown">
                                Catalog
                            </NavLink>
                            <DropdownMenu>
                                <DropdownItem tag="a" href="#" active={true}>
                                    Home page
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag="a" href="#">
                                    Library
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Featured
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Development
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag="a" href="#">
                                    Explore
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Explore List
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag="a" href="#">
                                    Learning paths
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag="a" href="#">
                                    Course Details
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Learning Details
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Path Details
                                </DropdownItem>
                            </DropdownMenu>
                        </NavItem>

                        <NavItem className="dropup">
                            <NavLink href="#" className="dropdown-toggle" data-toggle="dropdown">
                                Student
                            </NavLink>
                            <DropdownMenu>
                                <DropdownItem tag="a" href="#" active={true}>
                                    Dashboard
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    My Courses
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Take Course
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Take Lesson
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag="a" href="#">
                                    Take Quiz
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Quiz Result
                                </DropdownItem>
                                
                                <DropdownItem tag="a" href="#">
                                    My Quizzes
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag="a" href="#">
                                    Skill Assessment
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Skill Results
                                </DropdownItem>
                            </DropdownMenu>
                        </NavItem>

                        <NavItem className="dropup">
                            <NavLink href="#" className="dropdown-toggle" data-toggle="dropdown">
                                Instructor
                            </NavLink>
                            <DropdownMenu>
                                <DropdownItem tag="a" href="#" active={true}>
                                    Dashboard
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Courses
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Quizzes
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag="a" href="#">
                                    Edit Course
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Edit Quiz
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag="a" href="#">
                                    Earnings
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Statement
                                </DropdownItem>
                            </DropdownMenu>
                        </NavItem>

                        <NavItem className="dropup">
                            <NavLink href="#" className="dropdown-toggle" data-toggle="dropdown">
                                Community
                            </NavLink>
                            <DropdownMenu>
                                <DropdownItem tag="a" href="#" active={true}>
                                    Discussions
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Discussion Details
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Ask Question
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag="a" href="#">
                                    Student Profile
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Instructor Profile
                                </DropdownItem>
                            </DropdownMenu>
                        </NavItem>

                        <NavItem className="dropup">
                            <NavLink href="#" className="dropdown-toggle" data-toggle="dropdown">
                                Account
                            </NavLink>
                            <DropdownMenu>
                                <DropdownItem tag="a" href="#">
                                    Log-in
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Signup
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Change Password
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag="a" href="#">
                                    Edit Account
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Profile &amp; Privacy
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Email Notifications
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag="a" href="#">
                                    Subscription
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Upgrade Account
                                </DropdownItem>
                                <DropdownItem tag="a" href="#">
                                    Payment History
                                </DropdownItem>
                                
                            </DropdownMenu>
                        </NavItem>
                    </Nav>
                </Container>
            </Navbar>
          );
    }
  
}

export default MainNav;