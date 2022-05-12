import React, { Component } from "react"
import moment from "moment"
import { ErrorMessage, Field, Form, Formik } from "formik"
import TodoDataService from "../../api/todo/TodoDataService"
import AuthenticationService from "./AuthenticationService"

class TodoComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {

            id: this.props.params.id,
            description: '',
            targetDate: moment(new Date()).format('YYYY-MM-DD'),
            done: false

        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);

    }

    componentDidMount() {

        let username = AuthenticationService.getLoggedInUserName()

        TodoDataService.retrieveTodo(username, this.state.id)
            .then(response => {

                console.log("retrieveTodo: ", response)

                this.setState({

                    description: response.data.description,
                    targetDate: moment(response.data.targetDate, moment.HTML5_FMT.DATETIME_LOCAL_MS).format('YYYY-MM-DD'),
                    done: response.data.done

                })

            })

    }

    validate(values) {

        let errors = {}

        if (!values.description) {

            errors.description = 'Enter a Description'
            
        } else if (values.description.length < 5) {
            
            errors.description = 'Enter at least 5 characters in Description'

        }

        if (!moment(values.targetDate).isValid()) {

            errors.targetDate = 'Enter a valid Target Date'

        }

        console.log("validating values:", values)

        return errors

    }

    onSubmit(values) {

        console.log("Submitting values:", values);

        let username = AuthenticationService.getLoggedInUserName()

        TodoDataService.updateTodo(username, this.state.id, {
            id: this.state.id,
            username: username,
            description: values.description,
            targetDate: values.targetDate,
            done: values.done
        }).then(() => this.props.navigate(`/todos`))

    }

    render() {

        let {description, targetDate, done} = this.state

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">

                    <Formik
                        // initialValues = {{description: description, targetDate: targetDate}}
                        initialValues = {{description, targetDate, done}}
                        onSubmit = {this.onSubmit}
                        validate = {this.validate}
                        validateOnChange = {false}
                        validateOnBlur = {false}
                        enableReinitialize = {true}
                    >
                        {
                            () => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Is Done?</label>
                                        <Field className="form-control" type="checkbox" name="done" />
                                    </fieldset>
                                    <button type="submit" className="btn btn-success" >Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
                
            </div>
        )

    }

}

export default TodoComponent
