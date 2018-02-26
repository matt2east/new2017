import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import registerServiceWorker from './registerServiceWorker';

class Display3 extends React.Component {
  constructor(props) {
    super(props);
    this.counterZero = this.counterZero.bind(this);
    this.counterOne = this.counterOne.bind(this);
    this.counterTwo = this.counterTwo.bind(this);  
    this.state = {counter: 0};
  }

  counterZero() {
    this.setState({counter: 0});
  }

  counterOne() {
    this.setState({counter: 1});
  }
    counterTwo() {
    this.setState({counter: 2});
  }

  render() {
    const counter = this.state.counter;
    
    let button = null;
    if (counter===0) {
      button = <Make1 onClick={this.counterOne} />;
    } 
      else if (counter===1) {
      button = <Make2 onClick={this.counterTwo} />;
    }
      else if (counter===2) {
      button = <Make0 onClick={this.counterZero} />;
    }

    return (
      <div>
        <GetCounter counter={counter} />
        {button}
      </div>
    );
  }
}

function CounterIsZero(props) {
  return <h1>The counter is 0.</h1>;
}

function CounterIsOne(props) {
  return <h1>The counter is 1.</h1>;
}

function CounterIsTwo(props) {
  return <h1>The counter is 2.</h1>;
}

function GetCounter(props) {
  const counter = props.counter;
  if (counter===0) {
    return <CounterIsZero />;
  }
    else if (counter===1){
    return <CounterIsOne />;
        
    }
        else if (counter===2) {
  return <CounterIsTwo />;
}

}

function Make1(props) {
  return (
    <button onClick={props.onClick}>
      Make 1
    </button>
  );
}

function Make2(props) {
  return (
    <button onClick={props.onClick}>
      Make 2
    </button>
  );
}


function Make0(props) {
  return (
    <button onClick={props.onClick}>
      Make 0
    </button>
  );
}

ReactDOM.render(
  <Display3 />,
  document.getElementById('root')
);
