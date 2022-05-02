import { Component } from "react";
import { Link } from 'react-router-dom'
import HelloWorldService from "../../api/todo/HelloWorldService";

class WelcomeComponent extends Component {

    constructor(props) {

        super(props)
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
        this.state = {
            welcomeMessage : ''
        }
        this.handleSuccesfulResponse = this.handleSuccesfulResponse.bind(this)

    }


    render() {

        return (

            <>
                <h1>Welcome!</h1>    
                <div className='container'>
                    Welcome '{this.props.params.name}', You can manage your todos <Link to="/todos">here</Link>
                </div>
                <div className="container">
                    Click here to get a customized welcome message
                    <button className="btn btn-success"onClick={this.retrieveWelcomeMessage}>Get welcome message</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </>

        )

    }

    retrieveWelcomeMessage() {

        HelloWorldService.executeHelloWorldService()
            .then(response => this.handleSuccesfulResponse(response));

    }
    
    handleSuccesfulResponse(response) {

        this.setState({welcomeMessage: response.data})

    }

}

export default WelcomeComponent
