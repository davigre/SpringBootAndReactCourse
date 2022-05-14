import axios from 'axios'
import { API_URL } from "../../Constants";

class TodoDataServcice {

    retrieveAllTodos(username) {

        return axios.get(`${API_URL}/users/${username}/todos`)

    }

    retrieveTodo(username, id) {

        return axios.get(`${API_URL}/users/${username}/todos/${id}`)

    }

    deleteTodo(username, id) {

        return axios.delete(`${API_URL}/users/${username}/todos/${id}`)

    }

    updateTodo(name, id, todo) {

        return axios.put(`${API_URL}/users/${name}/todos/${id}`, todo)

    }

    createTodo(name, todo) {

        return axios.post(`${API_URL}/users/${name}/todos/`, todo)

    }

}

export default new TodoDataServcice()