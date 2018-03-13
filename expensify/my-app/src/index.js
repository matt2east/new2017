import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch, Link, NavLink} from 'react-router-dom';
//import AppRouter from './routers/AppRouter'




class AppTest extends Component {
  render() {
    return (
      <div>
 <p>test</p>
      </div>
    );
  }
}


ReactDOM.render(AppTest, document.getElementById('root'));
//registerServiceWorker();
