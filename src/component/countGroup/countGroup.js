import React from "react";
import Counter from "../conter/Counter";

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
        this.setState({
            size: num,
            totalValue: 0,
            countNumber: Array(num).fill(0),
        })
    }

    handleDecrease(key){
        const countNumber = this.state.countNumber.slice();
        countNumber[key] = countNumber[key] - 1.
        this.setState((preState) => ({
            size: preState.size,
            totalValue: preState.totalValue - 1,
            countNumber:countNumber,
        }))
    }

    handleIncrease = (key) => {
        console.log(key)
        const countNumber = this.state.countNumber.slice();
        countNumber[key] = countNumber[key]+1;
        this.setState((preState) => ({
            size: preState.size,
            totalValue: preState.totalValue + 1,
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