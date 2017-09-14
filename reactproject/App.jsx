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
            <div>stateless</div>
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
    this.state = {value: '', data: '', childVisible: true, hide: true, finished: false};
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
    this.setState({value: '', data: newVal, childVisible: !this.state.childVisible, hide: false, finished: true})
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
          <input className="hide" type="text" value={this.state.value} placeholder="text" onChange={this.handleChange} style={{display: this.state.hide ? 'block' : 'none' }}/>
        </label><br></br>
        <input className="hide" type="submit" value="Submit" onClick = {this.updateState} style={{display: this.state.hide ? 'block' : 'none' }}/>
            <div className="finished" style={{display: this.state.finished ? 'block' : 'none' }}>Here is your result.</div>
        <img src={this.state.data}></img>    
            <ChildProps></ChildProps>
      </form>
    );
  }
}

export default App;
