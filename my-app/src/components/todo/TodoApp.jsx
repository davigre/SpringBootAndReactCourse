import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

class TodoApp extends Component {

    render() {

        return (
            <div className="TodoApp">
                <Router>
                    <Routes>
                        <Route path="/" exact element={<LoginComponent />} />
                        {/* <Route path="/login" exact element={<LoginComponent />} /> */}
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome" exact element={<WelcomeComponent />} />
                    </Routes>
                </Router>
            </div>
        )

    }

}

class WelcomeComponent extends Component {

    render() {

        return <div>Welcome in28minutes</div>

    }

}

class LoginComponent extends Component {

    constructor(props) {

        super(props)
        this.state = {
            username: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccesfullMsg: false
        }

        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }

    handleChange(event) {

        console.log(event.target.name + ":" + event.target.value);
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    loginClicked() {

        if(this.state.username === 'in28minutes' && this.state.password === 'dummy') {

            // console.log('Successful')
            this.setState({showSuccesfullMsg: true, hasLoginFailed: false})

        } else {

            // console.log('Fail')
            this.setState({showSuccesfullMsg: false, hasLoginFailed: true})

        }

    }

    render() {
        return (
            <>
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {/* <ShowLoginSuccessMsg showLoginSuccessMsg={this.state.showSuccesfullMsg} /> */}
                {this.state.hasLoginFailed && <div>Invalid Credentials</div>}
                {this.state.showSuccesfullMsg && <div>Successful Login</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button onClick={this.loginClicked}>Login</button>
            </>
        )
    }
}

export default TodoApp;
