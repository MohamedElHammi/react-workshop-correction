import React, { Component } from 'react'

export default class TestComponent extends Component {
    constructor() {
        super();
        this.state = { counter: 0 };
        console.log("Hello from constructor");
    }

    componentDidMount() {
        console.log("Hello from mounting");
    }

    handleClick() {
        this.setState((prevState)=> ({
                ...prevState,
                counter: prevState.counter + 1
            })
        );
    }

    render() {
        console.log("Hello from render");
        return (
            <div>
                <h1> {this.state.counter} </h1>
                <button onClick={()=>{this.handleClick()}} > + </button>
            </div>
        )
    }
}
