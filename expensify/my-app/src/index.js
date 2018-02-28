import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter, Route, Switch, Link} from 'react-router-dom';

const ExpenseDashboardPage = () => (
<div>This is from the dashboard component. </div>
)
const AddExpensePage = () => (
<div>This is from the expense component. </div>
)
const EditExpensePage = () => (
<div>This is from the edit component. </div>
)
const HelpPage = () => (
<div>This is from the Help component. </div>
)
const NotFoundPage = () => (
<div>404! - <Link to="/">Go Home</Link>
    </div>
)

const routes = (
<BrowserRouter>
    <Switch>
      <Route path="/" component={ExpenseDashboardPage} exact={true}/>
    <Route path="/create" component={AddExpensePage}/>
    <Route path="/edit" component={EditExpensePage}/>
    <Route path="/help" component={HelpPage}/>
    <Route component={NotFoundPage}/>
    </Switch>
  
</BrowserRouter>    
);

//class App extends Component {
//  render() {
//    return (
//      <div>
// <p>test</p>
//      </div>
//    );
//  }
//}


ReactDOM.render(routes, document.getElementById('root'));
//registerServiceWorker();
