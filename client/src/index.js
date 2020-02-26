import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/index';
import * as serviceWorker from './serviceWorker';
import SingleLoanDetails from './components/SingleLoanDetails';
import NotFound from './components/NotFoundPage'
import {Route, Switch,BrowserRouter as Router} from 'react-router-dom'

function LendingCLub () {
    return(
        <div>
            <Router>
             <Switch>
             <Route exact path='/' component={App} ></Route>
             <Route path="/loan/:memberId" component={SingleLoanDetails}></Route>
             <Route path="*" component={NotFound}></Route>
             </Switch>
            </Router>
        </div>
    )
}
ReactDOM.render(<LendingCLub />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
