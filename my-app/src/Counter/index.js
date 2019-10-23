import React from "react";
import CounterIndex from "./index";

class Counter extends React.Component{
    state = {
        counter: 0
    };

    handleIncrement = () => {
        this.setState({ counter: this.state.count + 1 });
    };

    handleReset = () => {
        this.setState(!this.props.friends.clicky ? counter= 0 : {});
    };

    render(){
        return(
            <div className="text-center">
                <CounterIndex 
                counter={this.state.counter}
                handleIncrement={this.handleIncrement}
                reset={this.handleReset}
                />
            </div>
        )
    }
}

export default Counter;