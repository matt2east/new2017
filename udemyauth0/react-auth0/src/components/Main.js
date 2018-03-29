import React, { Component } from 'react';

export default class Main extends Component {
    render(){
        return (
            <div>
            
          Hello {this.props.name}, <br/>
          Do you want to see the secret area? <a href="/secret"> click here </a>
       <div>
           {!this.props.auth.isAuthenticated() &&
           <br/>
           Please login first.
           <br/>
           <button onClick={this.props.auth.login}>login</button>
       </div>}
        </div>
        )
    }
}