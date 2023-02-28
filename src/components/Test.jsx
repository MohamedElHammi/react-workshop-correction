import React, { Component } from 'react'

export default class Test extends Component {
    constructor() {
        super();
        this.state = {counter: 0}
    }

    componentDidMount() {
        console.log('Hello from mount');
    }

    componentDidUpdate() {
        console.log('Hello from update');
    }

    render() {
        return (
            <div>
                <div>
                    Counter : {this.state.counter}
                </div>
                <button onClick={()=>{this.setState((prevState)=>({counter: prevState.counter + 1}))}}> + </button>
            </div>
        )
    }
}
