import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
var data = require('./sessions.json'); 
console.log(data.Items[0].Speakers[0].FirstName + " " + data.Items[0].Speakers[0].LastName);
console.log(data.Items[2])


for(var i = 0; i < data.length; i++) {
    var obj = data[i];

    console.log(obj.title);
}

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
    


    return (
      <div>
        <h1 onClick={this.counterZero}>Make 0</h1>
        <h1 onClick={this.counterOne}>Make 1</h1>
        <h1 onClick={this.counterTwo}>Make 2</h1>
        <GetCounter counter={counter} />
      </div>
    );
  }
}

function CounterIsZero(props) {
  return <div>
      <h3>{data.Items[0].Title}</h3>
      <p>{data.Items[0].Description}</p>
      <h3>About the Speaker</h3>
          <h3>{data.Items[0].Speakers[0].FirstName + " " + data.Items[0].Speakers[0].LastName + " "}
          <i>{data.Items[0].Speakers[0].Company}</i>
          </h3>
          </div>;
}

function CounterIsOne(props) {
  return <div>
      <h3>{data.Items[1].Title}</h3>
      <p>{data.Items[1].Description}</p>
      <h3>About the Speaker</h3>
          <h3>{data.Items[1].Speakers[1].FirstName + " " + data.Items[1].Speakers[1].LastName + " "}
     <i>{data.Items[1].Speakers[1].Company}</i>
         </h3>
         </div>;
}

function CounterIsTwo(props) {
  return <div>
      <h3>{data.Items[2].Title}</h3>
      <p>{data.Items[2].Description}</p>
      <p>{data.Items[2].Speakers[2]}</p>
      </div>;
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



ReactDOM.render(
  <Display3 />,
  document.getElementById('root')
);
