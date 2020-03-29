import React from "react";

class Counter extends React.Component{
    state = {
        counter: 0
    };

    handleIncrement = () => {
        this.setState({ counter: this.state.count + 1 });
    };

    handleReset = () => {
        this.setState(!this.props.monsters.clicky ? counter= 0 : {});
    };

    render(){
        return(
            <div className="text-center">
                <Counter 
                counter={this.state.counter}
                handleIncrement={this.handleIncrement}
                reset={this.handleReset}
                />
            </div>
        )
    }
}

export default Counter;