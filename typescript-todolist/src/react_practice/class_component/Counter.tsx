import React, { Component } from 'react';

interface StateProp {
  counter: number;
}

class Counter extends Component<StateProp> {
  state = {
    counter: 0,
  };

  handleIncrease: () => void = () => {
    this.setState((state: StateProp) => ({
      counter: state.counter + 1,
    }));
  };

  handleDecrease: () => void = () => {
    this.setState((state: StateProp) => ({
      counter: state.counter - 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.handleIncrease}>+1</button>
        <button onClick={this.handleDecrease}>-1</button>
      </div>
    );
  }
}

export default Counter;

//주석 문법?
//TODO 해야할일임
//* 이거 중요함
//! 이거 주목해주셈
//? 이거 궁금함
// @param 함수의 파라미터
// @return 함수 반환 정보
