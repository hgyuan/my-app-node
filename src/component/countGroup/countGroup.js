import React from "react";
import Counter from "../conter/Counter";
import {createStore} from "redux";
import {decreaseTodo, increaseTodo, resetTodo} from "../actions";
import counterCombineReducers from "../reducers";

const store  = createStore(counterCombineReducers)
class CountGroup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            size: 0,
            totalValue: 0,
            countNumber: Array(0).fill(0),
        }
    }

    handleResize = (event) => {
        const num = event.target.value ? parseInt(event.target.value) : 0;
        store.dispatch(resetTodo(0));
        this.setState({
            size: num,
            totalValue: store.getState().counterReducers,
            countNumber: Array(num).fill(0),
        })
    }

    handleDecrease(key){
        const num = 12;
        store.dispatch(decreaseTodo(num))
        const countNumber = this.state.countNumber.slice();
        countNumber[key] = countNumber[key] - num;
        this.setState((preState) => ({
            size: preState.size,
            totalValue: store.getState().counterReducers,
            countNumber:countNumber,
        }))
    }

    handleIncrease = (key) => {
        const num = 16;
        store.dispatch(increaseTodo(num))
        const countNumber = this.state.countNumber.slice();
        countNumber[key] = countNumber[key]+num;
        this.setState((preState) => ({
            size: preState.size,
            totalValue: store.getState().counterReducers,
            countNumber:countNumber,
        }))
    }

    render() {
        const initArray = [...Array(this.state.size).keys()];
        return (
            <div>
                <div>
                    <label>
                        group size:
                        <input onBlur={this.handleResize}/>
                    </label>
                </div>
                <div>
                    <label>
                        totalValue:
                        <label>{this.state.totalValue}</label>
                    </label>
                </div>
                {
                    initArray.map(key => <Counter key = {key} key1={key} value={this.state.countNumber[key]} onIncrease={this.handleIncrease} onDecrease={()=>this.handleDecrease(key)}
                                                  />)
                }
            </div>
        )
    }
}

export default CountGroup;