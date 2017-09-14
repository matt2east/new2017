import React from 'react';

class Child extends React.Component {
  render() {
    return (<div>Enter a URL to get a screenshot.</div>);
  }
}

class ChildProps extends React.Component {
  render() {
    return <div><h1>{this.props.headerProp}</h1>
            <h2>{this.props.contentProp}</h2>
            <div>stateles</div>
        </div>;
  }
}
ChildProps.defaultProps = {
   headerProp: "Header from props...",
   contentProp:"Content from props..."
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', data: '', childVisible: true};
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
    this.setState({value: '', data: newVal, childVisible: !this.state.childVisible})
   }
    
     

  render() {
    return (
      <form 
          onSubmit={this.handleSubmit}
          >
        <label>
            <div>
        {
          this.state.childVisible
            ? <Child />
            : null
        }
            </div>
            <br></br>
          <input type="text" value={this.state.value} placeholder="text" onChange={this.handleChange} />
        </label><br></br>
        <input type="submit" value="Submit" onClick = {this.updateState}/>
        <img src={this.state.data}></img>
            <ChildProps></ChildProps>
      </form>
    );
  }
}

export default App;