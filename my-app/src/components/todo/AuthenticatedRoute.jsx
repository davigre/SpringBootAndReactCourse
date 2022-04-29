import { Component } from "react"
import { Navigate } from "react-router-dom"
//import { Route } from "react-router-dom";
import AuthenticationsService from "./AuthenticationsService";

class AuthenticatedRoute extends Component {

    render() {

        if(AuthenticationsService.isUserLoggedIn()) {

            return {...this.props.children}
            //return <Route {...this.props} /> //REACT-5
            
        } else {

            return <Navigate to="/login" />
            // <Redirect to="/login" />

        }

    }

}

export default AuthenticatedRoute;
