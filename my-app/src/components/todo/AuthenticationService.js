import axios from "axios";

class AuthenticationService {

    registerSuccessfulLogin(username, password) {

        console.log('registerSuccessfulLogin');
        sessionStorage.setItem('authenticatedUser', username);

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        this.setupAxiosInterceptor(basicAuthHeader)

    }

    logout() {

        sessionStorage.removeItem('authenticatedUser');

    }

    isUserLoggedIn() {

        let user = sessionStorage.getItem('authenticatedUser') 

        return (user !== null);

    }

    getLoggedInUserName() {

        let user = sessionStorage.getItem('authenticatedUser')
        console.log("getLoggedInUserName: %s", user)
        if (user === null) return ''
        return user

    }

    setupAxiosInterceptor(basicAuthHeader) {

        console.log("basicAuthHeade:", basicAuthHeader)

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
