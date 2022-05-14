import axios from "axios";
import { API_URL } from "../../Constants";

export const USER_NAME_SESSION_ATTRIBUTE_NAME = 'authenticatedUser'

class AuthenticationService {

    createJWTtoken(token) {

        return 'Bearer ' + token

    }

    executeJwtAuthenticationService(username, password) {

        return axios.post(`${API_URL}/authenticate`, {username, password})

    }

    registerSuccessfulLoginForJWT(username, token) {

        console.log('registerSuccessfulLoginJWT');
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);

        this.setupAxiosInterceptor(this.createJWTtoken(token))

    }

    createBasicAuthToken(username, password) {

        return 'Basic ' + window.btoa(username + ":" + password)

    }

    executeBasicAuthenticationService(username, password) {

        return axios.get(`${API_URL}/basicauth`, {

            headers: {authorization: this.createBasicAuthToken(username, password)}

        })

    }

    registerSuccessfulLogin(username, password) {

        console.log('registerSuccessfulLogin');
        sessionStorage.setItem(USER_NAME_SESSION_ATTRIBUTE_NAME, username);

        this.setupAxiosInterceptor(this.createBasicAuthToken(username, password))

    }

    logout() {

        sessionStorage.removeItem(USER_NAME_SESSION_ATTRIBUTE_NAME);

    }

    isUserLoggedIn() {

        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME) 

        return (user !== null);

    }

    getLoggedInUserName() {

        let user = sessionStorage.getItem(USER_NAME_SESSION_ATTRIBUTE_NAME)
        console.log("getLoggedInUserName: %s", user)
        if (user === null) return ''
        return user

    }

    setupAxiosInterceptor(basicAuthHeader) {

        console.log("basicAuthHeader: ", basicAuthHeader)

        axios.interceptors.request.use(
            (config) => {

                if (this.isUserLoggedIn()) {

                    config.headers.authorization = basicAuthHeader

                }

                return config

            }
        )

    }

}

export default new AuthenticationService()
