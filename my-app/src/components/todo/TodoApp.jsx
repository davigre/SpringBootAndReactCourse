import React, {Component} from 'react'
import {BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import withNavigation from './WithNavigation'
import withParams from './withParams'
import AuthenticationsService from './AuthenticationsService'
import AuthenticatedRoute from './AuthenticatedRoute'

class TodoApp extends Component {

    render() {

        return (
            <div className="TodoApp">                
                <Router>
                    <HeaderComponentWithNavigation/>
                    <Routes>
                        <Route path="/" element={<LoginComponentWithNavigation />} />
                        <Route path="/login" element={<LoginComponentWithNavigation />} />
                        <Route path="/welcome/:name" element={
                                <AuthenticatedRoute>
                                    <WelcomeComponentWithParams />
                                </AuthenticatedRoute>
                            } />
                        <Route path="/todos" element={
                            <AuthenticatedRoute>
                                <ListTodosComponent />
                            </AuthenticatedRoute>
                        } />
                        <Route path="/logout" element={
                            <AuthenticatedRoute>
                                <LogoutComponent />
                            </AuthenticatedRoute>
                        } />
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

        const isUserLoggedIn = AuthenticationsService.isUserLoggedIn();
        // console.log(isUserLoggedIn);

        return (

            <header>

                <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div><a href="http://www.in28minutes.com" className='navbar-brand'>in28Minutes</a></div>
                    <ul className="navbar-nav">
                        {isUserLoggedIn && <li><Link className="nav-link" to="/welcome/in28minutes" >Home</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/todos" >Todos</Link></li>}
                    </ul>
                    <ul className="navbar-nav navbar-collapse justify-content-end">
                        {!isUserLoggedIn && <li><Link className="nav-link" to="/login" >Login</Link></li>}
                        {isUserLoggedIn && <li><Link className="nav-link" to="/logout" onClick={AuthenticationsService.logout}>Logout</Link></li>}
                    </ul>
                </nav>

            </header>

        )

    }

}

class FooterComponent extends Component {

    render() {

        return (

            <footer className='footer'>

                <span className='text-muted'>All Rights Reserved 2018 @in28minutes</span>
                
            </footer>

        )

    }

}

class LogoutComponent extends Component {

    render() {

        return (

            <>
                <h1>You are logged out</h1>
                <div className='container'>
                    Thank You for using out application
                </div>
            </>

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
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr><th>Description</th><th>Is completed</th><th>Target Date</th></tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo => 
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate.toString()}</td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </>

        )

    }

}
class WelcomeComponent extends Component {

    render() {

        return (

            <>
                <h1>Welcome!</h1>    
                <div className='container'>
                    Welcome '{this.props.params.name}', You can manage your todos <Link to="/todos">here</Link>
                </div>
            </>

        )

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

            console.log('pass')

            AuthenticationsService.registerSuccessfulLogin(this.state.username, this.state.password);

            this.props.navigate(`/welcome/${this.state.username}`)

        } else {
            
            this.setState({showSuccesfullMsg: false, hasLoginFailed: true})

        }

    }

    render() {
        return (
            <>
                <h1>Login</h1>
                <div className='container'>

                </div>

                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {/* <ShowLoginSuccessMsg showLoginSuccessMsg={this.state.showSuccesfullMsg} /> */}
                {this.state.hasLoginFailed && <div className='alert alert-warning'>Invalid Credentials</div>}
                {this.state.showSuccesfullMsg && <div>Login Successful</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className='btn' onClick={this.loginClicked}>Login</button>
            </>
        )
    }
}

const HeaderComponentWithNavigation = withNavigation(HeaderComponent);
const LoginComponentWithNavigation = withNavigation(LoginComponent);
const WelcomeComponentWithParams = withParams(WelcomeComponent);

export default TodoApp;
