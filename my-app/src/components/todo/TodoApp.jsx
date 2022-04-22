import React, {Component} from 'react'

class TodoApp extends Component {

    render() {
        return (
            <div className="TodoApp">
                <LoginComponenet/>

            </div>
        )
    }

}

class LoginComponenet extends Component {

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

// function ShowInvalidCredentials(props) {

//     if(props.hasLoginFailed) {

//         return <div>Invalid Credentials</div>

//     }
//     return null

// }

// function ShowLoginSuccessMsg(props) {

//     if(props.showSuccesfullMsg) {

//         return <div>Successful Login</div>

//     }
//     return null

// }

export default TodoApp;
