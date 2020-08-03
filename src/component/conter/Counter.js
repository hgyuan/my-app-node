import React from "react";


class Counter extends React.Component {
    handleIncrease = () => {
        this.props.onIncrease(this.props.key1);
        console.log(this.props.key1)
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onDecrease}>-</button>
                <mark>{this.props.value}</mark>
                <button onClick={()=>this.props.onIncrease(this.props.key1)}>+</button>
            </div>
        )
    }

}

export default Counter;