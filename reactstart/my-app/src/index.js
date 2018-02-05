import ReactDOM from 'react-dom';
import React, { Component } from 'react';

//class ComponentCounter extends React.Component {
//    constructor (props) {
//        super(props);
//        this.handleAddOne = this.handleAddOne.bind(this);
//        this.handleMinusOne = this.handleMinusOne.bind(this);
//        this.handleReset = this.handleReset.bind(this);
//        this.state = {
//            count: 0
//        };
//    }
//    handleAddOne(){
//        this.setState((prevState) =>{
//            return {
//                count: prevState.count + 1
//            }
//        })
//    }
//    handleMinusOne(){
//        this.setState((prevState) =>{
//            return {
//                count: prevState.count - 1
//            }
//        })
//    }
//        handleReset(){
//           this.setState(() =>{
//            return {
//                count: 0
//            }
//        })
//    }
//    render(){
//        return (
//        <div>
//            <h1>Count: {this.state.count} </h1>
//            <button onClick={this.handleAddOne}>+1</button>
//            <button onClick={this.handleMinusOne}>-1</button>
//            <button onClick={this.handleReset}>reset</button>
//            </div>
//        )
//    }
//}

class IndecisionApp extends React.Component {
    constructor (props){
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.state = {
            options: ['thing 1', 'thing 2', 'thing 3']
        }
    }

handleDeleteOptions() {
    alert('test delete')
    this.setState(()=> {
                  return {
                  options: []
                  }
                  })
}
handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
const option = this.state.options[randomNum];
     console.log(option);
}    
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';


    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action hasOptions={this.state.options.legth > 0}
        handlePick={this.handlePick}/>
        <Options options={this.state.options}
        handleDeleteOptions={this.handleDeleteOptions}
        />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handlePick}
//        disabled={!this.props.hasOptions}
        >What should I do?</button>
      </div>
    );
  }
}

class Options extends React.Component {

  render() {
    return (
      <div>
        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
        {
          this.props.options.map((option) => <Option key={option} optionText={option} />)
        }
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        {this.props.optionText}
      </div>
    );
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
    }
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('root'));

