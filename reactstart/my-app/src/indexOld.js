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
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: props.options
    };
  }
  handleDeleteOptions() {
    this.setState(() => ({options: []}))
  }
  handleDeleteOption(option){
      console.log('hdo', option)
      
  }
    
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
    alert(option);
  }
  handleAddOption(option) {
      document.getElementById("addOptionForm").reset()
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }

//    this.setState((prevState) => {
//      return {
//        options: prevState.options.concat(option)
//      };
//    });
      this.setState((prevState) => ({options: prevState.options.concat(option)}))
  }
  render() {
    const title = 'Indecision';
    const subtitle = 'Put your life in the hands of a computer';


    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}
  IndecisionApp.defaultProps = {
      options: []
  }

//class Header extends React.Component {
//  render() {
//    return (
//      <div>
//        <h1>{this.props.title}</h1>
//        <h2>{this.props.subtitle}</h2>
//      </div>
//    );
//  }
//}

const Header = (props) =>{
    return(
          <div>
        <h1>{props.title}</h1>
        <h2>{props.subtitle}</h2>
      </div>  
    )
}

//class Action extends React.Component {
//  render() {
//    return (
//      <div>
//        <button
//          onClick={this.props.handlePick}
//          disabled={!this.props.hasOptions}
//        >
//          What should I do?
//        </button>
//      </div>
//    );
//  }
//}

const Action = (props) =>{
    return(
          <div>
        <button
          onClick={props.handlePick}
          disabled={!props.hasOptions}
        >
          What should I do?
        </button>
      </div>
    )
}

//class Options extends React.Component {
//  render() {
//    return (
//      <div>
//        <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//        {
//          this.props.options.map((option) => <Option key={option} optionText={option} />)
//        }
//      </div>
//    );
//  }
//}

const Options = (props) => {
    return(
             <div>
        <button onClick={props.handleDeleteOptions}>Remove All</button>
        {
          props.options.map((option) => (
    <Option 
        key={option} 
        optionText={option}
        handleDeleteOption={props.handleDeleteOption}/>))
        }
      </div>
    )
}

//class Option extends React.Component {
//  render() {
//    return (
//      <div>
//        {this.props.optionText}
//      </div>
//    );
//  }
//}

const Option = (props) => {
    return(
          <div>
        {props.optionText}
      </div>
    )
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }
  handleAddOption(e) {
    e.preventDefault();

    const option = e.target.elements.option.value.trim();
    const error = this.props.handleAddOption(option);

//    this.setState(() => {
//      return { error };
//    });
      this.setState(()=> ({ error }))
  } 
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form id='addOptionForm' onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

const User = (props) => {
    return (
        <div>
        <p>Name: {props.name}</p>
        <p>Age: </p>
        </div>)

}

ReactDOM.render(<IndecisionApp options={['drink beer', 'smoke crack']}/>, document.getElementById('root'));

