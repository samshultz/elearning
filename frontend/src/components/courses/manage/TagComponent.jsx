import React, { Component } from 'react'


class TagComponent extends Component {
    onDelete = e => {
        e.preventDefault()
        this.props.onDelete()
    }
    render(){
        return (
            <span className="badge badge-primary badge-filter">
                <a href="" onClick={this.onDelete}><i className="material-icons">close</i></a> {this.props.tag.name}
            </span>
        )
    }
}

export default TagComponent