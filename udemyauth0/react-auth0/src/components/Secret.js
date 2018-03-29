import React, { Component } from 'react';

export default class Secret extends Component {
    render(){
        return (
            <div>
                <p>
                This is a secret area.
                </p>
                <br/>
                <button>logout</button>
        </div>
        )
    }
}