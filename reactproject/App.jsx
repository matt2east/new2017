import React from 'react';

class Greeting extends React.Component {
  render() {
    return <h3>this is a stateless, propless child component</h3>;
  }
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', data: ''};
     this.updateState = this.updateState.bind(this);  

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
      //makes possible to type input
  }

  handleSubmit(event) {
    event.preventDefault();
      //stops input from resetting
    alert("submitted")  
  }
    updateState() {
      let api = "http://api.screenshotmachine.com/?key=2df3a8&dimension=1024xfull&format=png&url=";  
    let input = this.state.value;
    let newVal = api + input;    
    this.setState({value: '', data: newVal})
   }
    
     

  render() {
    return (
      <form 
          onSubmit={this.handleSubmit}
          >
        <label>
          Enter a URL to get a screenshot.<br></br>
          <input type="text" value={this.state.value} placeholder="text" onChange={this.handleChange} />
        </label><br></br>
        <input type="submit" value="Submit" onClick = {this.updateState}/>
        <h2>{this.state.data}</h2>
            <Greeting></Greeting>
      </form>
    );
  }
}

export default App;

