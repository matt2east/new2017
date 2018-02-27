import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
var data = require('./sessions.json'); 
console.log(data.Items[0].Speakers[0].FirstName + " " + data.Items[0].Speakers[0].LastName);
console.log(data.Items[0].Track.Description)


for(var i = 0; i < data.length; i++) {
    var obj = data[i];

    console.log(obj.title);
}

class Atlassian extends React.Component {
  constructor(props) {
    super(props);
    this.counterZero = this.counterZero.bind(this);
    this.counterOne = this.counterOne.bind(this);
    this.counterTwo = this.counterTwo.bind(this);  
    this.handleChangeTab = this.handleChangeTab.bind(this);
    this.handleChangeTab1 = this.handleChangeTab1.bind(this);    
      
    this.state = {counter: 0,
                  display: 'none'
                 };
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
    handleChangeTab(){
this.setState({display: 'block'});
}
        handleChangeTab1(){
this.setState({display: 'none'});
}
        
    

    


  render() {
    const counter = this.state.counter;

    


    return (
      <div className="w3-container">
        

        
        <div className="w3-bar w3-black">
  <button className="w3-bar-item w3-button" onClick={this.handleChangeTab}>{data.Items[0].Track.Description}</button>
    <button className="w3-bar-item w3-button" onClick={this.handleChangeTab1}>{data.Items[1].Track.Description}</button>
  <button className="w3-bar-item w3-button">{data.Items[2].Track.Description}</button>
<button className="w3-bar-item w3-button" onClick={this.handleChangeTab1}>{data.Items[3].Track.Description}</button>
<button className="w3-bar-item w3-button" onClick={this.handleChangeTab1}>{data.Items[6].Track.Description}</button>
<button className="w3-bar-item w3-button" onClick={this.handleChangeTab1}>{data.Items[7].Track.Description}</button>
<button className="w3-bar-item w3-button" onClick={this.handleChangeTab1}>{data.Items[15].Track.Description}</button>
<button className="w3-bar-item w3-button" onClick={this.handleChangeTab1}>General</button>    
</div>
        
                <div className="tab" style={{display:!this.state.display}}>
  <button className="tablinks" onClick={this.counterZero}>{data.Items[0].Title}</button>
  <button className="tablinks" onClick={this.counterOne}>{data.Items[1].Title}</button>
  <button className="tablinks" onClick={this.counterTwo}>{data.Items[2].Title}</button>        
</div>
        
         <div className="tab " style={{display:this.state.display}} >
  <button className="tablinks" >test</button>
  <button className="tablinks" >test</button>
  <button className="tablinks" >test</button>        
</div>




   
        <GetCounter counter={counter} />
      </div>
    );
  }
}



function CounterIsZero(props) {
  return <div className="tabcontent">
      <h3>{data.Items[0].Title}</h3>
      <p>{data.Items[0].Description}</p>
      <h3>About the Speaker</h3>
          <h3>{data.Items[0].Speakers[0].FirstName + " " + data.Items[0].Speakers[0].LastName + " "}
          <i>{data.Items[0].Speakers[0].Company}</i>
          </h3>
          </div>;
}


function CounterIsOne(props) {
  return <div className="tabcontent">
      <h3>{data.Items[1].Title}</h3>
      <p>{data.Items[1].Description}</p>
      <h3>About the Speaker</h3>
          <h3>{data.Items[1].Speakers[1].FirstName + " " + data.Items[1].Speakers[1].LastName + " "}
     <i>{data.Items[1].Speakers[1].Company}</i>
         </h3>
         </div>;
}

function CounterIsTwo(props) {
  return <div className="tabcontent">
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
  <Atlassian />,
  document.getElementById('root')
);
