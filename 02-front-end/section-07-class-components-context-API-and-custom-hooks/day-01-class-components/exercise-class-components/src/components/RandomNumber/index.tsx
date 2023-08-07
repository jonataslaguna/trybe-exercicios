import React from "react";

type RandomNumberProps = {
    max: number
};

type RandomNumberState = {
    randomNumber: number
};


class RandomNumber extends React.Component<RandomNumberProps,  RandomNumberState> {
    state = {
        randomNumber: 0,
    };

    generateRandomNumber = () => Math.floor( Math.random() * this.props.max ) + 1;
    
    handleClick = () => {
        const number = this.generateRandomNumber();
        this.setState({
                ...this.state,
                randomNumber: number
            });
    }


    render() {
        return (
            <>
            <h1>{this.state.randomNumber}</h1>
            <button onClick={ this.handleClick }>Generate</button>
            </>
        )
    }
}

export default RandomNumber;