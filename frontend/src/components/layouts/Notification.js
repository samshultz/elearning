import React, { Component } from 'react';
import {  
    UncontrolledDropdown, 
    DropdownMenu, 
    DropdownItem,
    Button,
    ListGroup
    
} from 'reactstrap'
import NotificationItem from './NotificationItem';


class Notification extends Component {
    render(){
        return (
            <UncontrolledDropdown className="nav-item dropdown-notifications dropdown-menu-sm-full" nav inNavbar>
                
                <Button className="nav-link btn-flush dropdown-toggle" type="button" data-toggle="dropdown" data-ropdown-disable-document-scroll data-caret="false">
                    <i className="material-icons">notifications</i>
                    <span className="badge badge-notifications badge-danger">2</span>
                </Button>
                <DropdownMenu right>
                    <div data-perfect-scrollbar className="position-relative">
                        <DropdownItem header><strong>Messages</strong></DropdownItem>
                        <ListGroup className="list-group-flush mb-0">
                            <NotificationItem />
                            <NotificationItem />
                            <NotificationItem />
                            <NotificationItem />
                            <NotificationItem />
                        </ListGroup>
                    </div>
                </DropdownMenu>
            </UncontrolledDropdown>
          );
    }
  
}

export default Notification;