/**
 * state 동적 데이터를 다룰 때, 변경 가능성이 있는 데이터
 */
import React from "react";

class StateApp extends React.Component{
    state = {
        count: 0,
    };
    add=() =>{
        this.setState({count:this.state.count+1})
    }
    minus=() =>{
        this.setState(current => ({
            count: current.count-1
        }));
    }
    render() {
        return  (
        <div>
            <h1>The number is: {this.state.count}</h1>
            <button onClick={this.add}>Add</button>
            <button onClick={this.minus}>Minus</button>
        </div>
        );
    }
}

export default StateApp;