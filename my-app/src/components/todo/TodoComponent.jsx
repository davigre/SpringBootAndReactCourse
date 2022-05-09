import React, { Component } from "react";

class TodoComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {

            id: this.props.params.id
            
        }

    }

    render() {

        return <div>Todo Component for id - {this.props.params.id}</div>

    }

}

export default TodoComponent
