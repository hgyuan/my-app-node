import React from "react";

class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.value
        }
    }


    handleIncrease = () => {
        this.props.onIncrease(this.props.key1);
        console.log(this.props.key1)
    }


    handleDecrease() {
        this.setState((prevState) => ({
            value: prevState.value - 1,
        }))
        this.props.onDecrease();
    }

    render() {
        return (
            <div>
                <button onClick={()=>this.props.onDecrease()}>-</button>
                <mark>{this.props.value}</mark>
                <button onClick={this.handleIncrease }>+</button>
            </div>
        )
    }

}

export default Counter;