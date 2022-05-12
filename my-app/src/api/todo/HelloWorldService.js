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
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`);
                
    }
    
}

export default new HelloWorldService()
