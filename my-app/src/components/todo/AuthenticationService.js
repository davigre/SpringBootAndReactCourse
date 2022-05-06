class AuthenticationService {

    registerSuccessfulLogin(username, password) {

        console.log('registerSuccessfulLogin');
        sessionStorage.setItem('authenticatedUser', username);

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

}

export default new AuthenticationService()
