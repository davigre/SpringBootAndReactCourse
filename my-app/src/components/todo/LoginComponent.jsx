import { Component } from "react"
import AuthenticationService from "./AuthenticationService"

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

        AuthenticationService.executeJwtAuthenticationService(this.state.username, this.state.password)
                .then((response) => {

                    AuthenticationService.registerSuccessfulLoginForJWT(this.state.username, response.data.token);
                    this.props.navigate(`/welcome/${this.state.username}`)

                }).catch(() => {

                    this.setState({showSuccesfullMsg: false, hasLoginFailed: true})

                })

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

export default LoginComponent