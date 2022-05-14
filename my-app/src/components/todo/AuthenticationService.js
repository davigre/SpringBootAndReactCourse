import axios from "axios";

class AuthenticationService {

    createJWTtoken(token) {

        return 'Bearer ' + token

    }

    executeJwtAuthenticationService(username, password) {

        return axios.post(`http://localhost:8080/authenticate`, {username, password})

    }

    registerSuccessfulLoginForJWT(username, token) {

        console.log('registerSuccessfulLoginJWT');
        sessionStorage.setItem('authenticatedUser', username);

        this.setupAxiosInterceptor(this.createJWTtoken(token))

    }

    createBasicAuthToken(username, password) {

        return 'Basic ' + window.btoa(username + ":" + password)

    }

    executeBasicAuthenticationService(username, password) {

        return axios.get(`http://localhost:8080/basicauth`, {

            headers: {authorization: this.createBasicAuthToken(username, password)}

        })

    }

    registerSuccessfulLogin(username, password) {

        console.log('registerSuccessfulLogin');
        sessionStorage.setItem('authenticatedUser', username);

        this.setupAxiosInterceptor(this.createBasicAuthToken(username, password))

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
