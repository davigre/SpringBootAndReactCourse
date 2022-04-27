import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import withNavigation from './WithNavigation'
import withParams from './withParams'

class TodoApp extends Component {

    render() {

        return (
            <div className="TodoApp">                
                <Router>
                    <HeaderComponent/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={<WelcomeComponentWithParams />} />
                        <Route path="/todos" element={<ListTodosComponent />} />
                        <Route path="*" element={<ErrorComponent/>} />
                    </Routes>
                    <FooterComponent/>
                </Router>
            </div>
        )

    }

}

class HeaderComponent extends Component {

    render() {

        return (

            <header>

                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.in28minutes.com" className='navbar-brand'>in28Minutes</a></div>
                    <ul className="navbar-nav">
                        <li><Link className="nav-link" to="/welcome/in28minutes" >Home</Link></li>
                        <li><Link className="nav-link" to="/todos" >Todos</Link></li>
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        <li><Link className="nav-link" to="/login" >Login</Link></li>
                        <li><Link className="nav-link" to="/logout" >Logout</Link></li>
                    </ul>
                </nav>

            </header>

        )

    }

}

class FooterComponent extends Component {

    render() {

        return (

            <div><hr/>Footer</div>

        )

    }

}

class ListTodosComponent extends Component {

    constructor(props) {

        super(props)
        this.state = {
            todos: [
                {id: 1, description: 'Learn to Dance', done:false, targetDate: new Date()},
                {id: 2, description: 'Become Expert in React', done:false, targetDate: new Date()},
                {id: 3, description: 'Visit India', done:false, targetDate: new Date()}
            ]
        }

    }

    render() {

        return (

            <>
            <div><h1>List Todos</h1></div>
            <table>
                <thead>
                    <tr><th>Id</th><th>Description</th><th>Is completed</th><th>target Date</th></tr>
                </thead>
                <tbody>
                    {
                        this.state.todos.map(
                            todo => 
                                <tr key={todo.id}>
                                    <td>{todo.id}</td>
                                    <td>{todo.description}</td>
                                    <td>{todo.done.toString()}</td>
                                    <td>{todo.targetDate.toString()}</td>
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

        return <div>Welcome {this.props.params.name}, You can manage your todos <Link to="/todos">here</Link></div>

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
