import axios from 'axios'

class TodoDataServcice {

    retrieveAllTodos(name) {

        //console.log()
        return axios.get(`http://localhost:8080/users/${name}/todos`)

    }

}

export default new TodoDataServcice()