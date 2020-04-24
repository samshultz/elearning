import React, { Component } from 'react';
import { ListGroupItem } from 'reactstrap';

class NotificationItem extends Component {
    render(){
        return (
            <ListGroupItem tag="a" href="#" action>
                {/*class list-group-item-action*/}
                <span className="d-flex align-items-center mb-1">
                    <small className="text-black-50">5 hours ago</small>
                </span>
                <span className="d-flex">
                    <span className="avatar avatar-xs mr-2">
                        <span className="avatar-title rounded-circle bg-light">
                            <i className="material-icons font-size-16pt text-success">group_add</i>
                        </span>
                    </span>
                    <span className="flex d-flex flex-column">
                        <strong>Adrian. D</strong>
                        <span className="text-black-70">Wants to join your private group.</span>
                    </span>
                </span>
            </ListGroupItem>
          );
    }
  
}

export default NotificationItem;