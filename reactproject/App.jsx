import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    let api = "http://api.screenshotmachine.com/?key=2df3a8&dimension=1024xfull&format=png&url=";  
    let input = this.state.value;
    event.preventDefault();  
    let newVal = api + input;
    alert(newVal)  
  }

  render() {
    return (
      <form 
          onSubmit={this.handleSubmit}
          >
        <label>
          Enter a URL to get a screenshot.<br></br>
          <input type="text" value={this.state.value} placeholder="text" onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default App;

