import axios from 'axios'

class TodoDataServcice {

    retrieveAllTodos(username) {

        //console.log()
        return axios.get(`http://localhost:8080/users/${username}/todos`)

    }

    retrieveTodo(username, id) {

        return axios.get(`http://localhost:8080/users/${username}/todos/${id}`)

    }

    deleteTodo(username, id) {

        return axios.delete(`http://localhost:8080/users/${username}/todos/${id}`)

    }

    updateTodo(name, id, todo) {

        return axios.put(`http://localhost:8080/users/${name}/todos/${id}`, todo)

    }

}

export default new TodoDataServcice()