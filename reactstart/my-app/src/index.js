import ReactDOM from 'react-dom';
import React, { Component } from 'react';
import Modal from 'react-modal';
import OptionModal from './OptionModal';
//import './styles/styles.css';
// stateless functional component

class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.state = {
      options: [],
    selectedOption: undefined    
    };
  }
componentDidMount(){
    try{
        const json = localStorage.getItem('options')
    const options = JSON.parse(json)
    if (options){
    this.setState(()=>({options}))
    console.log('fetching data')    
    }
    }
    catch(e) {
            //do nothing
    }
 
}
    componentDidUpdate(prevProps, prevState){
    if (prevState.options.length !==this.state.options.length){
    const json = JSON.stringify(this.state.options)    
    console.log('saving data ' + json);
    localStorage.setItem('options', json)    
    }    
}
componentWillUnmount(){
    console.log('componentWillUnmount')
}    
  handleDeleteOptions = () =>{
    this.setState(() => ({ options: undefined }));
  }
  handleDeleteOption(optionToRemove) {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => optionToRemove !== option)
    }));
  }
  handlePick() {
    const randomNum = Math.floor(Math.random() * this.state.options.length);
    const option = this.state.options[randomNum];
//    alert(option);
    this.setState(()=>({selectedOption:option}))  
  }
  handleModal=()=>{
      this.setState(()=>({selectedOption: undefined}))
  }    
  handleAddOption(option) {
     document.getElementById("formId").reset()    
    if (!option) {
      return 'Enter valid value to add item';
    } else if (this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    }


    this.setState((prevState) => ({
      options: prevState.options.concat(option)
    }));
  }
  render() {
    const subtitle = 'Put your life in the hands of a computer';

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <OptionModal
        handleModal={this.handleModal}
        selectedOption={this.state.selectedOption}
        />
        <AddOption
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

const Header = (props) => 
  (
    <div>
      <h1>{props.title}</h1>
      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );


Header.defaultProps = {
  title: 'Indecision'
};

const Action = (props) => 
  (
    <div>
      <button
        onClick={props.handlePick}
        disabled={!props.hasOptions}
      >
        What should I do???
      </button>
    </div>
  );


const Options = (props) => 
  (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>
      {props.options.length ===0 && <p>Please add an option to get started.</p>}
      {
        props.options.map((option) => (
          <Option
            key={option}
            optionText={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      }
    </div>
  );


const Option = (props) => 
  (
    <div>
      {props.optionText}
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionText);
        }}
      >
        remove
      </button>
    </div>
  );


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

    this.setState(() => ({ error }));
    if (!error){
    e.target.elements.option.value='';    
    }  
  }
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form id="formId" onSubmit={this.handleAddOption}>
          <input type="text" name="option" />
          <button>Add Option</button>
        </form>
      </div>
    );
  }
}

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: {props.age}</p>
//     </div>
//   );
// };

ReactDOM.render(<IndecisionApp options={['drink beer', 'smoke crack']}/>, document.getElementById('root'));

