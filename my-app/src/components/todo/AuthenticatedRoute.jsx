import { Component } from "react"
import { Navigate } from "react-router-dom"
//import { Route } from "react-router-dom";
import AuthenticationService from "./AuthenticationService"

class AuthenticatedRoute extends Component {

    render() {

        if(AuthenticationService.isUserLoggedIn()) {

            return {...this.props.children}
            //return <Route {...this.props} /> //REACT-5
            
        } else {

            return <Navigate to="/login" />
            // <Redirect to="/login" />

        }

    }

}

export default AuthenticatedRoute;
