import axios from "axios"

class HelloWorldService {

    executeHelloWorldService() {
        // console.log('execute service')
        return axios.get('http://localhost:8080/hello-world');
    }

    executeHelloWorldBeanService() {
        // console.log('execute service')
        return axios.get('http://localhost:8080/hello-world-bean');
    }
    
    executeHelloWorldPathVariableService(name) {
        // console.log('execute service')

        let username = 'in28minutes'
        let password = 'dummy'

        let basicAuthHeader = 'Basic ' + window.btoa(username + ":" + password)

        console.log("basicAuthHeade:", basicAuthHeader)

        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`, 
                {
                    headers: {
                        Authorization: basicAuthHeader
                    }
                });
                
    }
    
}

export default new HelloWorldService()
