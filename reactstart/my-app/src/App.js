import React, { Component } from 'react';
//import logo from './logo.svg';
//import './App.css';

class IndecisionApp extends Component {
    render() {
        return <div>
             <Header />
        <Action />
        <Options />
        <AddOption />
            </div>
    }
}

class Header extends Component {
    render() {
        return <div><h1>Indecision App</h1>
            <h2>Put your life in the hands of a computer.</h2></div>
    }
}

class Action extends Component {
    render() {
        return <div><button>What should I do?</button></div>
    }
}
    
    class Options extends Component {
    render() {
        return <p>Options component here.</p>
    }
}
        class AddOption extends Component {
    render() {
        return <p>AddOption component here.</p>
    }
}



class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Action />
        <Options />
        <AddOption />
    
      </div>
    );
  }
}

export default App;
