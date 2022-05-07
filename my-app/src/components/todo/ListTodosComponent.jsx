import { Component } from "react"
import TodoDataService from "../../api/todo/TodoDataService"
import AuthenticationService from "./AuthenticationService"

class ListTodosComponent extends Component {

    constructor(props) {

        console.log('constructor')
        super(props)
        this.state = {
            todos: [], 
            message: null
        }

        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.refreshTodos = this.refreshTodos.bind(this)

    }

    componentWillUnmount() {

        console.log('componentWillUnmount')

    }

    shouldComponentUpdate(nextProps, nextState) {

        console.log('shouldComponentUpdate')
        console.log(nextProps)
        console.log(nextState)
        return true

    }

    componentDidMount() {

        console.log('componentDidMount')
        this.refreshTodos()
        console.log(this.state)

    }

    refreshTodos(){

        let username = AuthenticationService.getLoggedInUserName()
        console.log("componentDidMount: %s", username)
        TodoDataService.retrieveAllTodos(username)
            .then(
                response => {

                    // console.log(response)
                    this.setState({todos : response.data})

                }
            )

    }

    deleteTodoClicked(id) {

        let username = AuthenticationService.getLoggedInUserName()

        console.log('deleteTodoClicked: %s - %d', username, id)

        TodoDataService.deleteTodo(username, id)
            .then(response => {
                this.setState({message: `Delete of todo ${id} was succesful`})
                this.refreshTodos()
            })

    }

    render() {

        console.log('render')
        return (

            <>
            <div><h1>List Todos</h1></div>
            {this.state.message && <div className="alert alert-success">{this.state.message}</div>}
            <div className='container'>
                <table className='table'>
                    <thead>
                        <tr><th>Description</th><th>Is completed</th><th>Target Date</th><th>Delete</th></tr>
                    </thead>
                    <tbody>
                        {
                            this.state.todos.map(
                                todo => 
                                    <tr key={todo.id}>
                                        <td>{todo.description}</td>
                                        <td>{todo.done.toString()}</td>
                                        <td>{todo.targetDate}</td>
                                        <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>
                                    </tr>
                            )
                        }
                    </tbody>
                </table>
            </div>
            </>

        )

    }

}

export default ListTodosComponent
