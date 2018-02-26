import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import jsonData from './sessions.json';


var data = require('./sessions.json'); 
console.log(data.Items[0].Speakers[0].FirstName + " " + data.Items[0].Speakers[0].LastName);


for(var i = 0; i < data.length; i++) {
    var obj = data[i];

    console.log(obj.title);
}





class App extends Component {
constructor(props) {
  super(props);

  this.state = {
      counter: 0,
     


  };
}
  toggleHidden () {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }
    
  //assign a state to each track 
//onClick = change state    
    
    //function changeState
    // if state is 1 return component 1
    // if state is 2 return component 2
    // if state is 3 return component 3


render() {
 return(
     <div>
     <h1>{data.Items[0].Track.Title}</h1>
     <p>{data.Items[0].Description}</p>
     <h2>About the Speaker</h2>
     <h3>{data.Items[0].Speakers[0].FirstName + " " + data.Items[0].Speakers[0].LastName + " "}
     <i>
     {data.Items[0].Speakers[0].Company}
     </i></h3>
     
     <div className="tab">
  <button className="tablinks" onClick={this.toggleHidden.bind(this)} id="defaultOpen">{data.Items[0].Title}</button>
  <button className="tablinks" onClick="openCity(event, 'Paris')">Paris</button>
  <button className="tablinks" onClick="openCity(event, 'Tokyo')">Tokyo</button>
</div>

<div id="London" className="tabcontent">
  <h3>{data.Items[0].Title}</h3>
  <p>{data.Items[0].Description}</p>
     <h3>About the Speaker</h3>
       <h3>{data.Items[0].Speakers[0].FirstName + " " + data.Items[0].Speakers[0].LastName + " "}
     <i>
     {data.Items[0].Speakers[0].Company}
     </i></h3>
</div>

<div id="Paris" className="tabcontent">
  <h3>Paris</h3>
  <p>Paris is the capital of France.</p> 
</div>

<div id="Tokyo" className="tabcontent">
  <h3>Tokyo</h3>
  <p>Tokyo is the capital of Japan.</p>
</div>
           <div>
        {!this.state.isHidden && <Child />}
        </div>
            <div>
    
        {this.state.isHidden && <Child2 />}
        </div>
             <div>
    
        {this.state.isHidden && <Child3 />}
        </div>


    </div>
 );
}

}
const Child = () => (
<div className='modal'>
      <h3>{data.Items[0].Description}</h3>
  </div>
    
)
const Child2 = () => (
<div className='modal'>
    <h3>{data.Items[1].Description}</h3>
  </div>
    
)
const Child3 = () => (
<div className='modal'>
    <h3>{data.Items[2].Description}</h3>
  </div>
    
)
export default App;
