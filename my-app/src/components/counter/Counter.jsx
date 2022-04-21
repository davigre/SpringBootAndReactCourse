import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Counter.css'

class Counter extends React.Component {

    constructor() {

        super();
        this.state = {
            counter: 0
        }
        this.increment = this.increment.bind(this);
        this.reset = this.reset.bind(this);

    }

    render() {

        return (
            <div className="counter">
                <CounterButton by={1} incrementMethod={this.increment} />
                <CounterButton by={5} incrementMethod={this.increment} />
                <CounterButton by={10} incrementMethod={this.increment} />
                <span className="count" >{this.state.counter}</span>
                <div>
                    <button className="reset" onClick={this.reset} >Reset</button>
                </div>
            </div>
        )

    }

    increment(by) {
    
        // console.log(`increment from parent - ${by}`);
        // this.setState({ counter: this.state.counter + by});
        // this.setState(() => { return {counter: this.state.counter + by}});
        this.setState((prevState) => { return {counter: prevState.counter + by}});

    }

    reset() {

        this.setState({ counter: 0 });

    }

}

class CounterButton extends Component {

    constructor(props) {

        super(props);
        this.state = {
            counter: 0,
            counter2: props.other
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);

    }

    // render = () => {
    render() {

        // const style = {fontSize: "50px", padding: "15px 30px"};

        return (
            <div>
                {/* <button onClick={this.increment} >+{this.props.by}</button>
                <button onClick={this.decrement} >-{this.props.by}</button> */}
                {/* <span className="count" >{this.state.counter}</span>
                <span className="count" >{this.state.counter2}</span> */}
                <button onClick={() => this.props.incrementMethod(this.props.by)} >+{this.props.by}</button>
                <button onClick={() => this.props.incrementMethod(-this.props.by)} >-{this.props.by}</button>
            </div>
        )

    }

    // increment = () => {
    increment() {
    
        this.setState({
            counter: this.state.counter + this.props.by,
            counter2: this.state.counter2 - this.props.by
        });

        // this.props.other = this.props.other - this.props.by;

        this.props.incrementMethod(this.props.by);
    
    }

    decrement() {
    
        this.setState({
            counter: this.state.counter - this.props.by,
            counter2: this.state.counter2 + this.props.by
        });

        // this.props.other = this.props.other - this.props.by;

        this.props.incrementMethod(-this.props.by);
    
    }

}

CounterButton.propTypes = { by: PropTypes.number, other: PropTypes.number }
CounterButton.defaultProps = { by: 1, other: 100 }

export default Counter
