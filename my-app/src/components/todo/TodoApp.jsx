import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import withNavigation from './WithNavigation'
import withParams from './withParams'

class TodoApp extends Component {

    render() {

        return (
            <div className="TodoApp">
                <Router>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                        <Route path="/todos" element={<ListTodosComponent />} />
                        <Route path="*" element={<ErrorComponent/>} />
                    </Routes>
                </Router>
            </div>
        )

    }

}

class ListTodosComponent extends Component {

    constructor(props) {

        super(props)
        this.state = {
            todos: [
                {id: 0, description: 'Learn to Dance'},
                {id: 1, description: 'Become Expert in React'},
                {id: 2, description: 'Visit India'}
            ]
        }

    }

    render() {

        return (

            <>
            <div><h1>List Todos</h1></div>
            <table>
                <thead>
                    <tr><th>Id</th><th>Description</th></tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map(
                            todo => 
                                <tr>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                </tr>
                        )
                    }
                </tbody>
            </table>
            </>

        )

    }

}
class WelcomeComponent extends Component {

    render() {

        return <div>Welcome {this.props.params.name}</div>

    }

}

function ErrorComponent() {

    return <div>An error occurred. I don't know what to do</div>

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

        this.setState({
            [event.target.name]: event.target.value
        })

    }

    loginClicked() {

        if(this.state.username === 'in28minutes' && this.state.password === 'dummy') {

            this.props.navigate(`/welcome/${this.state.username}`)

        } else {
            
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

const LoginComponentWithNavigation = withNavigation(LoginComponent);
const WelcomeComponentWithParams = withParams(WelcomeComponent);

export default TodoApp;
