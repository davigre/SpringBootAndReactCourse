import React, { Component } from "react";
import moment from "moment";
import { ErrorMessage, Field, Form, Formik } from "formik";

class TodoComponent extends Component {

    constructor(props) {

        super(props)

        this.state = {

            id: this.props.params.id,
            description: 'Learn forms Now',
            targetDate: moment(new Date()).format('YYYY-MM-DD')

        }

        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);

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

    }

    render() {

        // let description = this.state.description;
        // let targetDate = this.state.targetDate;
        let {description, targetDate} = this.state

        return (
            <div>
                <h1>Todo</h1>
                <div className="container">

                    <Formik
                        // initialValues = {{description: description, targetDate: targetDate}}
                        initialValues = {{description, targetDate}}
                        onSubmit = {this.onSubmit}
                        validate = {this.validate}
                        validateOnChange = {false}
                        validateOnBlur = {false}
                    >
                        {
                            (props) => (
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
                                    <button type="submit" className="btn btn-success" >Save</button>
                                </Form>
                            )
                        }
                    </Formik>

                </div>
                {/* Todo Component for id - {this.props.params.id} */}
            </div>
        )

    }

}

export default TodoComponent